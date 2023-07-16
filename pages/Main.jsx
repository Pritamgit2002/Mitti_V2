import Image from "next/image";
import React from "react";
import { FcRight } from "react-icons/fc";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      <div className="bg-[#C1DCDC] rounded-2xl font-normal lg:flex m-16">
        <div className="px-8 flex items-center h-[500px] text-[15px] font-semibold lg:w-[50%] ">
          <spam className="font-extrabold text-[50px]">
            Buy Your Dream Pottery Items
          </spam>
          <div className="flex-col">
            <span> 500+ Pottery Products</span>
            <span> 1000+ Customers</span>
          </div>
        </div>
        <div className="items-center justify-between p-0 h-[290px] sm:h-[500px] lg:w-[50%] relative">
          <Image
            src="/blackcircle.png"
            alt="banner"
            height={300}
            width={300}
            className="absolute bottom-0.5 right-1"
          />
          <Image
            src="/banner.png"
            alt="banner"
            height={350}
            width={350}
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>

      {/* <div className=" lg:flex md:flex-2 gap-14 justify-center">
          <div className=" bg-cyan-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-green-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-red-300 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-blue-400 h-80 w-72 ml-10 rounded-3xl my-8"></div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:ml-28 ">
        <div className=" bg-slate-000 h-80 w-72 ml-10 rounded-3xl my-8 text-start justify-center p-4">
          <div className="font-bold text-[30px] pb-2 text-[#1e1e1ed6]">
            Best Selling Products
          </div>

          <div className="text-[#1e1e1e80] font-semibold pb-6">
            Easiest way to healthy life by buying your favorite plants
          </div>

          <button className="bg-blue-200 rounded-lg p-4 flex font-semibold items-center justify-between gap-3 cursor-pointer">
            <Link href="/"></Link>
            <div>See More</div>

            <div>
              <FcRight />
            </div>
          </button>
        </div>

        <div className=" bg-green-200 h-80 w-72 ml-10 rounded-3xl my-8 flex justify-center">
          gbdtg
        </div>
        <div className=" bg-red-300 h-80 w-72 ml-10 rounded-3xl my-8"></div>
        <div className=" bg-pink-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
        <div className=" bg-yellow-200 h-80 w-72 ml-10 rounded-3xl my-8 hidden lg:block"></div>
        <div className="hidden lg:block bg-violet-400 h-80 w-72 ml-10 rounded-3xl my-8"></div>
      </div>
    </div>
  );
};

export default Main;
