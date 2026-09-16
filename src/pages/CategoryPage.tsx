import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

import { products as dummyProducts } from '../data/products';

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  const categoryName = categoryId ? categoryId.replace('-', ' ') : 'All Furniture';

  const filteredProducts = dummyProducts.filter((product) => {
    if (!categoryId || categoryId === 'all') return true;
    if (categoryId === 'new') return product.isNew;
    return product.category === categoryId;
  });

  return (
    <div className="pt-8 pb-24 bg-kairali-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="text-xs text-kairali-brown/60 uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-kairali-brown">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-kairali-brown font-medium capitalize">{categoryName}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-kairali-beige pb-6">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-kairali-brown capitalize mb-2">{categoryName}</h1>
            <p className="text-kairali-brown/70 font-light">Explore our curated collection of premium pieces.</p>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button className="flex items-center gap-2 text-sm uppercase tracking-wider text-kairali-brown border border-kairali-beige px-4 py-2 hover:bg-white transition-colors">
              <Filter size={16} /> Filters
            </button>
            <button className="flex items-center gap-2 text-sm uppercase tracking-wider text-kairali-brown border border-kairali-beige px-4 py-2 hover:bg-white transition-colors">
              Sort By <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-kairali-brown/60 font-light">
            No products found in this category yet.
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CategoryPage;
