import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Search = ({ isOpen, searchText }) => {
  const [text, setText] = useState("");

  console.log(isOpen);
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75 transform"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div class=" container bg-white flex  relative mx-auto text-gray-600">
        <input
          class=" w-full border-2 border-gray-300 bg-white px-5 py-3 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="eg:politics ..."
          onChange={(e) => setText(e.target.value)}
        />
        <Link class="absolute right-0 top-0 mr-4" to={`/search/${text}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "30px",
              height: "30px",
              color: "black",
              cursor: "pointer",
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
      </div>
    </Transition>
  );
};

export default Search;
