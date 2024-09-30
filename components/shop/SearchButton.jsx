"use client";

import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

import { getSearchSuggestions } from "@/db/query";
import debounce from "lodash.debounce";
import Loading from "@/app/loading";

export default function SearchButton() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const fetchSuggestions = debounce(async (term) => {
    if (term) {
      try {
        const sugg = await getSearchSuggestions(term);
        setSuggestions(sugg);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, 300);

  useEffect(() => {
    fetchSuggestions(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setLoading(true);
      router.push(`/shop/search=${searchTerm}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setLoading(true);
    setSearchTerm(suggestion.name);
    setSuggestions([]);
    setSearchTerm("");
    router.push(`/shop/search=${suggestion.name}&id=${suggestion.id}`);
  };
  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setLoading(false); // Set loading to false when the route changes
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   router.events.on("routeChangeError", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     router.events.off("routeChangeError", handleRouteChange);
  //   };
  // }, [router]);
  useEffect(() => {
    // Set loading to false whenever the pathname changes
    setLoading(false);
  }, [pathname]);
  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <IoSearchSharp size={25} />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 500)}
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
        placeholder="search"
      />
      <button
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
        onClick={handleSearch}
      >
        Search
      </button>
      {loading && <Loading />}
      {isFocused && suggestions.length > 0 && (
        <ul className="absolute top-12 left-0 right-0 bg-white border border-gray-200 z-10 rounded-b-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
