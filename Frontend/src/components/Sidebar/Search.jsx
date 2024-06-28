import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import useGetConversation from "../../hooks/useGetConversation.js";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
function Search() {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search input atleast 3 charachters long");
    }
    // apply saerch algo
    const searchedChat = conversations?.find((el) =>
      el.fullname.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (!searchedChat) return toast.error("User not found!");
    setSelectedConversation(searchedChat);
    setSearch("");
  }
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex items-start justify-between gap-4"
    >
      <input
        type="text"
        placeholder="Search here"
        className="input input-bordered px-4 py-2 rounded-3xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button className="w-10 h-10 rounded-full p-2 bg-sky-500 flex items-center justify-center text-lg text-white">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default Search;
