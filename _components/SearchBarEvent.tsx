"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import type { EventProps } from "@/types";

interface FuzzySearchProps {
  data: EventProps[];
}

export default function SearchBar({ data }: FuzzySearchProps) {
  const [query, setQuery] = useState("");

  // Initialize and configure Fuse.js using useMemo for performance optimization
  const fuse = useMemo(() => {
    return new Fuse(data, {
      keys: ["event_title", "event_venue"], // Fields to look through
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
    <div className="relaive w-75 md:w-xl xl:w-2xl">
      {/* Search Input Box */}
      <div className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Events..."
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-2.5 text-white/80 hover:text-white text-sm"
          >
            Clear
          </button>
        )}
      </div>

      {/* Results Dropdown or List */}
      {query !== "" && (
        <ul className="absolute w-75 md:w-xl bg-white rounded-sm border shadow-sm max-h-80 overflow-y-auto divide-y divide-gray-100 z-50">
          {results.length > 0 ? (
            results.map((item) => {
              const link = `/admin/edit-event/${item.id}`;
              return (
                <Link
                  href={link}
                  key={item.id}
                  className="px-3 py-1 hover:bg-black/90 transition-colors block bg-black"
                >
                  <p className="font-medium text-gray-100">{item.event_title}</p>
                  <p className="font-medium text-gray-100 text-xs">
                    {item.event_date.toDateString()}
                  </p>
                  <p className="font-medium text-gray-100 text-xs">{item.event_venue}</p>
                </Link>
              );
            })
          ) : (
            <li className="p-4 text-center text-gray-500 text-sm">No matches found</li>
          )}
        </ul>
      )}
    </div>
  );
}
