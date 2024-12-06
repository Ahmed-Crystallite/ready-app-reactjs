// Hooks

import { Link } from "react-router-dom"

// Components

import CTA from "@/components/CTA"
import { ProgessBar } from "@/components"
// Images
import Hero from "media/home/hero.svg"
import Banner1 from "media/home/foldTwo.png"
import Banner2 from "media/home/foldThree.png"
import Banner3 from "media/home/foldFour.png"
import Icon1 from "media/home/icons/1.png"
import Icon2 from "media/home/icons/2.png"
import Icon3 from "media/home/icons/3.png"
import Icon4 from "media/home/icons/4.png"
import Banner4 from "media/home/foldSix.png"
import Banner5 from "media/home/foldSeven.png"
import Curve from "media/home/curve.png"
import Avater from "media/home/icons/avater.svg"
import SemiCol from "media/home/icons/semiCol.svg"
import Stars from "media/home/icons/stars.svg"
import Blog4 from "media/blogs/wearHouse.svg"
import Blog5 from "media/blogs/truck5.svg"
import Blog6 from "media/blogs/truck6.svg"

const Home = () => {
  const data = [
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
  ]
  return (
    <main>
      {/* Section Fold 1 Start */}
      <section>
        <div className="relative z-10 lg:py-[100px] md:py-[60px] py-[40px]">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-10 items-center">
              <div className="text-black max-w-[600px]">
                <h1 className="xl:text-[55px] lg:text-[45px] md:text-[40px] text-[30px] leading-tight font-bold mb-3">
                  Hire the right Driver for your business
                </h1>
                <p className="md:text-[16px] text-[14px] xl:max-w-[500px] md:max-w-[450px] leading-normal font-medium text-secondary md:mb-10 mb-8">
                  Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis
                  et hendrerit est. At sem eu dolor sed id adipiscing viverra.
                </p>
                <CTA />
              </div>
              <img src={Hero} alt="hero" className="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 1 End */}

      {/* Section Fold 2 Start */}
      <section>
        <div className="relative z-10 overflow-hidden xl:py-0 lg:py-[100px] md:py-[80px] py-[60px]">
          <img
            src={Banner1}
            alt="banner"
            className="xl:hidden block absolute w-full h-full -z-10 inset-0 top-0 bottom-0 right-0 left-0 object-cover object-center"
          />
          <div className="container">
            <div className="xl:py-[100px] relative z-10 overflow-hidden">
              <img
                src={Banner1}
                alt="banner"
                className="xl:block hidden absolute w-full h-full -z-10 inset-0 top-0 bottom-0 right-0 left-0 object-cover object-center"
              />
              <div className="text-white text-center">
                <div className="border-2 border-white xl:max-w-[1100px] max-w-[900px] mx-auto lg:px-10 sm:px-5 px-2 py-5">
                  <h2 className="uppercase md:text-[35px] sm:text-[20px] text-[18px] tracking-widest max-w-[900px] mx-auto leading-normal font-medium">
                    <span className="font-bold">570,885</span> candidates are
                    looking for Driving jobs on{" "}
                    <span className="font-bold">ReadyApp*</span>
                  </h2>
                </div>
                <div className="lg:pt-20 md:pt-14 pt-10">
                  <CTA css="!text-primary !bg-white mx-auto mb-8 !border-white hover:!text-white hover:!bg-transparent" />
                  <p className="sm:text-base text-sm leading-normal font-medium max-w-[500px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in
                    quis et hendrerit est. At sem eu dolor sed id adipiscing
                    viverra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 2 End */}

      {/* Section Fold 3 Start */}
      <section>
        <div className="md:py-[80px] sm:py-[60px] py-[40px]">
          <div className="container">
            <div className="text-center">
              <span className="block text-primary md:text-[22px] sm:text-[18px] text-[16px] font-semibold leading-tight">
                Welcome to ReadyApp
              </span>
              <h2 className="lg:text-[36px] md:text-[30px] sm:text-[20px] text-[18px] font-bold leading-tight sm:my-4 my-3">
                Manage Your Hiring From Start To Finish
              </h2>
              <p className="sm:text-[16px] text-[14px] font-medium text-secondary leading-normal max-w-[580px] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis
                ethendrerit est. At sem eu dolor sed id adipiscing viverra.
              </p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-x-5 sm:gap-y-10 gap-y-5 sm:pt-[60px] pt-[40px]">
              {[Icon4, Icon1, Icon2, Icon3].map((e, i) => (
                <div
                  key={i}
                  className="shadow-[8px_11px_19px_rgba(121,_138,_164,_0.15)] border border-[rgba(121,_138,_164,_0.2)] rounded-[20px] text-center sm:h-[300px] h-[200px] flex flex-col items-center justify-center"
                >
                  <div className="bg-primary w-[100px] h-[100px] mx-auto flex items-center justify-center rounded-full">
                    <img src={e} alt="icons" />
                  </div>
                  <h4 className="lg:text-[20px] text-[16px] font-semibold leading-tight mt-5">
                    Adipiscing Elit
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 3 End */}

      {/* Section Fold 4 Start */}
      <section>
        <div className="relative z-10 overflow-hidden xl:py-0 lg:py-[100px] md:py-[80px] py-[60px]">
          <img
            src={Banner2}
            alt="banner"
            className="xl:hidden block absolute w-full h-full -z-10 inset-0 top-0 bottom-0 right-0 left-0 object-cover object-center"
          />
          <div className="container">
            <div className="xl:py-[100px] relative z-10 overflow-hidden">
              <img
                src={Banner2}
                alt="banner"
                className="xl:block hidden absolute w-full h-full -z-10 inset-0 top-0 bottom-0 right-0 left-0 object-cover object-center"
              />
              <div className="text-white text-center">
                <div className="border-[3px] border-white xl:max-w-[950px] max-w-[900px] mx-auto lg:px-10 sm:px-5 px-2 sm:py-10 py-5">
                  <h2 className="lg:text-[35px] md:text-[30px] sm:text-[20px] text-[18px] tracking-widest max-w-[900px] mx-auto leading-normal font-medium">
                    Manage Your Hiring From Start To Finish
                  </h2>
                </div>
                <div className="max-w-[900px] mx-auto mt-10">
                  <img
                    src={Banner3}
                    alt="banner"
                    className="w-full h-full mx-auto object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 4 End */}

      {/* Section Fold 5 Start */}
      <section>
        <div className="relative py-[40px]">
          <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 items-center">
              {[
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
              ].map((e, i) => (
                <div
                  key={i}
                  className="transition-all ease-in-out duration-300 group border-t-[3px] border-secondary hover:border-primary"
                >
                  <div className="sm:mt-10 mt-5 md:max-w-[430px] text-secondary">
                    <h3 className="transition-all ease-in-out duration-300 md:text-[22px] text-[18px] font-bold leading-tight mb-3 group-hover:text-black">
                      {e}
                    </h3>
                    <p className="sm:text-base text-sm leading-normal font-medium">
                      Lorem ipsum dolor sit amet consectetur. Commodo in turpis
                      adipiscing ornare a sapien nullam. Leo nam odio feugiat
                      sed tellus lacinia fermentum. Enim leo aliquet bibendum
                      tellus facilisis nulla ultrices faucibus nibh.{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 5 End */}

      {/* Section Fold 6 Start */}
      <section>
        <div className="relative lg:py-[100px] md:py-[80px] py-[60px] bg-secondary/10">
          <div className="container">
            <div className="grid grid-cols-12 items-center gap-x-5 gap-y-10">
              <div className="xl:col-span-5 md:col-span-6 col-span-12">
                <h2 className="2xl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] font-bold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="sm:text-[16px] text-[14px] font-medium leading-normal text-secondary">
                  Lorem ipsum dolor sit amet consectetur. Sed a nulla eget arcu
                  urna nec magnis. Neque suscipit tincidunt purus nullam
                  interdum sed adipiscing vitae. Lobortis eu lacinia adipiscing
                  orci ut. Mauris pretium tellus quis et elit aliquam nulla.
                </p>
                <CTA text="Get Started" css="sm:mt-10 mt-5" />
              </div>
              <div className="xl:col-span-7 md:col-span-6 col-span-12">
                <img src={Banner4} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 6 End */}

      {/* Section Fold 7 Start */}
      <section>
        <div className="relative overflow-hidden xl:pt-[100px] xl:pb-[40px] md:py-[80px] py-[60px]">
          <img
            src={Curve}
            alt="banner"
            className="xl:block hidden absolute w-[1124px] h-[919px] -z-10 bottom-[-290px] 2xl:left-[-80px] left-[-140px] object-cover object-left-bottom"
          />
          <div className="container">
            <div className="grid grid-cols-12 items-center gap-x-5 gap-y-10">
              <div className="xl:col-span-7 md:col-span-6 col-span-12">
                <img src={Banner5} alt="banner" />
              </div>
              <div className="xl:col-span-5 md:col-span-6 col-span-12">
                <h2 className="2xl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] font-bold leading-tight mb-3">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="sm:text-[16px] text-[14px] font-medium leading-normal text-secondary">
                  Lorem ipsum dolor sit amet consectetur. Sed a nulla eget arcu
                  urna nec magnis. Neque suscipit tincidunt purus nullam
                  interdum sed adipiscing vitae. Lobortis eu lacinia adipiscing
                  orci ut. Mauris pretium tellus quis et elit aliquam nulla.
                </p>
                <CTA css="sm:mt-10 mt-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 7 End */}

      {/* Section Fold 8 Start */}
      <section>
        <div className="xl:pt-[100px] md:py-[80px] sm:py-[60px] py-[40px]">
          <div className="container">
            <div className="text-center">
              <span className="block text-primary md:text-[22px] sm:text-[18px] text-[16px] font-semibold leading-tight">
                Testimonials
              </span>
              <h2 className="lg:text-[40px] md:text-[30px] text-[22px] font-bold leading-tight sm:mt-4 mt-3">
                Our Customers Love What We Do
              </h2>
            </div>
            <ProgessBar
              emblaWrapper="flex pt-[50px] lg:pt-[100px]"
              arrowsCss="relative xl:top-[-220px] z-10 items-center"
              options={{ loop: false }}
            >
              {[
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
                "Ruben Franci",
              ].map((e, i) => (
                <div
                  key={i}
                  className="relative z-10 grow-0 shrink-0 basis-full text-center"
                >
                  <span className="block bg-primary/10 absolute inset-[80px_0_0_0] -z-10 xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[70%] mx-auto h-full"></span>
                  <img src={Avater} alt="avater" className="mx-auto" />
                  <img src={SemiCol} alt="icon" className="mx-auto my-4" />
                  <p className="text-secondary lg:text-[16px] text-[14px] leading-normal font-medium max-w-[1000px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Sed a nulla eget
                    arcu urna nec magnis. Neque suscipit tincidunt purus nullam
                    interdum sed adipiscing vitae. Lobortis eu lacinia
                    adipiscing orci ut. Mauris pretium tellus quis et elit
                    aliquam nulla.
                  </p>
                  <div className="text-center  my-10">
                    <h4 className="text-black text-[22px] leading-tight font-semibold mb-2">
                      {e}
                    </h4>
                    <img src={Stars} alt="icon" className="mx-auto" />
                  </div>
                </div>
              ))}
            </ProgessBar>
          </div>
        </div>
      </section>
      {/* Section Fold 8 End */}

      {/* Section Fold 9 Start */}
      <section>
        <div className="py-[60px] md:bg-transparent bg-primary">
          <div className="container">
            <div className="md:bg-primary">
              <div className="flex flex-wrap items-center justify-between 2xl:max-w-[1150px] xl:max-w-[1000px] lg:max-w-[800px] md:max-w-[600px] mx-auto text-white sm:h-[170px] gap-y-5">
                <h2 className="2xl:text-[50px] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[28px] font-bold leading-tight">
                  Ready For Your Next Hire?
                </h2>
                <CTA css="!text-primary !bg-white mx-auto !border-white hover:!text-white hover:!bg-transparent px-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Fold 9 End */}

      {/* Section Fold 10 Start */}
      <section>
        <div className="md:py-[80px] py-[60px]">
          <div className="container">
            <div className="text-center md:mb-[80px] mb-[40px]">
              <h2 className="lg:text-[40px] md:text-[30px] text-[22px] font-bold leading-tight sm:mt-4 mb-3">
                Hiring Resources For Every Step Of The Process
              </h2>
              <p className="sm:text-[16px] text-[14px] font-medium leading-normal text-secondary max-w-[580px] mx-auto">
                Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in quis
                ethendrerit est. At sem eu dolor sed id adipiscing viverra.
              </p>
            </div>
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
      </section>
      {/* Section Fold 10 End */}
    </main>
  )
}

export default Home
