// React Hooks
import { useState, useRef, useEffect } from "react"
// Image
import Plus from "media/plus.svg"
import Minus from "media/minus.svg"

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const contentRef = useRef(null)

  useEffect(() => {
    if (defaultOpen) {
      setIsOpen(true)
    }
  }, [defaultOpen])

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button
        className="w-full flex justify-between text-left text-xl leading-tight border-b border-secondary/40 py-4 font-semibold transition"
        onClick={toggleAccordion}
      >
        <span className="block">{title}</span>
        {isOpen ? (
          <img src={Minus} alt="icons" />
        ) : (
          <img src={Plus} alt="icons" />
        )}
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="py-4 border-b border-secondary/40">{children}</div>
      </div>
    </div>
  )
}

export default Accordion
