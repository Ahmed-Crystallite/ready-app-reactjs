import { Link, NavLink } from "react-router-dom"
import Logo from "media/footer/logo.svg"
import Icon1 from "media/footer/facebook.svg"
import Icon2 from "media/footer/instagram.svg"
import Icon3 from "media/footer/twitter.svg"

const Footer = () => {
  return (
    <footer>
      <div className="relative pt-[50px] pb-[80px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="">
              <Link to="/" className="block mb-5">
                <img src={Logo} alt="logo" />
              </Link>
              <p className="sm:text-base text-sm leading-normal font-normal text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <h4 className="text-2xl leading-tight font-bold text-primary mb-5">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-10">
                <ul>
                  {[
                    ["/", "Home"],
                    ["/dashboard", "Dashboard"],
                    ["/post-job", "Post a Job"],
                    ["/subscription", "Subscription"],
                    ["/find-candidates", "Find Candidates"],
                    ["/blogs", "Blogs"],
                  ].map(([link, text], i) => (
                    <li
                      key={i}
                      className="relative group w-max mb-3 overflow-hidden text-base text-black font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <NavLink
                        to={link}
                        className={({ isActive }) =>
                          `inline-block capitalize mb-1 ${
                            isActive ? "text-primary" : ""
                          }`
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
                <ul>
                  {[
                    ["/dashboard/messages", "In-App -Chat"],
                    ["/dashboard/connections", "Connection"],
                    ["/dashboard/profile", "My Account"],
                  ].map(([link, text], i) => (
                    <li
                      key={i}
                      className="relative group w-max mb-3 overflow-hidden text-base text-black font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <NavLink
                        to={link}
                        className={({ isActive }) =>
                          `inline-block capitalize mb-1 ${
                            isActive ? "text-primary" : ""
                          }`
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
              </div>
            </div>
            <div>
              <h4 className="text-2xl leading-tight font-bold text-primary mb-5">
                Contact Us
              </h4>
              <div className="grid grid-cols-2 gap-x-10">
                <ul>
                  <li className="relative group w-max mb-3 overflow-hidden text-base text-black font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-primary">
                    <a href="tel:+0-000-000-0000" className="flex gap-x-2 mb-1">
                      <span className="block w-full h-[2px] rounded absolute -bottom-0 transition-all ease-in-out duration-500 -translate-x-full group-hover:translate-x-0 bg-primary"></span>
                      <span className="block">Phone:</span>
                      <span className="block">+1-202-555-0188</span>
                    </a>
                  </li>
                  <li className="relative group w-max mb-3 overflow-hidden text-base text-black font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-primary">
                    <a
                      href="mailto:readyapp@gmail.com"
                      className="flex gap-x-2 mb-1"
                    >
                      <span className="block w-full h-[2px] rounded absolute -bottom-0 transition-all ease-in-out duration-500 -translate-x-full group-hover:translate-x-0 bg-primary"></span>
                      <span className="block">Email:</span>
                      <span className="block">readyapp@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h4 className="text-2xl leading-tight font-bold text-primary my-5">
                Follow Us
              </h4>
              <ul className="flex items-center gap-3">
                <li className="group">
                  <a href="#">
                    <img
                      src={Icon1}
                      alt="icon"
                      className="grayscale transition-all ease-in-out duration-500 group-hover:grayscale-0"
                    />
                  </a>
                </li>
                <li className="group">
                  <a href="#">
                    <img
                      src={Icon2}
                      alt="icon"
                      className="grayscale transition-all ease-in-out duration-500 group-hover:grayscale-0"
                    />
                  </a>
                </li>
                <li className="group">
                  <a href="#">
                    <img
                      src={Icon3}
                      alt="icon"
                      className="grayscale transition-all ease-in-out duration-500 group-hover:grayscale-0"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-4 bg-primary">
        <div className="container">
          <div className="flex flex-wrap items-center md:justify-between justify-center gap-y-5">
            <ul className="flex gap-x-3 divide-x-2 divide-white items-center">
              {[
                ["/terms-and-conditions", "Terms & Conditions"],
                ["/privacy-policy", "Privacy Policy"],
              ].map(([link, text], i) => (
                <li
                  key={i}
                  className="relative last:ps-3 group w-max overflow-hidden text-base text-white font-semibold leading-tight transition-all duration-500 ease-in-out hover:text-black/70"
                >
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `inline-block capitalize ${
                        isActive ? "text-black/hover:text-black/70" : ""
                      }`
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className="block text-white text-base font-semibold leading-tight">© All Rights Reserved 2023 - Ready App</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
