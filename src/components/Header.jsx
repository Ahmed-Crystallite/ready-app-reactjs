import { useState } from "react"
import Logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  const [openIndex, setOpenIndex] = useState(false)
  return (
    <header>
      <nav className="relative">
        <div className="bg-primary py-3">
          <div className="container">
            <ul className="flex items-center md:justify-end justify-center gap-x-8">
              {[
                ["/help-center","Help Center"],
                ["/sign-up","Sign Up"],
                ["/login","Login"]
              ].map(([link,text], i) => (
                <li
                  key={i}
                  className="text-sm text-white font-semibold leading-tight transition-all duration-500 ease-in-out hover:opacity-70"
                >
                  <Link to={link} className="block capitalize">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center justify-between py-5">
            <Link to="/" className="block">
              <img src={Logo} alt="logo" />
            </Link>
            <ul className="md:flex hidden items-center gap-x-8">
              {[
                ["/", "Home"],
                ["/post-job", "Post a Job"],
                ["/subscription", "Subscription"],
                ["/find-candidates", "Find Candidates"],
                ["/blogs", "Blogs"],
              ].map(([link, text], i) => (
                <li
                  key={i}
                  className="relative group overflow-hidden text-sm text-black font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-primary"
                >
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `block capitalize mb-1 ${isActive ? "text-primary" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`block w-full h-[2px] rounded absolute -bottom-0 transition-all ease-in-out duration-500 ${
                            isActive ? "translate-x-0" : "-translate-x-full"
                          } group-hover:translate-x-0 bg-primary`}
                        ></span>
                        {text}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button
              className="relative z-50 md:hidden block w-10"
              onClick={() => setOpenIndex((prev) => !prev)}
            >
              <span
                className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${
                  !openIndex ? "rotate-0" : "-rotate-45 -mb-1"
                }`}
              ></span>
              <span
                className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black my-2 ${
                  !openIndex ? "block" : "hidden"
                }`}
              ></span>
              <span
                className={`block w-full transition-all duration-500 ease-in-out rounded-full h-1 bg-black ${
                  !openIndex ? "rotate-0" : "rotate-45"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
