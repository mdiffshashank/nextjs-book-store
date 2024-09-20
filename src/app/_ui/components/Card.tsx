import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Card = ({ children, title }: Props) => {
  return (
    <div className="p-4  w-80 h-72 rounded mb-4 mx-4 bg-white ">
      <div className=" text-2xl font-bold mb-4 flex justify-center">
        {title}
      </div>
      <hr className="divide-stone-800" />
      {children}
    </div>
  );
};

export default Card;
