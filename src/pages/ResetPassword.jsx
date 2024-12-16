// React Router
import { Link } from "react-router-dom"
// Image
import BG from "media/subscription/bg1.png"
import Hero from "media/forms/hero.png"
import Google from "media/forms/google.svg"

const ResetPassword = () => {
  return (
    <section>
      <div className="relative z-10 pt-[200px] lg:pb-[100px] md:pb-[80px] pb-[60px]">
        <img
          src={BG}
          alt="bg"
          className="absolute -z-10 w-full h-full object-cover object-center inset-0 "
        />
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 items-center">
            <div>
              <img src={Hero} alt="hero" className="mx-auto" />
            </div>
            <div>
              <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] leading-tight text-black font-bold my-2">
                Reset Password
              </h1>
              <p className="md:text-base text-[15px] leading-normal text-[#9399A6] font-medium max-w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <form method="post" className="py-[40px]">
                <input
                  type="password"
                  name="newPassword"
                  required
                  id="newPassword"
                  placeholder="Enter your new password"
                  className="w-full px-5 py-3 mb-5 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="block w-full my-5 py-4 bg-primary/80 text-white font-semibold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword
