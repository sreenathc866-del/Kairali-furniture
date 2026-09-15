import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: Props) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real app, this would route to a search results page
      console.log('Searching for:', query);
      onClose();
      navigate('/category/all'); // Dummy redirect
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-kairali-cream/95 backdrop-blur-md flex flex-col pt-24 px-6 md:px-12"
        >
          <button onClick={onClose} className="absolute top-8 right-6 md:right-12 text-kairali-brown hover:text-kairali-green transition-colors">
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="w-full max-w-4xl mx-auto mt-12 md:mt-24">
            <h2 className="font-serif text-2xl md:text-4xl text-kairali-brown mb-8 text-center">What are you looking for?</h2>
            
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for furniture, categories..." 
                className="w-full bg-transparent border-b-2 border-kairali-brown/30 text-xl md:text-3xl text-kairali-brown py-4 pl-12 focus:outline-none focus:border-kairali-green transition-colors placeholder:text-kairali-brown/30"
                autoFocus
              />
              <Search size={28} className="absolute left-0 top-1/2 -translate-y-1/2 text-kairali-brown/50" strokeWidth={1.5} />
            </form>
            
            <div className="mt-12 text-center text-kairali-brown/70">
              <p className="text-sm uppercase tracking-wider mb-6">Popular Searches</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Sofas', 'Dining Tables', 'Chairs', 'Beds', 'Storage'].map(term => (
                  <button 
                    key={term} 
                    onClick={() => { setQuery(term); }}
                    className="px-6 py-2 border border-kairali-brown/20 rounded-full hover:border-kairali-green hover:text-kairali-green transition-colors text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
