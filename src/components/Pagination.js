import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      <button 
        onClick={() => handlePageClick(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 rounded"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage} of {totalPages}</span>
      <button 
        onClick={() => handlePageClick(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
