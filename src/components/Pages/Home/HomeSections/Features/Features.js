import React from "react";

const Features = () => {
  return (
    <div className="pt-14 pb-14 bg-blue-100">
      <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Low Cost
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            In Bangladesh, we first with low cost services to provide you. We
            have been serving our touris since 2001 and we have a greate
            reputation
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Trusted
          </h3>
          <p className="text-md text-gray-500 dark:text-gray-300 py-4">
            In 20 years of serving, we never hand any bad news. All of our
            touris trust us and they refer us to new tourists
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            No Conflict
          </h3>
          <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
            We are very much awar of security. Our company never faced any
            Conflict
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
