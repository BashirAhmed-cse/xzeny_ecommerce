"use client";

import React, { useState, useEffect } from 'react';
import { Star, Filter, Grid, List, Search, ChevronDown, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"; // Adjust path as per your ShadCN setup

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Elevate Pro Height Insoles",
        category: "height-insoles",
        price: 79,
        originalPrice: 149,
        rating: 4.8,
        reviewCount: 142,
        image: "orange elevate pro height insoles",
        featured: true,
        tags: ["Bestseller", "New"],
        description: "Professional-grade height enhancement with advanced comfort technology"
      },
      {
        id: 2,
        name: "Comfort Plus Orthotic Insoles",
        category: "orthotic-insoles",
        price: 59,
        originalPrice: 99,
        rating: 4.6,
        reviewCount: 89,
        image: "beige comfort plus orthotic insoles",
        featured: true,
        tags: ["Pain Relief"],
        description: "Advanced arch support for all-day comfort"
      },
      {
        id: 3,
        name: "Athletic Performance Insoles",
        category: "sports-insoles",
        price: 69,
        originalPrice: 119,
        rating: 4.7,
        reviewCount: 67,
        image: "black athletic performance insoles",
        tags: ["Sports"],
        description: "Enhanced performance for athletes"
      },
      {
        id: 4,
        name: "Everyday Comfort Insoles",
        category: "comfort-insoles",
        price: 39,
        originalPrice: 69,
        rating: 4.4,
        reviewCount: 203,
        image: "gray everyday comfort insoles",
        tags: ["Everyday Use"],
        description: "Perfect for daily wear and comfort"
      },
      {
        id: 5,
        name: "Premium Leather Insoles",
        category: "luxury-insoles",
        price: 89,
        originalPrice: 159,
        rating: 4.9,
        reviewCount: 54,
        image: "brown premium leather insoles",
        tags: ["Luxury", "New"],
        description: "Luxury leather insoles for premium footwear"
      },
      {
        id: 6,
        name: "Plantar Fasciitis Relief",
        category: "medical-insoles",
        price: 79,
        originalPrice: 129,
        rating: 4.5,
        reviewCount: 156,
        image: "blue plantar fasciitis relief insoles",
        tags: ["Medical Grade"],
        description: "Specialized support for foot conditions"
      },
      {
        id: 7,
        name: "Winter Thermal Insoles",
        category: "seasonal-insoles",
        price: 45,
        originalPrice: 79,
        rating: 4.3,
        reviewCount: 78,
        image: "white winter thermal insoles",
        tags: ["Seasonal"],
        description: "Keep your feet warm in cold weather"
      },
      {
        id: 8,
        name: "Breathable Mesh Insoles",
        category: "comfort-insoles",
        price: 35,
        originalPrice: 59,
        rating: 4.2,
        reviewCount: 91,
        image: "green breathable mesh insoles",
        tags: ["Breathable"],
        description: "Maximum airflow for fresh feet all day"
      }
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    setLoading(false);
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', count: products.length, icon: '🛍️' },
    { id: 'height-insoles', name: 'Height Insoles', count: products.filter(p => p.category === 'height-insoles').length, icon: '📏' },
    { id: 'orthotic-insoles', name: 'Orthotic Insoles', count: products.filter(p => p.category === 'orthotic-insoles').length, icon: '⚕️' },
    { id: 'sports-insoles', name: 'Sports Insoles', count: products.filter(p => p.category === 'sports-insoles').length, icon: '🏃' },
    { id: 'comfort-insoles', name: 'Comfort Insoles', count: products.filter(p => p.category === 'comfort-insoles').length, icon: '😌' },
    { id: 'luxury-insoles', name: 'Luxury Insoles', count: products.filter(p => p.category === 'luxury-insoles').length, icon: '💎' },
    { id: 'medical-insoles', name: 'Medical Insoles', count: products.filter(p => p.category === 'medical-insoles').length, icon: '🏥' },
    { id: 'seasonal-insoles', name: 'Seasonal Insoles', count: products.filter(p => p.category === 'seasonal-insoles').length, icon: '🌦️' }
  ];

  const priceRanges = [
    { label: 'Under $25', range: [0, 25] },
    { label: '$25 - $50', range: [25, 50] },
    { label: '$50 - $100', range: [50, 100] },
    { label: '$100 - $200', range: [100, 200] },
    { label: 'Over $200', range: [200, 500] }
  ];

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, priceRange, sortBy, searchTerm]);

  const handlePriceRangeSelect = (range) => {
    setPriceRange(range);
  };

  const ProductCard = ({ product }) => (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow p-0">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img
          src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        {product.tags.map((tag, index) => (
          <span
            key={index}
            className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
          ))}
          {product.rating % 1 !== 0 && <Star className="h-3 w-3 text-orange-400 fill-orange-400 opacity-50" />}
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-orange-500">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our premium collection of insoles designed for comfort, performance, and style
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-80 space-y-6">
            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-300"
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Filter size={18} className="mr-2 text-orange-500" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center justify-between w-full p-2 rounded-2xl transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="text-lg mr-2">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-3">
                {priceRanges.map((range, index) => (
                  <button
                    key={index}
                    onClick={() => handlePriceRangeSelect(range.range)}
                    className={`flex items-center justify-between w-full p-2 rounded-2xl transition-colors ${
                      priceRange[0] === range.range[0] && priceRange[1] === range.range[1]
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{range.label}</span>
                    <span className="text-sm text-gray-400">
                      {products.filter(p => p.price >= range.range[0] && p.price <= range.range[1]).length}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-orange-500"
                />
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Active Filters</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('all')} className="ml-2 hover:text-orange-900">
                      ×
                    </button>
                  </span>
                )}
                {(priceRange[0] !== 0 || priceRange[1] !== 500) && (
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center">
                    ${priceRange[0]} - ${priceRange[1]}
                    <button onClick={() => setPriceRange([0, 500])} className="ml-2 hover:text-orange-900">
                      ×
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')} className="ml-2 hover:text-orange-900">
                      ×
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceRange([0, 500]);
                  setSearchTerm('');
                }}
                className="text-sm text-orange-600 hover:text-orange-800 mt-2"
              >
                Clear all filters
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-semibold">{filteredProducts.length}</span> of{' '}
                  <span className="font-semibold">{products.length}</span> products
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:border-orange-300"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="name">Name</option>
                    </select>
                  </div>
                  
                  <div className="flex border border-gray-300 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-50 text-orange-600' : 'text-gray-600'}`}
                    >
                      <Grid size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-50 text-orange-600' : 'text-gray-600'}`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  : "space-y-6"
              }>
                {filteredProducts.map(product =>
                  viewMode === 'grid' ? (
                    <ProductCard key={product.id} product={product} />
                  ) : (
                    <div key={product.id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                      <div className="flex space-x-6">
                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                          <img
                            src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          {product.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                          <div className="flex items-center space-x-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-orange-400 text-orange-400' : 'text-gray-300'}`} />
                            ))}
                            {product.rating % 1 !== 0 && <Star className="h-3 w-3 text-orange-400 fill-orange-400 opacity-50" />}
                            <span className="text-xs text-gray-500">({product.reviewCount})</span>
                          </div>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg font-bold text-orange-500">${product.price.toFixed(2)}</span>
                            {product.originalPrice > product.price && (
                              <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className="text-center mt-8">
                <button className="bg-white border border-orange-300 text-orange-600 px-6 py-3 rounded-2xl hover:border-orange-400 transition-colors">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}