import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const SubscriptionPlan = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [planData, setPlanData] = useState(null)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [cardholderName, setCardholderName] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  // Dummy bank list for selection
  const banks = ["Bank A", "Bank B", "Bank C", "Bank D"]

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Payment details submitted!")
  }
  useEffect(() => {
    const fetchPlanData = async () => {
      const plans = {
        basic: {
          name: "Basic",
        },
        standard: {
          name: "Standard",
        },
        premium: {
          name: "Premium",
        },
      }

      if (plans[slug]) {
        setPlanData(plans[slug])
      } else {
        navigate("/subscription")
      }
    }

    fetchPlanData()
  }, [slug, navigate])

  if (!planData) {
    return <div>Loading...</div>
  }

  return (
    <section>
      <div className="">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <span className="block lg:text-lg text-base font-extrabold leading-tight text-primary">
                WELCOME TO READYAPP
              </span>
              <h1 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight text-black font-bold my-2">
                Select your ReadyApp Plan
              </h1>
              <p className="md:text-base text-sm leading-normal text-secondary font-medium max-w-[1100px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <h1>{planData.name}</h1>
              {/* Cardholder Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Card Number */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  maxLength="16"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your card number"
                  required
                />
              </div>

              {/* Expiry Date */}
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="month"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* CVV */}
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength="3"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter CVV"
                    required
                  />
                </div>
              </div>

              {/* Bank Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Select Bank
                </label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">--Select Bank--</option>
                  {banks.map((bank, index) => (
                    <option key={index} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionPlan
