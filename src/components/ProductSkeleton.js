const ProductSkeleton = () => {
    return (
      <div className="bg-white p-4 rounded shadow-md">
        <div className="w-full h-48 bg-gray-200 rounded mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  };
  
  export default ProductSkeleton;
  