"use client"

import React, { useState, useMemo } from "react";
import HeroComponent from "@/components/general/HeroComponent";
import resourcesData from '../../public/data/resources.json';

const Resources = () => {
    const [query, setQuery] = useState("");

    // Filter resources by resource_name or club_name (case-insensitive)
    const filteredResources = useMemo(() => {
        if (!query.trim()) return resourcesData;
        const q = query.toLowerCase();
        return resourcesData.filter(
            (resource: any) =>
                resource.resource_name.toLowerCase().includes(q) ||
                resource.club_name.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <div className="bg-[#14213d] min-h-screen">
            <HeroComponent data={{ heading: "Resources" }} />
            <br/>
            <div className="max-w-7xl mx-auto px-4">
                {/* Search Bar */}
                <div className="flex justify-center mb-10">
                    <div className="relative w-full max-w-md">
                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search by resource or club name..."
                            className="w-full px-5 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fca311] transition-all duration-300 shadow-md"
                            style={{
                                boxShadow: query
                                    ? "0 4px 24px 0 rgba(252,163,17,0.15)"
                                    : "0 2px 8px 0 rgba(20,33,61,0.10)"
                            }}
                        />
                        <svg
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#fca311] pointer-events-none"
                            width="22"
                            height="22"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </div>
                </div>
                {/* Resource List */}
                <div className="py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {filteredResources.map((resource: any, idx: number) => (
                        <div
                            key={idx}
                            className="bg-white/10 rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center hover:shadow-lg transition-shadow"
                        >
                            {/* Image on left (or top on mobile) */}
                            <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6">
                                <img
                                    src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(resource.resource_link)}`}
                                    alt="Resource preview"
                                    className="w-16 h-16 rounded object-cover bg-white"
                                />
                            </div>
                            {/* Text on right (or below on mobile) */}
                            <div className="flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">{resource.resource_name}</h3>
                                <p className="text-sm text-gray-300 mb-4">{resource.club_name}</p>
                                <a
                                    href={resource.resource_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-block text-[#fca311] hover:underline font-medium"
                                >
                                    View Resource
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;