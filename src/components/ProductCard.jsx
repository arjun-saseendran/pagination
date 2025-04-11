import React from "react";

export const ProductCard = ({ title, image }) => {
  return (
    <div className="border border-black h-70 w-40 flex flex-col gap-2 p-5">
      <img className="object-contain" src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
