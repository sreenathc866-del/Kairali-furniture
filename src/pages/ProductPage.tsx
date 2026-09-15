import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronRight, Phone, MessageCircle, MapPin, Truck, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoriteContext';

const ProductPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  // Mock product data based on ID
  const product = {
    id: productId || '1',
    name: 'Aarav Lounge Sofa',
    price: 85000,
    description: 'A masterpiece of comfort featuring natural linen and a solid teak wood frame. The Aarav Lounge Sofa brings relaxed elegance to any living room, designed with deep seating and plush cushions for ultimate relaxation.',
    dimensions: 'W: 210cm x D: 95cm x H: 82cm',
    materials: 'Solid Teak Wood, High-Density Foam, 100% Natural Linen Blend',
    colors: ['Cream', 'Olive', 'Charcoal'],
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1540574163026-643ea20abc46?auto=format&fit=crop&q=80&w=1200'
    ]
  };

  // Convert for cart/favorites
  const productForCart = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.images[0],
    hoverImage: product.images[1]
  };

  const favorite = isFavorite(product.id);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Add multiple quantities if needed, but our cart context addToCart just increments by 1 if exists, or sets to 1.
    // For a real app, we'd add `quantity` to the action. For now, let's just add it multiple times or use the context.
    for (let i = 0; i < quantity; i++) {
      addToCart(productForCart);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-8 pb-24 bg-kairali-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs text-kairali-brown/60 uppercase tracking-wider mb-8">
          <Link to="/" className="hover:text-kairali-brown">Home</Link>
          <ChevronRight size={12} className="mx-2" />
          <Link to="/category/living-room" className="hover:text-kairali-brown">Living Room</Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-kairali-brown font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Images */}
          <div className="w-full lg:w-3/5 flex gap-4">
            <div className="flex flex-col gap-4 w-20 shrink-0">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden rounded-sm border-2 ${activeImage === idx ? 'border-kairali-green' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-grow aspect-[4/3] bg-kairali-beige/30 overflow-hidden rounded-sm relative">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-2/5 flex flex-col pt-4">
            <h1 className="font-serif text-4xl text-kairali-brown mb-2">{product.name}</h1>
            <p className="text-2xl font-sans text-kairali-brown mb-6">₹{product.price.toLocaleString('en-IN')}</p>
            
            <p className="text-kairali-brown/80 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8 border-t border-b border-kairali-beige py-6">
              <div className="mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-kairali-brown block mb-2">Available Colors</span>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button key={color} className="border border-kairali-beige px-4 py-2 text-sm text-kairali-brown hover:border-kairali-brown transition-colors">
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 mt-8">
                <div className="flex-1">
                  <span className="text-sm font-semibold uppercase tracking-wider text-kairali-brown block mb-2">Quantity</span>
                  <div className="flex items-center border border-kairali-beige h-12 w-32">
                    <button className="px-4 py-2 text-kairali-brown hover:bg-kairali-beige transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <input type="text" readOnly value={quantity} className="w-full text-center bg-transparent text-kairali-brown outline-none" />
                    <button className="px-4 py-2 text-kairali-brown hover:bg-kairali-beige transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-kairali-brown text-white h-14 uppercase tracking-widest text-sm font-semibold hover:bg-kairali-brown/90 transition-colors rounded-sm flex items-center justify-center"
                >
                  {added ? <><Check size={18} className="mr-2" /> Added</> : 'Add to Cart'}
                </button>
                <button 
                  onClick={() => toggleFavorite(productForCart)}
                  className={`w-14 h-14 border border-kairali-brown flex items-center justify-center transition-colors rounded-sm ${favorite ? 'bg-kairali-brown text-white' : 'text-kairali-brown hover:bg-kairali-beige'}`}
                >
                  <Heart size={20} fill={favorite ? "currentColor" : "none"} />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] h-12 uppercase tracking-widest text-xs font-semibold hover:bg-[#25D366]/10 transition-colors rounded-sm">
                  <MessageCircle size={16} /> WhatsApp Us
                </button>
                <button className="flex items-center justify-center gap-2 border border-kairali-brown text-kairali-brown h-12 uppercase tracking-widest text-xs font-semibold hover:bg-kairali-beige transition-colors rounded-sm">
                  <Phone size={16} /> Call to Enquire
                </button>
              </div>
            </div>

            {/* Local Features */}
            <div className="space-y-4 mb-10 text-sm text-kairali-brown/80 font-light border p-6 border-kairali-beige rounded-sm bg-white">
              <div className="flex items-start gap-3">
                <MapPin className="text-kairali-green mt-0.5" size={18} />
                <div>
                  <strong className="block font-medium text-kairali-brown">Available in Showroom</strong>
                  Visit us to test this product.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="text-kairali-green mt-0.5" size={18} />
                <div>
                  <strong className="block font-medium text-kairali-brown">Premium Delivery</strong>
                  White-glove delivery and assembly available.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-kairali-green mt-0.5" size={18} />
                <div>
                  <strong className="block font-medium text-kairali-brown">Quality Guaranteed</strong>
                  5-year structural warranty on all frames.
                </div>
              </div>
            </div>

            {/* Accordion Details */}
            <div className="border-t border-kairali-beige">
              <div className="py-4 border-b border-kairali-beige">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-kairali-brown mb-2">Dimensions</h4>
                <p className="text-sm font-light text-kairali-brown/80">{product.dimensions}</p>
              </div>
              <div className="py-4 border-b border-kairali-beige">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-kairali-brown mb-2">Materials</h4>
                <p className="text-sm font-light text-kairali-brown/80">{product.materials}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;