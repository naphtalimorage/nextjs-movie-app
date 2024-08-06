"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBar() {
//   const router = useRouter();
  const [search, setSearch] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

//   const handleSearch = () => {
//     router.push(`/search?query=${search}`);
//   };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search for Movies or Tv Shows"
      />
      <button >Search</button>
    </div>
  );
}
