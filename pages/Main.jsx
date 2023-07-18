import Image from "next/image";
import React from "react";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import BsPlus from "react-icons/bs";
import dynamic from "next/dynamic";

const DynamicIcon = dynamic(
  () => import("react-icons/bs").then((mod) => mod.BsPlus),
  {
    ssr: false,
  }
);
const Main = () => {
  return (
    <div className="mx-16 lg:mx-52 flex-col justify-center lg:mt-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-x-24 mt-16">
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

        <div >
          <div className="  rounded-3xl my-8">
              <Image
                src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                height={100}
                width={200}
                alt="htf"
                className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
              />           
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div >
          <div className="  rounded-3xl my-8">
              <Image
                src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                height={100}
                width={200}
                alt="htf"
                className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
              />           
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div >
          <div className="  rounded-3xl my-8">
              <Image
                src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                height={100}
                width={200}
                alt="htf"
                className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
              />           
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="  rounded-3xl my-8">
              <Image
                src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                height={100}
                width={200}
                alt="htf"
                className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
              />           
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="  rounded-3xl my-8">
              <Image
                src="https://images.unsplash.com/photo-1607448885122-b3d4cf451587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                height={100}
                width={200}
                alt="htf"
                className="w-full h-auto rounded-xl shadow-xl shadow-green-200"
              />           
            <div className="pt-5 text-start text-[18px] font-medium font-poppins mx-5">
              Ceramic Tea Set
            </div>
            <div className="text-[18px] font-medium text-black text-opacity-60 text-start font-poppins mx-5">
              $45.45
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Main;
