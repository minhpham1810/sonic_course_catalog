"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search courses...",
  onSearch,
  className,
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch?.("");
  };

  return (
    <div
      className={cn(
        "w-full max-w-full sm:max-w-2xl mx-auto px-2 sm:px-0",
        className
      )}
    >
      <form onSubmit={handleSubmit} className="relative group">
        <div
          className={cn(
            "relative flex items-center bg-[#131315] border border-[#506077] rounded-[20px] transition-all duration-300",
            isFocused
              ? "border-[#FFC966] shadow-lg shadow-[#FFC966]/20"
              : "hover:border-gray-500"
          )}
        >
          {/* Search Icon */}
          <div className="absolute left-4 sm:left-6 flex items-center pointer-events-none">
            <svg
              className={cn(
                "w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300",
                isFocused ? "text-[#FFC966]" : "text-gray-400"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={cn(
              "w-full bg-transparent border-none outline-none pl-12 sm:pl-16 pr-12 sm:pr-16 py-3 sm:py-4 text-base sm:text-lg text-gray-100 placeholder-gray-400",
              "font-urbanist transition-all duration-300",
              "focus:placeholder-gray-500"
            )}
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 sm:right-6 p-1 rounded-full transition-all duration-300 hover:bg-white/10 group"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Subtle glow effect on focus */}
        <div
          className={cn(
            "absolute inset-0 rounded-[20px] transition-all duration-300 pointer-events-none",
            isFocused
              ? "bg-gradient-to-r from-[#FFC966]/10 to-[#BF5F38]/10 opacity-100"
              : "opacity-0"
          )}
        />
      </form>
    </div>
  );
}
