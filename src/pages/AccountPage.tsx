import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Package, MapPin, Heart } from 'lucide-react';

const AccountPage = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-24 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-serif text-3xl md:text-5xl text-kairali-brown mb-12">My Account</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-2">
            <button className="w-full flex items-center space-x-3 p-4 bg-kairali-beige/50 text-kairali-brown font-medium rounded-sm">
              <User size={20} />
              <span>Profile Information</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 hover:bg-kairali-beige/30 text-kairali-brown/70 rounded-sm transition-colors">
              <Package size={20} />
              <span>My Orders</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 hover:bg-kairali-beige/30 text-kairali-brown/70 rounded-sm transition-colors">
              <Heart size={20} />
              <span>Wishlist</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 hover:bg-kairali-beige/30 text-kairali-brown/70 rounded-sm transition-colors">
              <MapPin size={20} />
              <span>Addresses</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 hover:bg-kairali-beige/30 text-kairali-brown/70 rounded-sm transition-colors">
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-8 border border-kairali-beige/50 rounded-sm shadow-sm">
            <h2 className="text-xl font-serif text-kairali-brown mb-6">Profile Details</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-kairali-brown/70 mb-2">First Name</label>
                  <div className="p-3 bg-kairali-cream/30 border border-kairali-beige text-kairali-brown rounded-sm">John</div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-kairali-brown/70 mb-2">Last Name</label>
                  <div className="p-3 bg-kairali-cream/30 border border-kairali-beige text-kairali-brown rounded-sm">Doe</div>
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-kairali-brown/70 mb-2">Email Address</label>
                <div className="p-3 bg-kairali-cream/30 border border-kairali-beige text-kairali-brown rounded-sm">john.doe@example.com</div>
              </div>
              <button className="bg-kairali-brown text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-kairali-brown/90 transition-colors rounded-sm mt-4">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountPage;
