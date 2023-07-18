import React from "react";
import Image from "next/image";
import { FcRight } from "react-icons/fc";
import Link from "next/link";

const Category = () => {
  return (
    <div>
      <div className="ml-2">
        <div className="text-[40px] font-semibold flex justify-center">
          Category
        </div>
        <p className="flex justify-center font-semibold text-gray-500 mt-2">
          Find What You Are Looking For
        </p>
      </div>

      <div className=" my-14">
        {/* <div className="bg-blue-300 h-96"></div> */}
        <div class=" md:grid grid-rows-3 grid-flow-col gap-28 justify-center pb-5 cursor-pointer ">
          <div class="row-end-3 row-span-2 flex  items-center justify-center pb-10 flex-col">
            <Image
              src="/pic4.jpg"
              height={300}
              width={300}
              className="object-fill rounded-xl shadow-xl shadow-amber-600 	"
            />
            <div className="mt-5 font-bold text-xl">Rajasthani Design</div>
          </div>

          <div class="row-start-2 row-end-4 flex items-center justify-center pb-10 flex-col">
            <Image
              src="/pic2.jpg"
              height={300}
              width={300}
              className="object-fill rounded-xl shadow-xl shadow-yellow-600"
            />
            <div className="mt-5 font-bold text-xl">Ceramic Potery</div>
          </div>

          <div class="row-end-3 row-span-2 flex items-center justify-center pb-10 flex-col">
            <Image
              src="/pic3.jpg"
              height={300}
              width={300}
              className="object-fill rounded-xl shadow-xl shadow-blue-600"
            />
            <div className="mt-5 font-bold text-xl">Home accessories</div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col pb-8">
          <div className="my-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <button className="bg-white rounded-xl p-4 flex font-semibold items-center justify-between gap-3 cursor-pointer border-2 border-blue-200 hover:bg-blue-200 transition-colors hover:shadow-2xl shadow-blue-900">
            <Link href="/"></Link>
            <div className="font-bold">Explore</div>

            <div>
              <FcRight className="text-black" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
