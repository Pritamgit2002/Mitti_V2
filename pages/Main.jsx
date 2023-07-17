import Image from "next/image";
import React from "react";
import { FcRight } from "react-icons/fc";
import Link from "next/link";

const Main = () => {
  return (
    <div className="mx-16 lg:mx-52 flex-col justify-center">
      <div className="bg-[#C1DCDC] rounded-2xl font-normal lg:flex ">
        <div className="px-4 flex items-center h-[500px] text-[15px] font-semibold lg:w-[50%]">
          <spam className="font-extrabold text-[50px]">
            Buy Your Dream Pottery Items
          </spam>
          <div className="flex-col">
            <span> 500+ Pottery Products</span>
            <span> 1000+ Customers</span>
          </div>
        </div>
        <div className="items-center justify-between p-0 h-[180px] sm:h-[500px] lg:w-[50%] relative">
          <Image
            src="/blackcircle.png"
            alt="banner"
            height={10}
            width={240}
            className="absolute bottom-0 right-10 md:scale-150 md:translate-y-[-52px] md:translate-x-[-35px]"
          />
          <Image
            src="/banner.png"
            alt="banner"
            height={350}
            width={350}
            className="absolute bottom-0 right-0 lg:scale-105"
          />
        </div>
      </div>

      {/* <div className=" lg:flex md:flex-2 gap-14 justify-center">
          <div className=" bg-cyan-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-green-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-red-300 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-blue-400 h-80 w-72 ml-10 rounded-3xl my-8"></div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-x-52 mt-16">
        <div className=" bg-slate-000 md:w-72 rounded-3xl text-start flex-col mt-9">
          <div className="font-bold text-[30px] pb-2 text-[#1e1e1ed6]">
            Best Selling Products
          </div>

          <div className="text-[#1e1e1e80] font-semibold pb-6">
            Easiest way to convert you home by buying your favorite items
          </div>

          <button className="bg-blue-200 rounded-lg p-4 flex font-semibold items-center justify-between cursor-pointer">
            <Link href="/"></Link>
            <div>See More</div>

            <div>
              <FcRight />
            </div>
          </button>
        </div>

        <div className=" bg-green-200 rounded-3xl my-8 flex justify-center h-80">
          gbdtg
        </div>
        <div className=" bg-red-300 rounded-3xl my-8"></div>
        <div className=" bg-pink-200 rounded-3xl my-8"></div>
        <div className=" bg-yellow-200 rounded-3xl my-8 hidden lg:block"></div>
        <div className="hidden lg:block bg-violet-400 rounded-3xl my-8"></div>
      </div>
    </div>
  );
};

export default Main;
