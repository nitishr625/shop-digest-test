"use client";

import React, { useState } from 'react';
import CategoryList from '@/components/CategoryCard';
import ProductList from '@/components/ProductList';
import FilterButton from '@/components/FilterButton';
import CategoryPopup from '@/components/CategoryPopup';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFilterButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsPopupOpen(false); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="hidden md:block min-w-44 h-screen hide-scrollbar">
        <CategoryList onCategorySelect={setSelectedCategory} />
      </div>
      
      <div className="w-[85%] h-screen hide-scrollbar">
        <ProductList selectedCategory={selectedCategory} />
      </div>

      <FilterButton onClick={handleFilterButtonClick} />

      {isPopupOpen && (
        <CategoryPopup
          onClose={handleClosePopup}
          onCategorySelect={handleCategorySelect}
        />
      )}
    </div>
  );
};

export default Home;
