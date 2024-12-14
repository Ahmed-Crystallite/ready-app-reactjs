// Hooks
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
// Image
import Banner from "media/single-blog/banner.png"
import SB1 from "media/single-blog/1.png"
import SB2 from "media/single-blog/2.png"
import SB3 from "media/single-blog/3.png"
const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/data/blogPosts/${slug}.json`)

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const data = await response.json()
        setPost(data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching the post", error)
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  useEffect(() => {
    if (!post && !loading) {
      const timer = setTimeout(() => navigate("/blogs"), 3000)
      return () => clearTimeout(timer)
    }
  }, [post, loading, navigate])

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="container">
          <span className="block lg:text-6xl md:text-4xl text-3xl leading-normal font-bold text-primary mb-5 text-center capitalize">
            Loading...
          </span>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col justify-center items-center h-[calc(100vh_-_150px)]">
        <div className="container">
          <span className="block lg:text-6xl md:text-4xl text-3xl leading-normal font-bold text-primary mb-5 text-center capitalize">
            Post not found
          </span>
          <p className="text-secondary md:text-xl text-base leading-tight font-medium flex items-center justify-center gap-x-2">
            <svg
              className="animate-spin h-5 w-5 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth={4}
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Redirecting to Blogs
          </p>
        </div>
      </div>
    )
  }
  return (
    <section>
      <div className="xl:pb-[100px] lg:pb-[80px] pb-[50px]">
        <div className="container">
          <div className="relative">
            <img src={post.banner || Banner} alt="banner" draggable={false} />
            <div className="md:absolute md:-bottom-14 md:mt-0 mt-5  bg-primary px-4 py-6 xl:max-w-[1000px] lg:max-w-[900px] max-w-[700px]">
              <span className="capitalize inline-block bg-orange font-bold text-sm leading-tight px-3 py-1 rounded-full">
                {post.slug}
              </span>
              <h4 className="xl:text-[35px] lg:text-[30px] md:text-[25px] text-[16px] text-white leading-normal font-bold my-3">
                {post.title}
              </h4>
            </div>
          </div>
          <div className="md:pt-[80px] pt-[40px]">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <h3 className="capitalize xl:text-[40px] lg:text-[30px] md:text-[25px] text-[20px] leading-tight font-bold my-5">
                    {section.title}
                  </h3>
                )}
                <div
                  className="md:text-base text-base leading-normal font-medium text-secondary mb-1"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                <div className="grid md:grid-cols-3 grid-cols-1 items-center md:gap-x-5">
                  <img src={SB1} alt={section.title} className="my-5" />
                  <img src={SB2} alt={section.title} className="my-5" />
                  <img src={SB3} alt={section.title} className="my-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost
