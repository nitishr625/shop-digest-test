import CategorySkeleton from '@/components/CategorySkeleton';
import { useState, useEffect } from 'react';
import { useSettings } from '@/context/SettingsContext';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, handleCategoryChange } = useSettings();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://dummyjson.com/products/category-list');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <CategorySkeleton />;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul>
        <li>
          <button
            onClick={() => handleCategoryChange('')}
            className={`block w-40 text-left px-4 py-2 mb-2 ${category === '' ? 'bg-gray-400' : 'bg-gray-300'} rounded hover:bg-gray-400`}
          >
            All Categories
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => handleCategoryChange(cat)}
              className={`block w-40 text-left px-4 py-2 mb-2 ${category === cat ? 'bg-gray-400' : 'bg-gray-200'} rounded hover:bg-gray-300`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

