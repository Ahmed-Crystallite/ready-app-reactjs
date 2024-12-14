// Hooks
import { useState, useEffect } from "react"

// Image
import BG from "media/subscription/bg1.png"; 

// Components
import { PackageCard } from "../components"

const Subscription = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/packages/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error))
  }, [])

  return (
    <section>
      <div className="relative z-10 pt-[200px] lg:pb-[100px] md:pb-[80px] pb-[60px]">
        <img src={BG} alt="bg" className="absolute -z-10 w-full h-full object-cover object-center inset-0 " />
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
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
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-5 lg:pt-[180px] pt-[80px]">
              {data.map((packageData, index) => (
                <PackageCard
                  key={packageData.id}
                  packageData={packageData}
                  css={index === 1 ? "lg:-mt-[80px]" : "mt-[0px]"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
