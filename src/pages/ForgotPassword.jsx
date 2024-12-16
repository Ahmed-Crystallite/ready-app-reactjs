// Image
import BG from "media/subscription/bg1.png"
import Hero from "media/forms/hero3.png"

const ForgotPassword = () => {
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
                Forgot Password
              </h1>
              <p className="md:text-base text-[15px] leading-normal text-[#9399A6] font-medium max-w-[550px]">
                Enter your email to recover password
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
                <button
                  type="submit"
                  className="block w-full my-5 py-4 bg-primary/80 text-white font-semibold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
