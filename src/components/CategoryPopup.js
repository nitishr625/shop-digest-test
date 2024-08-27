import React from 'react';
import CategoryList from './CategoryCard';

const CategoryPopup = ({ onClose, onCategorySelect }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg relative max-h-[90%] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>
        <CategoryList onCategorySelect={onCategorySelect} />
      </div>
    </div>
  );
};

export default CategoryPopup;
