// Hooks
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
// Image
import Banner from "../../public/single-blog/banner.png"
import SB1 from "../../public/single-blog/1.png"
import SB2 from "../../public/single-blog/2.png"
import SB3 from "../../public/single-blog/3.png"
const BlogPost = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return <div>Post not found</div>
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
