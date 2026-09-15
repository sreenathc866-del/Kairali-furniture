import { useParams, Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard, { type Product } from '../components/ProductCard';

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Aarav Lounge Sofa',
    description: 'A masterpiece of comfort featuring natural linen.',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    category: 'living-room'
  },
  {
    id: '2',
    name: 'Nila Dining Table',
    description: 'Solid walnut dining table with seating for six.',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800',
    category: 'dining'
  },
  {
    id: '3',
    name: 'Tara Armchair',
    description: 'Mid-century inspired accent chair.',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
    category: 'living-room'
  },
  {
    id: '4',
    name: 'Dev Storage Cabinet',
    description: 'Minimalist fluted wood sideboard.',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    category: 'storage'
  },
  {
    id: '5',
    name: 'Rani Accent Chair',
    description: 'Elegant olive green velvet lounge chair.',
    price: 52000,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800',
    category: 'living-room'
  },
  {
    id: '6',
    name: 'Kiran Coffee Table',
    description: 'Round oak coffee table with a sculptural base.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800',
    category: 'living-room'
  }
];

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
