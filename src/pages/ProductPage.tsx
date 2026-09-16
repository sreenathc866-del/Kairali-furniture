import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ChevronRight, Phone, MessageCircle, MapPin, Truck, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoriteContext';

import { products } from '../data/products';

const ProductPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  // Find product by ID or use a fallback
  const baseProduct = products.find(p => p.id === productId);

  if (!baseProduct) {
    return (
      <div className="pt-24 pb-24 text-center min-h-screen">
        <h1 className="text-2xl text-kairali-brown">Product not found</h1>
        <Link to="/category/all" className="text-kairali-green mt-4 inline-block">Return to shop</Link>
      </div>
    );
  }

  const product = {
    ...baseProduct,
    dimensions: 'W: 210cm x D: 95cm x H: 82cm', // Mock details
    materials: 'Solid Teak Wood, High-Density Foam, 100% Natural Linen Blend',
    colors: baseProduct.colors || [
      'Cream', 'Olive', 'Charcoal', 'Navy Blue', 
      'Mustard', 'Terracotta', 'Sage Green', 'Blush Pink'
    ],
    images: baseProduct.images || [
      baseProduct.image,
      baseProduct.hoverImage
    ],
    colorImages: baseProduct.colorImages || {}
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  // Synchronize color buttons and thumbnail clicks
  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    if (product.colorImages && product.colorImages[color]) {
      const idx = product.images.indexOf(product.colorImages[color]);
      if (idx !== -1) setActiveImage(idx);
    }
  };

  const handleImageSelect = (idx: number) => {
    setActiveImage(idx);
    const img = product.images[idx];
    if (product.colorImages) {
      const colorEntry = Object.entries(product.colorImages).find(([_, url]) => url === img);
      if (colorEntry) {
        setSelectedColor(colorEntry[0]);
      }
    }
  };

  const colorMap: Record<string, string> = {
    'Cream': '#FDFBF7',
    'Olive': '#556B2F',
    'Charcoal': '#36454F',
    'Navy Blue': '#000080',
    'Mustard': '#FFDB58',
    'Terracotta': '#E2725B',
    'Sage Green': '#9DC183',
    'Blush Pink': '#FFB6C1',
    'Grey': '#808080'
  };
  
  // Check if we need to use a CSS overlay for color because no explicit image is provided
  const needsColorOverlay = selectedColor && (!product.colorImages || !product.colorImages[selectedColor]);

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
          <Link to={`/category/${product.category || 'all'}`} className="hover:text-kairali-brown">
            {product.category ? product.category.replace('-', ' ') : 'All Products'}
          </Link>
          <ChevronRight size={12} className="mx-2" />
          <span className="text-kairali-brown font-medium">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Images */}
          <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-row md:flex-col gap-4 w-full md:w-20 overflow-x-auto shrink-0 hide-scrollbar">
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleImageSelect(idx)}
                  className={`aspect-square md:w-20 shrink-0 overflow-hidden rounded-sm border-2 bg-white ${activeImage === idx ? 'border-kairali-green' : 'border-transparent'}`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <div className="flex-grow h-[350px] lg:h-[500px] w-full bg-white overflow-hidden rounded-sm relative">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
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
                <div className="flex flex-wrap gap-3">
                  {product.colors.map(color => (
                    <button 
                      key={color} 
                      onClick={() => handleColorSelect(color)}
                      className={`border px-4 py-2 text-sm transition-colors ${
                        selectedColor === color 
                          ? 'border-kairali-brown bg-kairali-brown text-white' 
                          : 'border-kairali-beige text-kairali-brown hover:border-kairali-brown'
                      }`}
                    >
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
                <a 
                  href={`https://wa.me/919497694866?text=Hi, I'm interested in the ${encodeURIComponent(product.name)} (₹${product.price.toLocaleString('en-IN')}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#25D366] text-[#25D366] h-12 uppercase tracking-widest text-xs font-semibold hover:bg-[#25D366]/10 transition-colors rounded-sm"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <a 
                  href="tel:+919497694866"
                  className="flex items-center justify-center gap-2 border border-kairali-brown text-kairali-brown h-12 uppercase tracking-widest text-xs font-semibold hover:bg-kairali-beige transition-colors rounded-sm"
                >
                  <Phone size={16} /> Call to Enquire
                </a>
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