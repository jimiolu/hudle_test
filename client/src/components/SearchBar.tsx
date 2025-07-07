"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@mui/icons-material";

/////////////////////////////////////////// SEARCH BAR ////////////////////////////////////////////
const SearchBar = ({ className }: { className?: string }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  /////////////////////////////////////////// FETCH SUGGESTIONS ////////////////////////////////////////////
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data.suggestions));
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  /////////////////////////////////////////// HANDLE SELECT ////////////////////////////////////////////
  const handleSelect = (suggestion: string) => {
    setQuery("");
    setSuggestions([]);
    setShowDropdown(false);
    router.push(`/datasets?q=${encodeURIComponent(suggestion)}`);
    router.push(`/ml-models?q=${encodeURIComponent(suggestion)}`);
  };

  /////////////////////////////////////////// HANDLE ARROW KEYBOARD DOWN ////////////////////////////////////////////
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % suggestions.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev === 0 || prev === -1 ? suggestions.length - 1 : prev - 1
        );
        break;
      case "Enter":
        if (highlightedIndex >= 0) {
          e.preventDefault();
          handleSelect(suggestions[highlightedIndex]);
        }
        break;
      case "Escape":
        setShowDropdown(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-0 max-w-full sm:max-w-2xl mx-auto">
      <div className="relative w-full">
        <Search
          fontSize="small"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
            setHighlightedIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search datasets or models..."
          className={`w-full pl-10 pr-4 py-1 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-primary focus:border-primary transition placeholder:text-sm ${className}`}
        />
      </div>

      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-md max-h-64 overflow-y-auto">
          {suggestions.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSelect(item)}
              className={`cursor-pointer px-4 py-2 text-primary ${
                i === highlightedIndex ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
