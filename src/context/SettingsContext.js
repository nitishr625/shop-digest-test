"use client";

import React, { createContext, useState, useContext, useCallback } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        category,
        currentPage,
        productsPerPage,
        handleCategoryChange,
        handlePageChange,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
