"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

// Define the structure of your dataset items
interface SearchItem {
  id: string;
  title: string;
  author: string;
  link: string;
}

interface FuzzySearchProps {
  data: SearchItem[];
}

export default function SearchBar({ data }: FuzzySearchProps) {
  const [query, setQuery] = useState("");

  // Initialize and configure Fuse.js using useMemo for performance optimization
  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["title", "author"], // Fields to look through
      threshold: 0.4, // 0.0 = perfect match, 1.0 = match anything. 0.4 is ideal for typos.
      includeScore: true,
    });
  }, [data]);

  // Execute search if query exists, otherwise show original dataset
  const results = useMemo(() => {
    if (!query) return data;
    return fuse.search(query).map((result) => result.item);
  }, [query, fuse, data]);

  return (
    <div className="relaive w-75 md:w-xl lg:w-2xl">
      {/* Search Input Box */}
      <div className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full px-4 py-2 md:px-6 md:py-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-lg md:text-xl"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-2.5 md:right-6 md:top-4 text-white/80 hover:text-white text-lg md:text-xl"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results Dropdown or List */}
      {query !== "" && (
        <ul className="absolute w-75 md:w-xl xl:w-2xl bg-white rounded-sm border shadow-sm max-h-80 overflow-y-auto divide-y divide-gray-100 z-50 text-lg md:text-xl">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                href={item.id}
                key={item.id}
                className="px-3 py-2 md:py-3 md:px-4 hover:bg-black/90 transition-colors block bg-black"
              >
                <p className="font-medium text-gray-100">{item.title}</p>
                <p className="font-medium text-gray-100 text-xs italic">{item.author}</p>
              </Link>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500 text-lg md:text-xl">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
}
