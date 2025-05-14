import React from "react";
import Image from "next/image";

const Carts = ({ img, Icon, title, para,width,height }) => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: `${width}px`,
        minHeight: `${height}px`
      }}>
      {Icon ? (
        <span className="w-[100px] h-[100px] p-5 rounded-full bg-[#F2F2F2] mx-auto">
          <Icon className="text-6xl" />
        </span>
      ) : img && (
        <div className="relative w-full" >
          <Image
            src={img}
            alt={title || "Product"}
            fill
            sizes="(max-width: 460px) 100vw, 460px"
            className="object-contain"
          />
        </div>
      )}
      <h3 className="text-2xl text-black text-center font-bold my-4">{title}</h3>
      <p className="text-lg text-center Montserrat">{para}</p>
    </div>
  );
};

export default Carts;
