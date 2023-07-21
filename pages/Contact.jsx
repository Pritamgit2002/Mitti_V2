import React from "react";

const Contact = () => {
  return (
    <div className="">
      <section class="bg-white  ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p class="mb-8 lg:mb-16  text-center text-gray-500/90  sm:text-xl font-medium">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-semibold text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-xl border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-500 border-gray-600 placeholder-gray-900 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="subject"
                class="shadow-xl border text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-500 border-gray-600 placeholder-gray-900 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="write your good name here"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-semibold text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="shadow-xl border text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-500 border-gray-600 placeholder-gray-900 text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-white rounded-xl p-4 flex font-semibold items-center justify-between gap-3 cursor-pointer border-2 border-blue-300 bg-blue-100/80 hover:bg-blue-300 transition-colors hover:shadow-2xl shadow-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

// import React from "react";
// import contactbg from "../img/contactbg.jpg";

// const Contact = () => {
//   return (
//     <div className="h-screen grid grid-cols-1 sm:grid-cols-2">
//       <div className="h-full relative">
//         <img src={contactbg} className="w-full h-full object-cover" />
//         <div class="absolute inset-0 bg-black opacity-70"></div>
//         <div class="absolute inset-0 flex items-center justify-center">
//           <h2 class="text-white text-4xl font-bold">Contact Us</h2>
//         </div>
//       </div>
//       <div className=" h-full ju ">
//       <form action="#" class="space-y-8">
//           <div className="my-20">
//               <label for="email" class="block mb-2 text-sm font-medium text-blue-400 dark:text-gray-300">Your email</label>
//               <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-[250px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
//           </div>
//           <div>
//               <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//               <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
//           </div>
//           <div class="sm:col-span-2">
//               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//               <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
//           </div>
//           <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
//       </form>
//       </div>
//     </div>
//   );
// };
