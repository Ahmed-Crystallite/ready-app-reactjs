// Images
import Icon from "media/subscription/info.svg"; 
// Components
import { Link } from "react-router-dom";

const PackageCard = ({ packageData,css }) => {
  return (
    <div className={`border border-[#DBDBDB] h-full rounded-xl bg-white shadow-[8px_11px_19px_rgba(121,_138,_164,_0.15)] ${css}`}>
      <div className="pt-[50px] pb-[20px] border-b border-[#DBDBDB]">
        <div className="max-w-[250px] mx-auto text-center">
          <span className="block text-[#636363] text-lg leading-tight font-extrabold">
            {packageData.name}
          </span>
          <h3 className="text-[38px] leading-tight font-bold text-black my-5">
            ${packageData.price} /mo.
          </h3>
          <p className="text-[#333333] text-base leading-normal font-medium">
            {packageData.desc}
          </p>
        </div>
      </div>
      <div className="xl:max-w-[300px] max-w-[280px] mx-auto py-[30px]">
        <ul className="mb-12">
          {packageData.list.map((item, i) => (
            <li key={i} className="flex items-center justify-between mb-3">
              <span>{item}</span>
              <div className="relative group">
                <img src={Icon} alt="icons" />
                <div className="absolute hidden group-hover:block transition-all w-max ease-in-out duration-700 bg-gray-700 text-white text-sm rounded p-2 translate-x-7 -translate-y-full top-7">
                  {item}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link to={packageData.link} className="block rounded-lg w-full leading-[45px] font-bold text-sm text-center border-[rgba(80,_80,_80,_0.2)] bg-[#F4F4F4] text-[#858585] border-2 transition-all ease-in-out duration-300 h-[49px] hover:border-primary hover:bg-primary hover:text-white">BUY NOW</Link>
      </div>
    </div>
  );
};

export default PackageCard;
