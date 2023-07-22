import Image from "next/image";
import { FcRight } from "react-icons/fc";
import Link from "next/link";
import BsPlus from "react-icons/bs";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide_1 from "../public/slide_1.jpg";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import pic2 from "../public/pic2.jpg";
import React, { useState } from "react";
import nav from "../components/Navbar.jsx"


const DynamicIcon = dynamic(
  () => import("react-icons/bs").then((mod) => mod.BsPlus),
  {
    ssr: false,
  }
);

const Main = ({nav}) => {
  // const [pro, setPro] = useState(false);
  // const handleNav = () => {
  //   setPro(!pro);
  // };
  console.log(nav);
  return (
    <div className="mx-5 lg:mx-52 flex-col justify-center lg:mt-8">
      {/* <div className="bg-[#C1DCDC] rounded-2xl font-normal lg:flex ">
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
      </div> */}
      <div className={nav ? "hidden" : ""}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 1000,
          }}
          loop={true}
          className="cursor-pointer h-[450px] lg:h-[580px] rounded-[35px] bg-red-200 shadow-xl shadow-gray-400 "
          pagination={{ clickable: true }}
        >
          <div className="flex items-center justify-center ">
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1488977678660-dca8681ca872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  height={100}
                  width={200}
                  alt="htf"
                  className="w-full h-full shadow-xl shadow-gray-500"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h2 class="text-5xl font-bold">Timeless Treasures</h2>
                    <p class="text-lg mt-2">
                      Discover the Beauty of Handcrafted Pottery.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://images.pexels.com/photos/4992831/pexels-photo-4992831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  height={100}
                  width={200}
                  alt="htf"
                  className="h-full w-full shadow-2xl shadow-gray-500"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h2 class="text-5xl font-bold">Elevate Every Dish</h2>
                    <p class="text-lg mt-2">
                      Unleash Elegance with Our Dining Pottery Collection.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1269&q=80"
                  height={100}
                  width={200}
                  alt="htf"
                  className="h-full w-full shadow-2xl shadow-gray-500"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h2 class="text-5xl font-bold">Go Green, Spend Smart</h2>
                    <p class="text-lg mt-2">
                      Embrace Earth-Friendly Pottery Delight.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://images.unsplash.com/photo-1632819506620-cc0f984af43a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                height={100}
                width={200}
                alt="trfdtrd"
                className="h-full w-full shadow-2xl shadow-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1628281321655-060c5fb662a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
                  height={100}
                  width={200}
                  alt="trfdtrd"
                  className="h-full w-full shadow-2xl shadow-gray-500"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h2 class="text-5xl font-bold">Crafted with Love</h2>
                    <p class="text-lg mt-2 text-green-200">
                      Own a Piece of Artistry with Our Handmade Pottery.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1481401908818-600b7a676c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  height={100}
                  width={200}
                  alt="trfdtrd"
                  className="h-full w-full shadow-2xl shadow-gray-500"
                />
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center text-white">
                    <h2 class="text-5xl font-bold">The Ceramic Beauty!</h2>
                    <p class="text-lg mt-2 text-slate-200">
                      Embrace Elegance: Elevate Your Space with Exquisite
                      Ceramic Creations.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      {/* <div className=" lg:flex md:flex-2 gap-14 justify-center">
          <div className=" bg-cyan-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-green-200 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-red-300 h-80 w-72 ml-10 rounded-3xl my-8"></div>
          <div className=" bg-blue-400 h-80 w-72 ml-10 rounded-3xl my-8"></div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-4 md:grid-rows-2 md:gap-x-24 mt-8">
        <div className=" bg-slate-000 md:w-72 rounded-3xl text-start flex-col mt-8 ">
          <div className="font-bold text-[30px] pb-2 text-[#1e1e1ed6] pt-28">
            Best Selling Products
          </div>

          <div className="text-[#1e1e1e80] font-semibold pb-6">
            Easiest way to convert you home by buying your favorite items
          </div>

          <Link href="/Product">
            <button
              className="bg-blue-200 rounded-lg p-4 flex font-semibold items-center justify-between cursor-pointer"
              href="/Product"
            >
              <div>See More</div>

              <div className="mx-2">
                <FcRight />
              </div>
            </button>
          </Link>
        </div>

        <div>
          <div className=" cursor-pointer  rounded-3xl my-8">
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

        <div>
          <div className="cursor-pointer  rounded-3xl my-8">
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

        <div>
          <div className="cursor-pointer  rounded-3xl my-8">
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

        <div className="cursor-pointer hidden lg:block">
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

        <div className="cursor-pointer hidden lg:block">
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
