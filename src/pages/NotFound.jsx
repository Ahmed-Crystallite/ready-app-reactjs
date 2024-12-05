import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/")
      }, 3000) // Redirect after 3 seconds
      return () => clearTimeout(timer)
    }, [navigate])
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh_-_150px)]">
      <h1 className="lg:text-6xl md:text-4xl text-3xl leading-normal font-bold text-primary mb-5">
        404 - Page Not Found
      </h1>
      <p className="text-secondary md:text-xl text-base leading-tight font-medium flex items-center gap-x-2">
        <svg
          class="animate-spin h-5 w-5 text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Redirecting to Home
      </p>
    </div>
  )
}

export default NotFound
