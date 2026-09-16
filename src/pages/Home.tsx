import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import ProductCard, { type Product } from '../components/ProductCard';

import { products as dummyProducts } from '../data/products';
const categories = [
  { name: 'Living Room', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800', link: '/category/living-room' },
  { name: 'Bedroom', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800', link: '/category/bedroom' },
  { name: 'Dining Room', image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&q=80&w=800', link: '/category/dining' },
  { name: 'Home Office', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800', link: '/category/office' },
  { name: 'Storage', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800', link: '/category/storage' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800', link: '/category/decor' },
];

let hasSeenWelcome = false;

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(!hasSeenWelcome);

  useEffect(() => {
    // Disable scrolling while splash screen is active
    if (showWelcome) {
      document.body.style.overflow = "hidden";
      hasSeenWelcome = true;
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [showWelcome]);

  return (
    <div className="flex flex-col relative">
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-kairali-cream">
              <img 
                src="/welcome_bg.jpg" 
                alt="Welcome Background" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-white/20" />
            </div>

            <motion.h1 
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative z-10 font-serif text-4xl sm:text-5xl md:text-7xl tracking-widest text-center text-kairali-brown px-4"
            >
              KAIRALI
              <span className="block font-sans font-light text-lg sm:text-xl md:text-3xl mt-2 md:mt-4 opacity-80 uppercase tracking-[0.3em]">Furniture</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="relative z-10 mt-8 md:mt-12 text-kairali-brown/70 font-medium tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm px-4 text-center"
            >
              Welcome Home
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Living Room" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 container mx-auto px-6 md:px-12 flex flex-col justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white text-center flex flex-col items-center mx-auto"
          >
            <span className="text-sm md:text-base font-semibold uppercase tracking-widest mb-4 block text-white/90">
              A Legacy of Excellence
            </span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Crafting Beautiful Homes for Over 20 Years
            </h2>
            <p className="text-base md:text-lg font-light mb-10 text-white/90 leading-relaxed max-w-xl">
              Experience the perfect blend of timeless design and masterful craftsmanship, perfected over two decades of serving our community.
            </p>
            <Link 
              to="/category/all" 
              className="inline-flex items-center justify-center bg-white text-kairali-brown px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-kairali-cream transition-colors rounded-sm group"
            >
              Explore All Collections
              <ArrowRight size={18} className="ml-3 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. CATEGORY SECTION */}
      <section className="py-24 bg-kairali-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-kairali-brown text-center">Shop By Room</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.link} className="group relative block aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="font-serif text-2xl text-white mb-2">{category.name}</h3>
                    <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-sm uppercase tracking-widest font-medium mr-2">Explore</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED COLLECTION */}
      <section className="py-16 md:py-24 bg-kairali-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Featured Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-kairali-green mb-4">Made for Modern Living</span>
              <h2 className="font-serif text-4xl md:text-5xl text-kairali-brown mb-6 leading-tight">Designed Around You</h2>
              <p className="text-lg text-kairali-brown/80 mb-10 max-w-md font-light leading-relaxed">
                Discover timeless furniture that brings warmth, character and comfort into every room. Each piece is crafted with attention to detail and quality materials.
              </p>
              <div>
                <Link to="/category/all" className="inline-block border-b-2 border-kairali-brown pb-1 text-kairali-brown font-semibold uppercase tracking-widest text-sm hover:text-kairali-green hover:border-kairali-green transition-colors">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT SECTION - New Arrivals */}
      <section className="py-24 bg-kairali-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-kairali-brown">New Arrivals</h2>
            <Link to="/category/new" className="hidden md:inline-block border-b border-kairali-brown/30 pb-1 text-kairali-brown text-sm uppercase tracking-wider hover:border-kairali-brown transition-colors">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/category/new" className="inline-block border-b border-kairali-brown/30 pb-1 text-kairali-brown text-sm uppercase tracking-wider">
              View All New Arrivals
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SHOWROOM EXPERIENCE */}
      <section className="relative py-32 bg-kairali-brown text-kairali-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=2000" 
            alt="Showroom Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Experience Kairali Furniture</h2>
            <p className="text-lg font-light mb-12 opacity-90 leading-relaxed">
              Visit our showroom and discover furniture designed to bring comfort, character and timeless beauty into your home. Feel the textures, test the comfort, and let our experts guide you.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="text-kairali-green shrink-0" />
                <span className="text-left">Kazhiramukku, Athani-Edappal Road<br />Opp. Mother Plaza Auditorium</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-kairali-green shrink-0" />
                <span>+91 9995 705 860, +91 9995 705 866</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="text-kairali-green font-semibold">Open</div>
                <span>Mon-Sun: 10AM - 8PM</span>
              </div>
            </div>
            
            <a href="#" className="inline-block bg-white text-kairali-brown px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-kairali-beige transition-colors rounded-sm">
              Find Our Showroom
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. WHY KAIRALI */}
      <section className="py-24 bg-kairali-ivory">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="font-serif text-xl text-kairali-brown mb-4">Quality Craftsmanship</h3>
              <p className="text-kairali-brown/70 font-light text-sm leading-relaxed">Thoughtfully crafted furniture built for everyday living using premium materials.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="font-serif text-xl text-kairali-brown mb-4">Timeless Design</h3>
              <p className="text-kairali-brown/70 font-light text-sm leading-relaxed">Furniture that stays beautiful beyond trends, blending seamlessly into your space.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="font-serif text-xl text-kairali-brown mb-4">Personal Service</h3>
              <p className="text-kairali-brown/70 font-light text-sm leading-relaxed">Helping you find pieces that fit your space and lifestyle with expert advice.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <h3 className="font-serif text-xl text-kairali-brown mb-4">Trusted Local Showroom</h3>
              <p className="text-kairali-brown/70 font-light text-sm leading-relaxed">A physical furniture destination you can visit, experience, and trust.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. ABOUT SECTION */}
      <section className="py-24 bg-kairali-cream">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="w-full md:w-1/2 order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-kairali-brown mb-6">About Kairali Furniture</h2>
              <p className="text-kairali-brown/80 font-light text-lg mb-6 leading-relaxed">
                Founded on the belief that a home should be a sanctuary, Kairali Furniture curates collections that blend exceptional quality with timeless comfort.
              </p>
              <p className="text-kairali-brown/70 font-light mb-8 leading-relaxed">
                Every piece in our local showroom is carefully selected to offer you the best in design, durability, and value. We pride ourselves on personalized customer service, ensuring you find exactly what transforms your space into a beautiful home.
              </p>
              <Link to="/about" className="inline-flex items-center text-sm uppercase tracking-widest font-semibold text-kairali-brown hover:text-kairali-green transition-colors">
                Read Our Story <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-sm overflow-hidden bg-kairali-beige relative">
                <img 
                  src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=1000" 
                  alt="About Kairali Furniture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. INSTAGRAM / LOOKBOOK SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-kairali-brown mb-4">Get Inspired</h2>
          <a href="#" className="inline-flex items-center text-kairali-green hover:text-kairali-brown transition-colors">
            <FaInstagram size={18} className="mr-2" /> Follow us on Instagram
          </a>
        </div>
        
        <div className="flex overflow-hidden">
          {/* A simple scrolling gallery approach or grid for lookbook */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 w-full">
            <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" alt="Insta 1" />
            <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer" alt="Insta 2" />
            <img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" alt="Insta 3" />
            <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer hidden md:block" alt="Insta 4" />
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer hidden lg:block" alt="Insta 5" />
            <img src="https://images.unsplash.com/photo-1595526114101-17937dfa8183?auto=format&fit=crop&q=80&w=400" className="w-full aspect-square object-cover hover:opacity-80 transition-opacity cursor-pointer hidden lg:block" alt="Insta 6" />
          </div>
        </div>
      </section>

      {/* 11. CONTACT / CTA */}
      <section className="py-24 bg-kairali-beige text-kairali-brown">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Let's Create a Space You'll Love</h2>
            <p className="text-lg font-light mb-10 text-kairali-brown/80">
              Visit Kairali Furniture and discover pieces made for beautiful living. Our team is ready to help you find the perfect match for your home.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="bg-kairali-brown text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-kairali-brown/90 transition-colors rounded-sm">
                Contact Us
              </Link>
              <a href="#" className="bg-transparent border border-kairali-brown text-kairali-brown px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-kairali-brown hover:text-white transition-colors rounded-sm">
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;


