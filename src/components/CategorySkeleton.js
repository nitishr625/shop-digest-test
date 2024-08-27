const CategorySkeleton = () => {
    return (
      <div className="p-4 w-40">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul>
          {[...Array(10)].map((_, index) => (
            <li key={index} className="mb-2">
              <div className="bg-gray-200 h-10 rounded animate-pulse"></div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default CategorySkeleton;