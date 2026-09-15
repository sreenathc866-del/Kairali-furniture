import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: Props) => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

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
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-kairali-beige/50">
              <h2 className="font-serif text-2xl text-kairali-brown flex items-center">
                <ShoppingBag className="mr-3" size={24} /> 
                Your Cart ({cartItems.length})
              </h2>
              <button onClick={onClose} className="text-kairali-brown hover:text-kairali-green transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-kairali-brown/50">
                  <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
                  <p className="text-lg">Your cart is empty</p>
                  <button onClick={onClose} className="mt-6 text-kairali-green uppercase tracking-wider text-sm font-medium hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-kairali-beige/30 pb-6">
                    <div className="w-24 h-24 bg-kairali-beige rounded-sm overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-kairali-brown">{item.name}</h3>
                          <p className="text-xs text-kairali-brown/60 uppercase tracking-wider mt-1">?{item.price.toLocaleString()}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-kairali-brown/40 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-kairali-beige rounded-sm">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-kairali-brown hover:bg-kairali-cream transition-colors"><Minus size={14} /></button>
                          <span className="px-3 text-sm text-kairali-brown font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-kairali-brown hover:bg-kairali-cream transition-colors"><Plus size={14} /></button>
                        </div>
                        <span className="font-semibold text-kairali-brown">?{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 bg-kairali-cream/30 border-t border-kairali-beige/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-kairali-brown font-medium uppercase tracking-wider text-sm">Subtotal</span>
                  <span className="font-serif text-2xl text-kairali-brown">?{cartTotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-kairali-brown text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-kairali-brown/90 transition-colors rounded-sm">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
