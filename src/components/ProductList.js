import React, { useEffect, useState } from 'react';
import Product from './Product';
import ProductSkeleton from './ProductSkeleton';
import Pagination from './Pagination';
import { useSettings } from '@/context/SettingsContext';

const AllProducts = () => {
  const { category, currentPage, productsPerPage, handlePageChange } = useSettings();
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const skip = (currentPage - 1) * productsPerPage;
      const url = category
        ? `https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products || data);
      setTotalPages(Math.ceil(data.total / productsPerPage));
      setLoading(false);
    };

    fetchProducts();
  }, [category, currentPage, productsPerPage]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? [...Array(productsPerPage)].map((_, index) => <ProductSkeleton key={index} />) // Show skeletons while loading
          : products.map((product) => <Product key={product.id} product={product} />)}
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AllProducts;
