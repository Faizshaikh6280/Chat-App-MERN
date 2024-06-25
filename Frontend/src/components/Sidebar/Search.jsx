import React from "react";
import { IoIosSearch } from "react-icons/io";
function Search() {
  return (
    <div className="flex items-start justify-between gap-4">
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered px-4 py-2 rounded-3xl"
      />

      <button className="w-10 h-10 rounded-full p-2 bg-sky-500 flex items-center justify-center text-lg text-white">
        <IoIosSearch />
      </button>
    </div>
  );
}

export default Search;
