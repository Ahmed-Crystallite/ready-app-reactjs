import { Link } from "react-router-dom"
import Blog1 from "media/blogs/truck1.svg"
import Blog2 from "media/blogs/truck2.svg"
import Blog3 from "media/blogs/truck3.svg"
import Blog4 from "media/blogs/wearHouse.svg"
import Blog5 from "media/blogs/truck5.svg"
import Blog6 from "media/blogs/truck6.svg"
import Blog7 from "media/blogs/truck7.svg"
import Blog8 from "media/blogs/truck8.svg"
import Blog9 from "media/blogs/truck9.svg"
import Blog10 from "media/blogs/truck10.svg"
import Blog11 from "media/blogs/truck11.svg"
import Blog12 from "media/blogs/truck12.svg"
const BlogList = () => {
  const data = [
    {
      img: Blog1,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "first-blog-post",
    },
    {
      img: Blog2,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "second-blog-post",
    },
    {
      img: Blog3,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "third-blog-post",
    },
    {
      img: Blog4,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "four-blog-post",
    },
    {
      img: Blog5,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "five-blog-post",
    },
    {
      img: Blog6,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "six-blog-post",
    },
    {
      img: Blog7,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "seven-blog-post",
    },
    {
      img: Blog8,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "eight-blog-post",
    },
    {
      img: Blog9,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "nine-blog-post",
    },
    {
      img: Blog10,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "ten-blog-post",
    },
    {
      img: Blog11,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "eleven-blog-post",
    },
    {
      img: Blog12,
      name: "Jaydon George",
      title: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis et hendrerit est. At sem eu dolor sed id adipiscing viverra.",
      link: "Read More",
      slug: "twelve-blog-post",
    },
  ]

  return (
    <section>
      <div className="pt-[200px] pb-[60px]">
        <div className="container">
          <div className="text-center">
            <h1 className="xl:text-[40px] lg:text-[30px] text-[25px] leading-tight font-bold mb-3 text-black">
              Our Blogs
            </h1>
            <p className="md:text-base text-sm leading-normal font-normal text-secondary">
              Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed
              fames eu duis diam mi et.
            </p>
          </div>
          <div className="pt-[60px]">
            <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-5">
              {data &&
                data?.map((post, index) => (
                  <li
                    key={index}
                    className="shadow-[8px_11px_19px_rgba(121,_138,_164,_0.15)] border border-[rgba(121,_138,_164,_0.2)] rounded-[20px] p-1"
                  >
                    <img src={post.img} alt={post.title} className="w-full" />
                    <div className="2xl:px-4 px-2 my-4">
                      <span className="inline-block bg-orange font-bold text-sm leading-tight px-3 py-1 rounded-full">
                        {post.name}
                      </span>
                      <h4 className="lg:text-[20px] text-[17px] leading-normal font-bold my-3">
                        {post.title}
                      </h4>
                      <p className="text-[15px] leading-normal font-medium text-secondary">
                        {post.desc}
                      </p>
                      <div className="flex items-center justify-between mt-5">
                        <Link
                          to={`/blogs/${post.slug}`}
                          className="block text-[15px] leading-normal font-bold text-primary"
                        >
                          {post.link}
                        </Link>
                        <span className="block text-[15px] leading-normal font-medium text-secondary">
                          May 12, 2023
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogList
