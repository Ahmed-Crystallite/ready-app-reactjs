// React Router
import { Link } from "react-router-dom"
// Image
import BG from "media/subscription/bg1.png"
import Hero from "media/forms/hero.png"
import Google from "media/forms/google.svg"

const Login = () => {
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
              <span className="block lg:text-lg text-base font-extrabold leading-tight text-primary">
                WELCOME TO READYAPP
              </span>
              <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] leading-tight text-black font-bold my-2">
                Login
              </h1>
              <p className="md:text-base text-[15px] leading-normal text-[#9399A6] font-medium max-w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <form method="post" className="py-[40px]">
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <input
                  type="password"
                  name="password"
                  required
                  id="password"
                  placeholder="Password"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex items-center mt-5 justify-between">
                  <div className="flex gap-x-3 items-center">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="block w-4 h-4 focus:outline-none"
                    />
                    <label
                      htmlFor="remember"
                      className="w-max text-[15px] leading-tight text-[#9399A6] font-medium"
                    >
                      Remember
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-[#ED1212] text-[15px] leading-tight font-medium"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="block w-full my-5 py-4 bg-primary/80 text-white font-semibold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-x-3 w-full py-4 bg-[#D4D4D435] text-[#878787] font-bold rounded-md hover:bg-[#D4D4D4] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)]"
                >
                  <img src={Google} alt="icon" />
                  <span>Sign in with Google</span>
                </button>
              </form>
              <span className="block text-center text-[15px] leading-tight font-medium">
                Don’t have an account{" "}
                <Link to="/sign-up" className="text-primary">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
