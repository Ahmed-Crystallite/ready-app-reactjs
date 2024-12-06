const TermsAndConditions = () => {
  return (
    <section>
      <div className="xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
          <div className="max-w-[1290px] mx-auto">
            <h1 className="md:text-[26px] text-[20px] leading-tight text-[#202020] font-bold mb-3">
              Terms & Conditions
            </h1>
            <span className="block md:text-base text-sm leading-normal text-primary font-medium">
              Posuere habitant scelerisque hendrerit vitae adipiscing. Posuere
              ac tellus odio varius in purus faucibus nunc odio.
            </span>
            {[
              [
                "General",
                "Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed fames eu duis diam mi et. Mauris aliquam tempor sit dapibus. Nec vestibulum hac facilisi convallis scelerisque dictumst. Et orci ut tortor ac nisi semper eleifend. Feugiat sagittis sit nibh velit. Massa velit rhoncus pretium phasellus leo sit nunc pellentesque. Elit mauris sit faucibus cras eros elit gravida. At morbi eget massa quisque et nec in. Nam mus est ac arcu ultricies ultrices amet aenean varius. Lectus sed odio laoreet gravida et elit amet.",
              ],
              [
                "Correction of Errors and Inaccuracies",
                "Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed fames eu duis diam mi et. Mauris aliquam tempor sit dapibus. Nec vestibulum hac facilisi convallis scelerisque dictumst. Et orci ut tortor ac nisi semper eleifend. Feugiat sagittis sit nibh velit. Massa velit rhoncus pretium phasellus leo sit nunc pellentesque. Elit mauris sit faucibus cras eros elit gravida. At morbi eget massa quisque et nec in. Nam mus est ac arcu ultricies ultrices amet aenean varius. Lectus sed odio laoreet gravida et elit amet.",
              ],
              [
                "Sit nibh velit turpis ut id interdum ",
                "Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed fames eu duis diam mi et. Mauris aliquam tempor sit dapibus. Nec vestibulum hac facilisi convallis scelerisque dictumst. Et orci ut tortor ac nisi semper eleifend. Feugiat sagittis sit nibh velit. Massa velit rhoncus pretium phasellus leo sit nunc pellentesque. Elit mauris sit faucibus cras eros elit gravida. At morbi eget massa quisque et nec in. Nam mus est ac arcu ultricies ultrices amet aenean varius. Lectus sed odio laoreet gravida et elit amet.",
              ],
              [
                "Velit turpis ut id interdum ",
                "Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed fames eu duis diam mi et. Mauris aliquam tempor sit dapibus. Nec vestibulum hac facilisi convallis scelerisque dictumst. Et orci ut tortor ac nisi semper eleifend. Feugiat sagittis sit nibh velit. Massa velit rhoncus pretium phasellus leo sit nunc pellentesque. Elit mauris sit faucibus cras eros elit gravida. At morbi eget massa quisque et nec in. Nam mus est ac arcu ultricies ultrices amet aenean varius. Lectus sed odio laoreet gravida et elit amet.",
              ],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h2 className="md:text-lg text-base leading-tight mt-5 mb-3 font-semibold">
                  {title}
                </h2>
                <p className="text-secondary md:text-base text-sm sm:text-start text-justify leading-normal font-medium">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsAndConditions
