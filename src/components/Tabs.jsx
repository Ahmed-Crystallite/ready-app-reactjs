// Hooks
import { useState } from "react"
// Image
import Tag from "media/dashboard/tags/locationIcon.svg"
import { Link } from "react-router-dom"

// Tabs Button
const Tab = ({ label, isActive, onClick }) => {
  const { avater, name, title, location } = label
  return (
    <button
      className={`flex items-center gap-x-3 font-medium transition-all duration-300 border-2 border-[#EFF1F4] xl:p-[20px_30px] sm:p-[20px_10px] p-[5px_5px] rounded-[10px]
        ${isActive ? "bg-blue-100" : "bg-white"}`}
      onClick={onClick}
    >
      <img
        src={avater}
        alt={`avater-${name}`}
        className="rounded-full md:m-0 mx-auto"
      />
      <div className="lg:block hidden text-start">
        <span className="block font-medium text-base text-primary leading-tight mb-1">
          {name}
        </span>
        <span className="block font-bold xl:text-xl text-lg text-black leading-tight mb-1">
          {title}
        </span>
        <div className="flex blur-sm w-max items-center gap-x-2 bg-secondary/15 h-[32px] px-[11px] rounded-[10px]">
          <img src={Tag} alt="icon" className="grayscale opacity-50" />
          <span className="block font-medium text-sm text-secondary leading-tight">
            {location}
          </span>
        </div>
      </div>
    </button>
  )
}

// Tabs Content
const TabContent = ({ content, isActive }) => {
  const { avatar, name, title, location, about } = content
  return (
    <div
      className={`transition-all duration-300 absolute sm:overflow-y-hidden overflow-y-scroll w-full bg-[#F5F6FB] h-full p-[20px_30px] rounded-[10px]
        ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
      style={{ transition: "opacity 0.3s ease-in-out" }}
    >
      <div className="md:flex hidden gap-x-4 items-center">
        <img src={avatar} alt="avatar" className="rounded-full" />
        <div className="text-start">
          <div className="flex items-center gap-x-3 mb-2">
            <span className="block font-medium text-xl text-primary leading-tight">
              {name}
            </span>
            <Link
              to="/"
              className="text-sm leading-tight font-semibold text-primary border border-primary px-4 py-1 rounded-full"
            >
              Connect
            </Link>
            <Link
              to="/"
              className="text-sm leading-tight font-semibold text-secondary border border-secondary px-4 py-1 rounded-full"
            >
              Message
            </Link>
          </div>
          <span className="block mb-3 font-bold text-3xl text-black leading-tight">
            {title}
          </span>
          <div className="flex blur-sm items-center gap-x-2 bg-secondary/15 h-[32px] w-max px-[11px] rounded-[10px]">
            <img src={Tag} alt="icon" className="grayscale opacity-50" />
            <span className="block font-medium text-sm text-secondary leading-tight">
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="my-10 blur-sm">
        <h3 className="font-bold sm:text-2xl text-xl text-black leading-tight mb-3">
          About Candidate
        </h3>
        <p className="font-normal sm:text-base text-sm text-[#9399A6] leading-normal">
          {about}
        </p>
      </div>

      <ul className="blur-sm">
        {[
          [
            "Education",
            "Bachlors in Fine Arts",
            "05/2012 - 06/2014",
            "Modern College",
          ],
          [
            "Work & Experience",
            "CDL A Delivery Driver",
            "05/04/2005 - 05/04/2008",
            "XPO Logistic Company",
          ],
          [
            "Documents",
            "CDL A Delivery Driver",
            "05/04/2005 - 05/04/2023",
            "Modern College",
          ],
        ].map(([qualification, degree, date, acadmyName], i) => (
          <li key={i} className="mb-3">
            <div className="pl-5 relative">
              <h4 className="sm:text-xl text-base leading-tight font-bold text-primary">
                {qualification}
              </h4>
              <span className="w-4 h-4 bg-primary block absolute rounded-full top-1 -left-[7px]"></span>
            </div>
            <div className="border-l-2 border-dashed border-secondary pl-5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 my-2">
                <span className="block sm:text-base textsm font-bold leading-tight text-black">
                  {degree}
                </span>
                <span className="block sm:text-base textsm font-medium leading-tight text-black">
                  {date}
                </span>
              </div>
              <span className="block sm:text-base textsm font-semibold leading-tight text-secondary">
                {acadmyName}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Main Tabs Call
const Tabs = ({ tabsData }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const tabsPerPage = 7

  const handleTabClick = (index) => {
    setActiveIndex(index)
  }

  const handlePaginationClick = (page) => {
    setCurrentPage(page)
  }

  // Get the current page's tabs
  const currentTabs = tabsData.slice(
    currentPage * tabsPerPage,
    (currentPage + 1) * tabsPerPage
  )

  // Calculate total pages
  const totalPages = Math.ceil(tabsData.length / tabsPerPage)

  return (
    <div className="w-full h-full grid gap-x-5 grid-cols-12 relative sm:pb-0 pb-[100px]">
      <div className="grid gap-y-4 lg:col-span-4 col-span-2">
        {currentTabs.map((tab, i) => (
          <Tab
            key={i}
            label={tab.label}
            isActive={i === activeIndex}
            onClick={() => handleTabClick(i)}
          />
        ))}
      </div>
      <div className="lg:col-span-8 col-span-10 relative h-full">
        {tabsData.map((tab, i) => (
          <TabContent
            key={i}
            content={tab.content}
            isActive={i === activeIndex}
          />
        ))}
      </div>
      {/* Pagination Counter */}
      <div className="col-span-12 flex w-full justify-center gap-2 mt-4">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePaginationClick(page)}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Tabs
