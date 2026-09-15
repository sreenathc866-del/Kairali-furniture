
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2 } from 'lucide-react';
import { useFavorites } from '../context/FavoriteContext';
import { useCart } from '../context/CartContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FavoriteSidebar = ({ isOpen, onClose }: Props) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart(item);
    toggleFavorite(item);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-kairali-beige/50">
              <h2 className="font-serif text-2xl text-kairali-brown flex items-center">
                <Heart className="mr-3" size={24} /> 
                Saved Items ({favorites.length})
              </h2>
              <button onClick={onClose} className="text-kairali-brown hover:text-kairali-green transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {favorites.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-kairali-brown/50">
                  <Heart size={48} strokeWidth={1} className="mb-4" />
                  <p className="text-lg">No saved items yet</p>
                  <button onClick={onClose} className="mt-6 text-kairali-green uppercase tracking-wider text-sm font-medium hover:underline">
                    Explore Collection
                  </button>
                </div>
              ) : (
                favorites.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-kairali-beige/30 pb-6 group">
                    <div className="w-20 h-20 bg-kairali-beige rounded-sm overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-kairali-brown text-sm">{item.name}</h3>
                          <p className="text-xs font-semibold text-kairali-brown mt-1">?{item.price.toLocaleString()}</p>
                        </div>
                        <button onClick={() => toggleFavorite(item)} className="text-kairali-brown/40 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => handleMoveToCart(item)}
                        className="mt-3 text-xs uppercase tracking-wider font-medium text-kairali-green hover:text-kairali-brown transition-colors self-start"
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FavoriteSidebar;
