import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '../context/FavoriteContext';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  return (
    <motion.div 
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-kairali-beige/30 mb-4 rounded-sm">
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-kairali-cream px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-kairali-brown shadow-sm">
            New
          </div>
        )}
        
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleFavorite(product); }}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-sm transition-all hover:scale-110 ${
            favorite ? 'bg-kairali-brown text-white opacity-100' : 'bg-white/50 text-kairali-brown opacity-0 group-hover:opacity-100 hover:bg-white'
          }`}
        >
          <Heart size={16} fill={favorite ? "currentColor" : "none"} />
        </button>

        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <img 
            src={product.image} 
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img 
            src={product.hoverImage} 
            alt={`${product.name} lifestyle`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 transform ${isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
          />
        </Link>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 bg-gradient-to-t from-black/50 to-transparent flex justify-center">
          <Link to={`/product/${product.id}`} className="bg-white text-kairali-brown text-xs font-semibold uppercase tracking-widest py-3 px-8 hover:bg-kairali-brown hover:text-white transition-colors rounded-sm w-full text-center">
            View Product
          </Link>
        </div>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="font-serif text-lg text-kairali-brown hover:text-kairali-green transition-colors">
            {product.name}
          </Link>
          <span className="font-sans font-medium text-kairali-brown">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>
        <p className="text-sm text-kairali-brown/60 line-clamp-1">{product.description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;