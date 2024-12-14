import { useEffect, useRef, useState } from "react"
import Logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  const [openIndex, setOpenIndex] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const timeoutIdRef = useRef(null)

  const handleScroll = () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    if (window.scrollY > 50) {
      setIsSticky(true)
      setIsIdle(false)

      timeoutIdRef.current = setTimeout(() => {
        setIsIdle(true)
      }, 3000)
    } else {
      setIsSticky(false)
      setIsIdle(false)
    }
  }
  useEffect(() => {
    if (openIndex) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [openIndex])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && openIndex) {
        setOpenIndex(false)
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [openIndex])
  return (
    <header>
      <nav
        className={`z-50 fixed w-full h-max transition-all duration-300 ease-in-out ${
          isSticky
            ? "fixed shadow-xl top-0 left-0 right-0 backdrop-blur-md bg-white/70"
            : ""
        } ${isIdle ? "!-top-full" : " "}`}
      >
        <div
          className={`absolute w-full bg-primary py-3 transition-all duration-1000 ease-in-out ${
            isSticky ? "!-top-full" : ""
          }`}
        >
          <div className="container">
            <ul className="flex items-center md:justify-end justify-center gap-x-8">
              {[
                ["/help-center", "Help Center"],
                ["/sign-up", "Sign Up"],
                ["/login", "Login"],
              ].map(([link, text], i) => (
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
          <div
            className={`flex items-center justify-between py-5 ${
              isSticky ? "mt-0" : "mt-12"
            }`}
          >
            <Link to="/" className="block">
              <img src={Logo} alt="logo" />
            </Link>
            <ul
              className={`md:flex justify-end md:relative transition-all md:h-full h-screen duration-500 ease-in-out z-50 md:w-full w-[80%] absolute md:inset-0 inset-[40px_0_0_0] md:translate-x-0 -translate-x-full items-center gap-x-8 ${
                openIndex ? "bg-primary translate-x-0 px-10 py-10" : ""
              } ${
                isSticky ? "!inset-0" : ""
              }`}
            >
              {[
                ["/", "Home"],
                ["/post-job", "Post a Job"],
                ["/subscription", "Subscription"],
                ["/find-candidates", "Find Candidates"],
                ["/blogs", "Blogs"],
              ].map(([link, text], i) => (
                <li
                  key={i}
                  className="relative block w-max group overflow-hidden text-sm md:text-black text-white font-semibold leading-tight transition-all duration-500 md:mb-0 mb-5 ease-in-out hover:md:text-primary hover:text-black"
                >
                  <NavLink
                    onClick={() => setOpenIndex(false)}
                    to={link}
                    className={({ isActive }) =>
                      `inline-block capitalize mb-1 ${
                        isActive ? "md:text-primary text-black" : ""
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`block w-full h-[2px] rounded absolute -bottom-0 transition-all ease-in-out duration-500 ${
                            isActive ? "translate-x-0" : "-translate-x-full"
                          } group-hover:translate-x-0 md:bg-primary bg-black`}
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
