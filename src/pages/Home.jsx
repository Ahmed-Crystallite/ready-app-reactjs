import Hero from "../../public/home/hero.svg"
import CTA from "../components/CTA"
import Banner1 from "../../public/home/foldTwo.png"
import Banner2 from "../../public/home/foldThree.png"
import Banner3 from "../../public/home/foldFour.png"
import Icon1 from "../../public/home/icons/1.png"
import Icon2 from "../../public/home/icons/2.png"
import Icon3 from "../../public/home/icons/3.png"
import Icon4 from "../../public/home/icons/4.png"
import Banner4 from "../../public/home/foldSix.png"
import Banner5 from "../../public/home/foldSeven.png"
import Curve from "../../public/home/curve.png"

const Home = () => {
  return (
    <>
      <section>
        <div className="relative z-10 md:py-[60px] py-[40px]">
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
      <section>
        <div className="relative py-[40px]">
          <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 items-center">
              {[
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
                "Lorem ipsum dolor sit amet consectetur. Morbi nibh ut in",
              ].map((e, i) => (
                <div key={i} className="transition-all ease-in-out duration-300 group border-t-[3px] border-secondary hover:border-primary">
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
    </>
  )
}

export default Home
