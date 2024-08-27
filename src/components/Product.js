import Image from 'next/image';

const Product = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <Image 
        src={product?.images[0]} 
        alt={product?.title} 
        width={400} 
        height={200} 
        className="w-full h-48 object-cover mb-4"
        placeholder="blur"
        blurDataURL="/path/to/placeholder-image.jpg" // Optional: URL to a small placeholder image
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </div>
  );
};

export default Product;
