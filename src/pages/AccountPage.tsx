
import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Package, MapPin, Heart } from 'lucide-react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

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
            <button 
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 p-4 rounded-sm transition-colors ${activeTab === 'profile' ? 'bg-kairali-beige/50 text-kairali-brown font-medium' : 'hover:bg-kairali-beige/30 text-kairali-brown/70'}`}
            >
              <User size={20} />
              <span>Profile Information</span>
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center space-x-3 p-4 rounded-sm transition-colors ${activeTab === 'orders' ? 'bg-kairali-beige/50 text-kairali-brown font-medium' : 'hover:bg-kairali-beige/30 text-kairali-brown/70'}`}
            >
              <Package size={20} />
              <span>My Orders</span>
            </button>
            <button 
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center space-x-3 p-4 rounded-sm transition-colors ${activeTab === 'wishlist' ? 'bg-kairali-beige/50 text-kairali-brown font-medium' : 'hover:bg-kairali-beige/30 text-kairali-brown/70'}`}
            >
              <Heart size={20} />
              <span>Wishlist</span>
            </button>
            <button 
              onClick={() => setActiveTab('addresses')}
              className={`w-full flex items-center space-x-3 p-4 rounded-sm transition-colors ${activeTab === 'addresses' ? 'bg-kairali-beige/50 text-kairali-brown font-medium' : 'hover:bg-kairali-beige/30 text-kairali-brown/70'}`}
            >
              <MapPin size={20} />
              <span>Addresses</span>
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 p-4 rounded-sm transition-colors ${activeTab === 'settings' ? 'bg-kairali-beige/50 text-kairali-brown font-medium' : 'hover:bg-kairali-beige/30 text-kairali-brown/70'}`}
            >
              <Settings size={20} />
              <span>Settings</span>
            </button>
          </div>

          <div className="md:col-span-2 bg-white p-8 border border-kairali-beige/50 rounded-sm shadow-sm">
            {activeTab === 'profile' && (
              <>
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
              </>
            )}

            {activeTab === 'orders' && (
              <>
                <h2 className="text-xl font-serif text-kairali-brown mb-6">My Orders</h2>
                <div className="space-y-4">
                  <div className="border border-kairali-beige rounded-sm p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-kairali-brown">Order #ORD-1029</p>
                      <p className="text-sm text-kairali-brown/70">Placed on Sep 20, 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-kairali-brown">$1,299.00</p>
                      <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Delivered</span>
                    </div>
                  </div>
                  <div className="border border-kairali-beige rounded-sm p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-kairali-brown">Order #ORD-1035</p>
                      <p className="text-sm text-kairali-brown/70">Placed on Sep 24, 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-kairali-brown">$450.00</p>
                      <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Processing</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'wishlist' && (
              <>
                <h2 className="text-xl font-serif text-kairali-brown mb-6">My Wishlist</h2>
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Heart size={48} className="text-kairali-beige mb-4" />
                  <p className="text-kairali-brown/70 mb-6">Your wishlist is currently empty.</p>
                  <button className="bg-kairali-brown text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-kairali-brown/90 transition-colors rounded-sm">
                    Start Browsing
                  </button>
                </div>
              </>
            )}

            {activeTab === 'addresses' && (
              <>
                <h2 className="text-xl font-serif text-kairali-brown mb-6">Saved Addresses</h2>
                <div className="space-y-4">
                  <div className="border border-kairali-beige rounded-sm p-6 relative">
                    <span className="absolute top-6 right-6 text-xs font-bold uppercase text-kairali-brown bg-kairali-beige/30 px-2 py-1 rounded">Default</span>
                    <h3 className="font-medium text-kairali-brown mb-2">Home Address</h3>
                    <p className="text-kairali-brown/70 text-sm leading-relaxed mb-4">
                      John Doe<br />
                      123 Furniture Way<br />
                      Apartment 4B<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                    <div className="flex space-x-4">
                      <button className="text-sm font-medium text-kairali-brown hover:underline">Edit</button>
                      <button className="text-sm font-medium text-red-600 hover:underline">Delete</button>
                    </div>
                  </div>
                  <button className="w-full border-2 border-dashed border-kairali-beige text-kairali-brown/70 rounded-sm py-4 font-medium hover:bg-kairali-beige/10 transition-colors">
                    + Add New Address
                  </button>
                </div>
              </>
            )}

            {activeTab === 'settings' && (
              <>
                <h2 className="text-xl font-serif text-kairali-brown mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-kairali-brown mb-4">Email Preferences</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-kairali-brown border-kairali-beige rounded-sm focus:ring-kairali-brown" defaultChecked />
                        <span className="text-kairali-brown/80 text-sm">Receive order updates via email</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-kairali-brown border-kairali-beige rounded-sm focus:ring-kairali-brown" defaultChecked />
                        <span className="text-kairali-brown/80 text-sm">Receive promotional emails and offers</span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-kairali-beige/50" />
                  <div>
                    <h3 className="font-medium text-kairali-brown mb-4">Security</h3>
                    <button className="bg-transparent border border-kairali-brown text-kairali-brown px-6 py-2 uppercase tracking-widest text-xs font-medium hover:bg-kairali-brown hover:text-white transition-colors rounded-sm">
                      Change Password
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccountPage;
