import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        width={50}
        height={50}
        alt="loader"
        src={"/icons/loading-circle.svg"}
      />
    </div>
  );
};

export default Loader;
