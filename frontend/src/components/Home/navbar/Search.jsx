import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import Cross from "../__modules__/svg/Cross";

const Search = ({ isOpen, searchText }) => {
  const [text, setText] = useState("");

  // console.log(isOpen);
  return (
    <div
      class={`${
        isOpen ? "inline" : "hidden"
      } absolute bg-white flex items-center h-full w-11/12 top-0 text-gray-600`}
    >
      <input
        class=" w-full border-2 text-2xls font-bold bg-white px-5 py-3 rounded-lg focus:outline-none"
        type="search"
        placeholder="Example ..."
        onChange={(e) => setText(e.target.value)}
      />
      <button className="mr-4" onClick={() => (isOpen = false)}>
        <Cross />
      </button>
    </div>
  );
};

export default Search;
