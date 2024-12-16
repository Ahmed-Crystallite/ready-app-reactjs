// React Hooks
import { useState } from "react"
// React Router Dom
import { Link, NavLink, Outlet } from "react-router-dom"
// Media
import Logo from "../assets/logo.svg"
import Icon1 from "media/dashboard/dashboardIcon.svg"
import Icon2 from "media/dashboard/jobsIcon.svg"
import Icon3 from "media/dashboard/messagesIcon.svg"
import Icon4 from "media/dashboard/reportsIcon.svg"
import Icon5 from "media/dashboard/searchIcon.svg"
import Icon6 from "media/dashboard/notificationIcon.svg"
import Icon7 from "media/dashboard/userIcon.svg"
import Icon8 from "media/dashboard/downIcon.svg"
// Components
import CTA from "./CTA"

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <main className="relative overflow-hidden grid grid-cols-[auto_1fr] h-full bg-white">
      <aside
        className={`${
          isSidebarCollapsed ? "w-16" : "w-64"
        } bg-white h-full shadow-[3px_4px_27px_rgba(133,_146,_158,_0.25)] transition-all duration-500`}
      >
        <div
          className={`grid ${
            isSidebarCollapsed ? "grid-cols-1 px-5" : "grid-cols-2 px-7"
          } items-center pt-[40px]`}
        >
          <img
            src={Logo}
            alt="logo"
            className={isSidebarCollapsed ? "hidden" : "block"}
          />
          <button
            onClick={toggleSidebar}
            className={`block w-full ${
              isSidebarCollapsed ? "max-w-full" : "max-w-[25%]"
            }  ms-auto h-full`}
          >
            <span className="block w-full h-1 mb-1 bg-primary/85"></span>
            <span className="block w-full h-1 mb-1 bg-primary/85"></span>
            <span className="block w-full h-1 bg-primary/85"></span>
          </button>
        </div>
        <nav className={`${isSidebarCollapsed ? "px-5" : "px-7"} py-[50px]`}>
          <ul className="space-y-4">
            {[
              ["/dashboard", Icon1, "Dashboard"],
              ["/dashboard/jobs", Icon2, "Jobs"],
              ["/dashboard/message", Icon3, "Messages"],
              ["/dashboard/reports", Icon4, "Reports"],
            ].map(([link, icon, text], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="text-base leading-tight font-semibold text-black gap-x-3 mb-14 flex items-center"
                >
                  <img src={icon} alt="icons" className="w-max" />
                  {!isSidebarCollapsed && text}
                </Link>
              </li>
            ))}
          </ul>
          {isSidebarCollapsed ? "" : <CTA />}
        </nav>
      </aside>
      <article className="grid grid-rows-[auto_1fr]">
        <header>
          <div className={`relative w-full bg-primary py-3`}>
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
            <div className="grid grid-cols-12 gap-x-10 items-center py-6">
              <form method="get" className="w-full col-span-4">
                <div className="w-full rounded-full bg-secondary/15 text-[15px] font-normal px-[20px] border-2 border-[#dee2e6] flex items-center h-[53px]">
                  <label htmlFor="search">
                    <img src={Icon5} alt="icon" />
                  </label>
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search for candidates and more..."
                    className="block w-full h-full px-[10px] focus-visible:outline-none text-black bg-transparent placeholder:text-secondary/50"
                  />
                </div>
              </form>
              <div className="col-span-8 flex justify-around items-center">
                <ul className="flex gap-x-4 justify-end">
                  {[
                    ["/", "Home"],
                    ["/dashboard", "Dashboard"],
                    ["/subscription", "Subscription"],
                    ["/dashboard/find-candidates", "Find Candidates"],
                    ["/dashboard/message", "Message"],
                    ["/dashboard/connection", "Connection"],
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
                <div className="flex gap-x-5">
                  <div className="relative">
                    <div className="relative">
                      <button
                        type="button"
                        className="block"
                        onClick={() => handleDropdownToggle(1)}
                      >
                        <img
                          src={Icon6}
                          alt="icons"
                          className="block mx-auto w-max"
                        />
                        <span className="absolute block w-2 h-2 bg-[#FF4141] rounded-full inset-[8px_0_0_10px]"></span>
                      </button>
                    </div>
                    <div
                      className={`absolute mt-2 -right-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                        openDropdown === 1
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0"
                      }`}
                      style={{ transformOrigin: "top" }}
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(2)}
                      type="button"
                      className="flex items-center gap-x-3"
                    >
                      <img
                        src={Icon7}
                        alt="icons"
                        className="block mx-auto w-max"
                      />
                      <img
                        src={Icon8}
                        alt="icons"
                        className="block mx-auto w-max"
                      />
                    </button>
                    <div
                      className={`absolute mt-2 -right-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                        openDropdown === 2
                          ? "scale-y-100 opacity-100"
                          : "scale-y-0 opacity-0"
                      }`}
                      style={{ transformOrigin: "top" }}
                    >
                      <ul className="py-2">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 1
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Option 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Content */}
        <div className="overflow-y-auto">
          <Outlet />
        </div>
      </article>
    </main>
  )
}

export default DashboardLayout
