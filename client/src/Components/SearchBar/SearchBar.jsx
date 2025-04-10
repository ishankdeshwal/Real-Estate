import React from "react";
import { HiLocationMarker } from "react-icons/hi";

function SearchBar({ filter, setfilter }) {
  return (
    <div className="search-bar bg-white w-full rounded-[5px] flex justify-between items-center gap-1 px-4 py-2 ">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        type="text"
        placeholder="Search by title/city/country"
        value={filter}
        onChange={(e) => setfilter(e.target.value)}
        className="text-black outline-none "
      />
      <button className="button">Search</button>
    </div>
  );
}

export default SearchBar;
