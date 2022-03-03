import { useState } from "react";
import heroimg from '../assets/heroimg.png'
const Header = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
        <div className="w-full h-full flex justify-center items-center text-center flex-col space-y-16 px-3 lg:items-start -translate-y-10">
      <div className="flex flex-col justify-start items-center space-y-4 text-center lg:items-start">
        <h1 className="text-7xl space tracking-tighter font-medium ">
          Crypto news at
        </h1>
        <h1 className="text-7xl space tracking-tighter font-medium ">
          One place
        </h1>
      </div>
      <p className="text-2xl opacity-60 flex items-start justify-start space tracking-tighter ">
        Get all crypto news and alerts at one place and you are right there
      </p>

      <div className="mailBar">
        <div className="relative flex justify-center items-center">
          <div class="absolute top-4 left-3 h-full w-full flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>

          <input
            type="text"
            class="h-14 w-96 space pl-12 font-medium pr-20 rounded-full border-opacity-50 border-2 border-black focus:shadow focus:outline-none"
            placeholder="satoshi@crypto.xyz"
          />

          <div class="absolute top-2 right-2">
            {" "}
            <button class="py-2 px-3 text-white rounded-full bg-color-blue space bg-red-500 hover:bg-blue-700">
              Subscribe
            </button>{" "}
          </div>
        </div>
      </div>
        </div>

        <div>
            <img src={heroimg} width={512} alt="" />
        </div>
    </div>
  );
};

export default Header;

