"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/Common/Breadcrumb';
import SearchBar from '@/components/Search/SearchBar';
import { FaFilter, FaTh, FaList } from 'react-icons/fa';

// Force dynamic rendering since we use useSearchParams()
export const dynamic = 'force-dynamic';

interface Product {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  discountedPrice: number;
  category: string;
  mukhi: number | null;
  benefits: string[];
  images: string[];
  inStock: boolean;
  tags: string[];
}

interface SearchResponse {
  success: boolean;
  data: {
    products: Product[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalProducts: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
    filters: {
      query: string;
      category: string;
      minPrice: number;
      maxPrice: number;
      mukhi: string;
      sortBy: string;
    };
  };
}

// Component that uses useSearchParams - must be wrapped in Suspense
const SearchPageContent = () => {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    query: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    mukhi: searchParams.get('mukhi') || '',
    sortBy: searchParams.get('sortBy') || 'relevance',
    page: searchParams.get('page') || '1'
  });

  // Fetch search results
  const fetchSearchResults = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      const response = await fetch(`/api/search?${queryParams.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setSearchResults(data);
      } else {
        console.error('Search failed:', data.error);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Initial search on page load
  useEffect(() => {
    fetchSearchResults();
  }, []);

  // Update filters and search
  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: '1' }));
  };

  // Apply filters
  const applyFilters = () => {
    fetchSearchResults();
    setShowFilters(false);
  };

  // Handle search from search bar
  const handleSearch = (query: string) => {
    updateFilters({ query });
    setTimeout(fetchSearchResults, 100);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    setFilters(prev => ({ ...prev, page: page.toString() }));
    setTimeout(fetchSearchResults, 100);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow ${
      viewMode === 'list' ? 'flex items-center p-4' : 'p-4'
    }`}>
      <div className={`${viewMode === 'list' ? 'w-32 h-32 flex-shrink-0 mr-4' : 'w-full h-48 mb-4'}`}>
        <img
          src={product.images[0] || '/images/placeholder-product.jpg'}
          alt={product.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      
      <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-orange-600">₹{product.discountedPrice}</span>
            {product.price !== product.discountedPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
            )}
          </div>
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {product.benefits.slice(0, 3).map((benefit, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {benefit}
            </span>
          ))}
        </div>

        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Breadcrumb title="Search Results" pages={["Search"]} />
      
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              {searchResults && (
                <h2 className="text-xl font-semibold text-gray-800">
                  {searchResults.data.pagination.totalProducts} results
                  {filters.query && ` for "${filters.query}"`}
                </h2>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white rounded-md border">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <FaTh />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-orange-600 text-white' : 'text-gray-600'}`}
                >
                  <FaList />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={filters.sortBy}
                onChange={(e) => {
                  updateFilters({ sortBy: e.target.value });
                  setTimeout(applyFilters, 100);
                }}
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="name_asc">Name: A to Z</option>
                <option value="name_desc">Name: Z to A</option>
              </select>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-3 py-2 text-sm hover:bg-gray-50"
              >
                <FaFilter />
                <span>Filters</span>
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-64 bg-white rounded-lg shadow-md p-6 h-fit">
                <h3 className="font-semibold text-gray-800 mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={filters.category}
                    onChange={(e) => updateFilters({ category: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">All Categories</option>
                    <option value="1-14 mukhi rudraksha">1-14 Mukhi Rudraksha</option>
                    <option value="special rudraksha">Special Rudraksha</option>
                    <option value="gemstones">Gemstones</option>
                    <option value="mala and yantra">Mala and Yantra</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => updateFilters({ minPrice: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => updateFilters({ maxPrice: e.target.value })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                {/* Mukhi Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mukhi</label>
                  <select
                    value={filters.mukhi}
                    onChange={(e) => updateFilters({ mukhi: e.target.value })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">All Mukhi</option>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(num => (
                      <option key={num} value={num.toString()}>{num} Mukhi</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={applyFilters}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            )}

            {/* Results Grid */}
            <div className="flex-1">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
                </div>
              ) : searchResults?.data.products.length ? (
                <>
                  <div className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}>
                    {searchResults.data.products.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {searchResults.data.pagination.totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-8">
                      {searchResults.data.pagination.hasPrevPage && (
                        <button
                          onClick={() => handlePageChange(searchResults.data.pagination.currentPage - 1)}
                          className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          Previous
                        </button>
                      )}
                      
                      {Array.from({ length: searchResults.data.pagination.totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-2 rounded-md ${
                            page === searchResults.data.pagination.currentPage
                              ? 'bg-orange-600 text-white'
                              : 'bg-white border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      {searchResults.data.pagination.hasNextPage && (
                        <button
                          onClick={() => handlePageChange(searchResults.data.pagination.currentPage + 1)}
                          className="px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
                  <button
                    onClick={() => {
                      setFilters({
                        query: '',
                        category: '',
                        minPrice: '',
                        maxPrice: '',
                        mukhi: '',
                        sortBy: 'relevance',
                        page: '1'
                      });
                      setTimeout(fetchSearchResults, 100);
                    }}
                    className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Main component with Suspense boundary
const SearchPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;