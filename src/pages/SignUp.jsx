// React
import { useState } from "react"
// React Router
import { Link } from "react-router-dom"
// Image
import BG from "media/subscription/bg1.png"
import Hero from "media/forms/hero2.png"
import Google from "media/forms/google.svg"
import File from "media/forms/files.png"

const SignUp = () => {
  const [preview, setPreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const locations = ["Location A", "Location B", "Location C", "Location D"]
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
                Sign up
              </h1>
              <p className="md:text-base text-[15px] leading-normal text-[#9399A6] font-medium max-w-[550px]">
                Enter your details to create your account
              </p>
              <form method="post" className="py-[40px]">
                <div className="relative mb-3">
                  <label htmlFor="image" className="cursor-pointer">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Selected"
                        className="w-[95px] h-[94px] object-cover object-top rounded"
                      />
                    ) : (
                      <img
                        src={File}
                        alt="icon"
                        className="w-[95px] h-[94px] object-cover object-top rounded"
                      />
                    )}
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  id="name"
                  placeholder="Company Name"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <input
                  type="number"
                  name="phone"
                  required
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <input
                  type="email"
                  name="email"
                  required
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 border border-[#798AA420] rounded-md shadow-[0px_5px_20px_rgba(121,_138,_164,_0.05)] text-black font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <select
                  className="w-full px-5 py-3 border border-gray-300 rounded-md text-[#9399A6] font-medium placeholder:text-[#9399A6] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                  required
                >
                  <option value={locations}>Location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
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
                  Sign up
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

export default SignUp
