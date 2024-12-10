// Image
import Search from "media/dashboard/searchIcon.svg"
import Candidate1Min from "media/dashboard/dashboard/candidate1.png"
import Candidate2Min from "media/dashboard/dashboard/candidate2.png"
import Candidate3Min from "media/dashboard/dashboard/candidate3.png"
import Candidate4Min from "media/dashboard/dashboard/candidate4.png"
import Candidate5Min from "media/dashboard/dashboard/candidate5.png"
import Candidate6Min from "media/dashboard/dashboard/candidate6.png"
import Candidate7Min from "media/dashboard/dashboard/candidate7.png"
import Candidate1Max from "media/dashboard/dashboard/candidate-detail1.svg"
// Components
import { Tabs } from "../components"

const FindCandidates = () => {
  const tabsData = [
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate1Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate2Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate3Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate4Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate5Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate6Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
    {
      label: {
        avater: Candidate7Min,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
      },
      content: {
        avatar: Candidate1Max,
        name: "Chris John",
        title: "CDL A Delivery Driver",
        location: "Virginia, United States",
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  ]
  return (
    <section>
      <div className="xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
              <h1 className="lg:text-[40px] md:text-[30px] text-[20px] leading-tight text-black font-bold mb-3">
                Find Candidates
              </h1>
              <span className="block md:text-base text-sm leading-normal text-secondary font-medium">
                Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed
                fames eu duis diam mi et.
              </span>
              <form method="get" className="mt-10">
                <div className="grid grid-cols-12 gap-5 max-w-[800px] mx-auto">
                  <div className="sm:col-span-9 col-span-12 w-full rounded-[5px] bg-transparent text-[15px] font-normal px-[20px] border-2 border-[#dee2e6] flex items-center h-[53px]">
                    <label htmlFor="search">
                      <img src={Search} alt="icon" />
                    </label>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      placeholder="Search"
                      className="block w-full h-full px-[10px] focus-visible:outline-none text-black placeholder:text-secondary"
                    />
                  </div>
                  <button
                    type="button"
                    className="sm:col-span-3 col-span-12 block rounded-lg w-full sm:max-w-[158px] leading-[50px] text-white font-bold text-sm text-center bg-primary border-2 border-primary transition-all ease-in-out duration-300 h-[53px] hover:text-primary hover:bg-transparent"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="md:pt-[80px] pt-[50px]">
              <Tabs tabsData={tabsData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindCandidates
