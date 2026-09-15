import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoriteContext';
import SearchOverlay from './SearchOverlay';
import CartSidebar from './CartSidebar';
import FavoriteSidebar from './FavoriteSidebar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  
  const { cartItems } = useCart();
  const { favorites } = useFavorites();

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'New Arrivals', path: '/category/new' },
    { name: 'Living Room', path: '/category/living-room' },
    { name: 'Bedroom', path: '/category/bedroom' },
    { name: 'Dining', path: '/category/dining' },
    { name: 'Office', path: '/category/office' },
    { name: 'Storage', path: '/category/storage' },
  ];

  return (
    <>
      <div className="bg-kairali-brown text-kairali-cream text-xs text-center py-2 tracking-widest uppercase font-medium">
        Premium Furniture – Crafted for Beautiful Living
      </div>
      
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-kairali-cream/90 backdrop-blur-md shadow-sm' : 'bg-kairali-cream'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <div className="flex md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-kairali-brown">
              <Menu size={24} />
            </button>
          </div>

          <Link to="/" className="text-2xl md:text-3xl font-serif text-kairali-brown tracking-wide shrink-0">
            KAIRALI <span className="font-sans font-light text-xl md:text-2xl opacity-80">FURNITURE</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-wider hover:text-kairali-green transition-colors ${location.pathname === link.path ? 'text-kairali-green font-medium' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-5 text-kairali-brown">
            <button onClick={() => setIsSearchOpen(true)} className="hover:text-kairali-green transition-colors"><Search size={20} strokeWidth={1.5} /></button>
            <button onClick={() => setIsFavoritesOpen(true)} className="hover:text-kairali-green transition-colors relative">
              <Heart size={20} strokeWidth={1.5} />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-kairali-green text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-kairali-green transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-kairali-green text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </button>
            <button onClick={() => navigate('/account')} className="hidden md:block hover:text-kairali-green transition-colors"><User size={20} strokeWidth={1.5} /></button>
          </div>

        </div>
      </header>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <FavoriteSidebar isOpen={isFavoritesOpen} onClose={() => setIsFavoritesOpen(false)} />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-kairali-cream flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-kairali-beige">
              <Link to="/" className="text-2xl font-serif text-kairali-brown tracking-wide" onClick={() => setMobileMenuOpen(false)}>
                KAIRALI
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-kairali-brown">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col p-8 space-y-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-lg text-kairali-brown uppercase tracking-wider font-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 mt-8 border-t border-kairali-beige flex flex-col space-y-4">
                <Link to="/about" className="text-kairali-brown/80" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                <Link to="/contact" className="text-kairali-brown/80" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                <Link to="/account" className="text-kairali-brown/80" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;