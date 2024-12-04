export default function CTA({
  css,
  text = "Post a Job"
}) {
  return (
    <div dangerouslySetInnerHTML={{__html : `<a href="javascript:;" class="block rounded-lg w-full max-w-[185px] leading-[50px] text-white font-bold text-sm text-center bg-primary border-2 border-primary transition-all ease-in-out duration-300 h-[53px] hover:text-primary hover:bg-transparent ${css}">${text}</a>`}} />    
)
}
