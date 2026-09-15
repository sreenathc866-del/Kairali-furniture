import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-kairali-brown text-kairali-cream pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="text-2xl md:text-3xl font-serif tracking-wide block">
              KAIRALI <span className="font-sans font-light text-xl md:text-2xl opacity-80">FURNITURE</span>
            </Link>
            <p className="text-kairali-beige/80 text-sm leading-relaxed max-w-sm">
              Thoughtfully designed furniture for beautiful, comfortable living. Bringing warmth, character and timeless beauty into your home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-kairali-green transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-kairali-green transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-kairali-green transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-kairali-beige">Shop</h4>
            <ul className="space-y-4 text-sm text-kairali-beige/80">
              <li><Link to="/category/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/category/living-room" className="hover:text-white transition-colors">Living Room</Link></li>
              <li><Link to="/category/bedroom" className="hover:text-white transition-colors">Bedroom</Link></li>
              <li><Link to="/category/dining" className="hover:text-white transition-colors">Dining</Link></li>
              <li><Link to="/category/office" className="hover:text-white transition-colors">Office</Link></li>
              <li><Link to="/category/storage" className="hover:text-white transition-colors">Storage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-kairali-beige">About</h4>
            <ul className="space-y-4 text-sm text-kairali-beige/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/showroom" className="hover:text-white transition-colors">Showroom</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-kairali-beige">Visit Us</h4>
            <ul className="space-y-4 text-sm text-kairali-beige/80">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-kairali-green" />
                <span>Kazhiramukku, Athani-Edappal Road<br />Opp. Mother Plaza Auditorium</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-kairali-green" />
                <span>+91 9995 705 860, +91 9995 705 866</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-kairali-green" />
                <span>contact@kairalifurniture.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-kairali-beige/60">
          <p>&copy; {new Date().getFullYear()} Kairali Furniture. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
