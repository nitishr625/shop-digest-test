import React from 'react';
import { FaFilter } from 'react-icons/fa';

const FilterButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-md flex items-center justify-center z-50 md:hidden"
    >
      <FaFilter size={20} />
    </button>
  );
};

export default FilterButton;
