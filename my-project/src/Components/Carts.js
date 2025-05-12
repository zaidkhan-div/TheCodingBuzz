import React from "react";
import Image from "next/image";

const Carts = ({ img, Icon, title, para }) => {
  return (
    <div className="flex flex-col items-bet w-[280px] h-[244px] ">
      {Icon &&
        <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] mx-auto">
          <Icon className="text-6xl" />
        </span>
      }
      {img && <Image src={img} alt="Image" />}
      {title && <h3 className='text-2xl text-black text-center font-bold my-4'>{title}</h3>}
      {para && <p className='text-lg text-center Montserrat'>{para}</p>}
    </div>
  );
};

export default Carts;
