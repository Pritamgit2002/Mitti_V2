// import { useEffect, useState } from "react";
// import axios from "axios";
// import { data } from "autoprefixer";
// import Link from "next/link";


// const CartContext = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       let fetchData = await axios.get("https://fakestoreapi.com/products");

//       fetchData = fetchData.data;
//       setProducts(fetchData);
//       console.log(fetchData);
      
//     };
//     fetchProducts();
//   }, []);


//   return (
//     <div>
//       {/* itemValue having all api data  */}
//       {products.map((itemValue) => (
//           <div>
//           <div className="border bottom-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
//             <div className="w-full h-full flex justify-center items-center">
//               {/* image */}
//               <div className="w-[200px] mx-auto flex justify-center items-center">
//                 <img
//                   className="max-h-[160px] group-hover:scale-110 transition duration-300"
//                   src={itemValue.image}
//                   alt=""
//                 />
//               </div>
//             </div>
//             {/* button */}
//             {/* <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all ease-out duration-300">
//               <button onClick={() => addToCart(product, itemValue.id)}>
//                 <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
//                   <div onClick={notify}>
//                       <BsPlus className="text-3xl" />
//                       <ToastContainer/>
//                     </div>
//                 </div>
//               </button>
//               <Link
//                 to={`/product/${id}`}
//                 className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
//               >
//                 <BsEyeFill />
//               </Link>
//             </div> */}
//           </div>
//           {/* category & title & price */}
//           <div>
//             <div className="text-sm capitalize text-gray-500 mb-1">{itemValue.category}</div>
//             <Link href={`/Product/${itemValue.id}`}>
//               <h2 className="font-semibold mb-1">{itemValue.title}</h2>
//             </Link>
//             <div className="font-semibold">₹ {itemValue.price}</div>
//           </div>
//         </div>
//      ))}
//     </div>
//   );
// };

// export default CartContext;
import React from 'react'

const CartContext = () => {
  return (
    <div>CartContext</div>
  )
}

export default CartContext
