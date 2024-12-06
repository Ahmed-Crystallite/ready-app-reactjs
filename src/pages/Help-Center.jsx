import { Accordions } from "@/components"
const HelpCenter = () => {
  return (
    <section>
      <div className="xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px]">
        <div className="container">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center">
              <h1 className="lg:text-[40px] md:text-[30px] text-[20px] leading-tight text-black font-bold mb-3">
                Help Center
              </h1>
              <span className="block md:text-base text-sm leading-normal text-secondary font-medium">
                Lorem ipsum dolor sit amet consectetur. Congue odio mattis sed
                fames eu duis diam mi et.
              </span>
            </div>
            <div className="mt-[80px]">
              {[
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
                [
                  "Lorem ipsum dolor sit amet consectetur. Sit nulla egestas turpis at. Ultrices pellentesque quam tempor imperdiet elit. At commodo ut volutpat pulvinar at morbi. At tortor tortor etiam quisque aliquam nisl nascetur mi justo. Mauris enim scelerisque eu at nisl. Penatibus egestas lectus pellentesque posuere cras fringilla. Cras vulputate quam convallis posuere aliquet nunc dui. Diam tortor augue eget nunc in nisi tincidunt. Gravida aliquet feugiat dignissim justo vel massa nunc. Facilisis quam amet lectus risus viverra sed interdum magna.",
                ],
              ].map(([desc], i) => (
                <div key={i}>
                  <Accordions
                    title="Lorem ipsum dolor sit amet consectetur. Condimentum elementum vulputate?"
                    defaultOpen={i === 0}
                  >
                    <p>{desc}</p>
                  </Accordions>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpCenter
