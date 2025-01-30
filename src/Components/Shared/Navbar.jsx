import React from "react";

const Navbar = () => {
  

  return (
    <div className="bg-gray-900 fixed bg-opacity-80 z-10 text-white py-4">
      <div className="container mx-auto flex items-center flex-wrap justify-between px-4">
        {/* Logo */}
        <h1>
          <a aria-label="Go to home page" href="/en" rel="home">
            <img
              srcSet="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format 200w"
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
              width="200"
              height="32"
              className="w-[134px] h-auto object-contain lg:w-[170px]"
              sizes="134px, (min-width: 1024px) 170px"
              alt="AnyTech"
            />
          </a>
        </h1>

        {/* Navigation Menu */}
        <div className="flex items-center"> 
          <nav className="desktop-menu max-lg:hidden" aria-label="Main navigation desktop">
            <ul className="flex space-x-6">
              <li className="group relative py-3 px-6 border-b border-transparent hover:border-white transition-all duration-500 cursor-pointer">
                <span className="flex items-center justify-between">
                  <span>Solutions</span>
                  <svg
                    className="ml-2 mt-1 fill-white"
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                  >
                    <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z"></path>
                  </svg>
                </span>
                {/* Dropdown Menu (Example) */}
                <div className="absolute hidden group-hover:block bg-gray-800 mt-2 py-2 rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Solution 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Solution 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Solution 3
                  </a>
                </div>
              </li>
              <li className="py-3 px-6 border-b border-transparent hover:border-white transition-all duration-500 cursor-pointer">
                <a href="#">Service</a>
              </li>
              <li className="py-3 px-6 border-b border-transparent hover:border-white transition-all duration-500 cursor-pointer">
                <a href="#">Contact</a>
              </li>
             
            </ul>
          </nav>

          

          {/* Mobile Menu Toggle (Example) */}
          <button className="lg:hidden p-2 focus:outline-none">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
        <button 
                
                className="border border-white bg-transparent hover:bg-white hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs"
              >
                Contact Us
                <svg
                  className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-main"
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
                </svg>
              </button>
      </div>
    </div>
  );
};

export default Navbar;
