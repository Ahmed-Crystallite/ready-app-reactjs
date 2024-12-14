// React
import { useEffect, useState } from "react"
// React Router
import { useParams, useNavigate } from "react-router-dom"

// Image
import BG from "media/subscription/bg1.png"; 
import Check from "media/accept.png"

const SubscriptionPlan = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [planData, setPlanData] = useState(null)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [selectedBank, setSelectedBank] = useState("")

  const banks = ["Bank A", "Bank B", "Bank C", "Bank D"]

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
      <div className="relative z-10 pt-[200px] pb-[50px]">
      <img src={BG} alt="bg" className="absolute -z-10 w-full h-full object-cover object-center inset-0 " />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5">
            <div>
              <span className="block lg:text-lg text-base font-extrabold leading-tight text-primary">
                WELCOME TO READYAPP
              </span>
              <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] leading-tight text-black font-bold my-2">
                Select your ReadyApp Plan
              </h1>
              <p className="md:text-base text-sm leading-normal text-secondary font-medium max-w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="bg-white border border-primary rounded-[20px]">
              <div className="bg-secondary/20 py-5 flex justify-between items-center 2xl:px-9 px-6 rounded-[20px_20px_0_0]">
                <h4 className="text-base leading-tight font-bold text-black">
                  Your Plan
                </h4>
                <div className="flex items-center gap-x-2">
                  <h4 className="text-base leading-tight font-bold text-black">
                    {planData.name}
                  </h4>
                  <img src={Check} alt="icon" />
                </div>
              </div>
              <form onSubmit={handleSubmit} className="2xl:py-8 py-6 2xl:px-9 px-6">
                {/* Card Number */}
                <div className="mb-4">
                  <label htmlFor="" className="block text-sm font-semibold leading-tight mb-3 text-black">
                    Card Number
                  </label>
                  <input
                    type="number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength="16"
                    className="w-full px-5 py-3 border border-gray-300 rounded-md text-black font-medium placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1258 2458 5874 6985"
                    required
                  />
                </div>
                {/* Bank Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold leading-tight mb-3 text-black">
                    Bank
                  </label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-md text-black font-medium placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" disabled>
                      Select Bank
                    </option>
                    {banks.map((bank, index) => (
                      <option key={index} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expiry Date */}
                <div className="mb-4 grid grid-cols-2 gap-x-5">
                  <div>
                    <label className="block text-sm font-semibold leading-tight mb-3 text-black">
                      Expiry Date
                    </label>
                    <input
                      type="month"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full px-5 py-3 border border-gray-300 rounded-md text-black font-medium placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>

                  {/* CVV */}
                  <div>
                    <label className="block text-sm font-semibold leading-tight mb-3 text-black">
                      CVV
                    </label>
                    <input
                      type="password"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength="3"
                      className="w-full px-5 py-3 border border-gray-300 rounded-md text-black font-medium placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full py-3 bg-primary/80 text-white font-semibold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Start my free trail
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionPlan
