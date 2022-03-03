import { useState } from "react";

const Nav = () => {
  //State

  const [menu, setMenu] = useState(false);

  //Function

  const menuToggler = () => {
    setMenu(() => !menu);
    console.log(menu);
  };

  const menuCloser = () => {
    setMenu(() => !menu);
  };

  return (
    <div className="flex justify-between mt-7 mx-4 items-center tracking-tighter space z-10">
      <div className="space font-bold text-3xl">
        Crypto<span className="color-blue">.xyz</span>
      </div>

      <div className="md:flex hidden space-x-6 space font-medium text-lg">
        <p>Market</p>
        <button className="flex items-end h-full font-medium opacity-50 hover:opacity-75">
          <p className="">Community</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
            className=""
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <p>Blog</p>
      </div>

      <div className="relative md:flex hidden md:w-64 w-48">
        <p className="absolute flex h-full items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </p>

        <input
          type="text"
          className="border-2 rounded-full text-sm py-2 pr-4 pl-10 w-full"
          placeholder="Search for news, Crypto and ... "
          id="searchBar"
        ></input>
      </div>

      <div className="mobileView flex md:hidden transition-all delay-500 ease-in-out duration-1000">
        <button onClick={menuToggler} className="h-full w-full">
          <svg
            width="36"
            height="15"
            viewBox="0 0 36 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H34"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 13H34"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className={`fixed z-10 transition-all delay-75 duration-800 ease-linear bg-black min-h-screen w-full top-0 left-0 text-white flex items-center justify-center text-5xl md:text-6xl ${
            menu
              ? "translate-x-0 opacity-100 "
              : "-translate-x-full opacity-0 "
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
            className="absolute top-8 right-8 cursor-pointer"
            onClick={menuCloser}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <div className="flex flex-col space-y-2 md:space-y-4 w-full">
            <p className="w-full hover:bg-gray-900 py-7 md:py-10">Market</p>
            <button className="w-full hover:bg-orange-600 py-7 md:py-10 flex items-center justify-center space-x-2">
              <p>Community</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
                className=" translate-y-2 "
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <p className="w-full hover:bg-gray-900 py-7 md:py-10">Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
// absolute z-10 translate-x-full opacity-0 hidden bg-black min-h-screen w-full top-0 left-0 text-white flex items-center justify-center text-6xl
