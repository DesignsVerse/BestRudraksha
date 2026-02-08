"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaFilter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  showFilters?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Search for Rudraksha, Gemstones, Malas...",
  showFilters = true 
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Popular search suggestions
  const popularSearches = [
    "1 Mukhi Rudraksha",
    "5 Mukhi Rudraksha", 
    "7 Mukhi Rudraksha",
    "Rudraksha Mala",
    "Blue Sapphire",
    "Gauri Shankar",
    "Gemstones",
    "Meditation Mala",
    "Spiritual Beads",
    "Original Rudraksha"
  ];

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = popularSearches.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions(popularSearches.slice(0, 5));
      setShowSuggestions(isExpanded);
    }
  }, [query, isExpanded]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string = query) => {
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      setIsExpanded(false);
      
      if (onSearch) {
        onSearch(searchQuery);
      } else {
        // Navigate to search results page
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setIsExpanded(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className={`relative flex items-center bg-white rounded-full border-2 transition-all duration-300 ${
        isExpanded ? 'border-orange-500 shadow-lg' : 'border-gray-200 hover:border-orange-300'
      }`}>
        <div className="flex-1 flex items-center">
          <FaSearch className="text-gray-400 ml-4 mr-2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="w-full py-3 px-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes />
            </button>
          )}
        </div>
        
        <div className="flex items-center pr-2">
          {showFilters && (
            <button
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              className="p-2 text-gray-400 hover:text-orange-500 transition-colors mr-2"
              title="Filters"
            >
              <FaFilter />
            </button>
          )}
          
          <button
            onClick={() => handleSearch()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
          >
            Search
          </button>
        </div>
      </div>

      {/* Search Suggestions */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
          <div className="p-4">
            <h4 className="text-sm font-semibold text-gray-600 mb-3">
              {query ? 'Suggestions' : 'Popular Searches'}
            </h4>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center"
                >
                  <FaSearch className="text-gray-400 mr-3 text-sm" />
                  <span className="text-gray-700">{suggestion}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quick Filters Panel */}
      {showFiltersPanel && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-40 p-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Quick Filters</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => handleSearch('1 mukhi')}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-md transition-colors"
            >
              1 Mukhi
            </button>
            <button
              onClick={() => handleSearch('5 mukhi')}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-md transition-colors"
            >
              5 Mukhi
            </button>
            <button
              onClick={() => handleSearch('mala')}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-md transition-colors"
            >
              Malas
            </button>
            <button
              onClick={() => handleSearch('gemstones')}
              className="px-3 py-2 text-sm bg-gray-100 hover:bg-orange-100 hover:text-orange-600 rounded-md transition-colors"
            >
              Gemstones
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;