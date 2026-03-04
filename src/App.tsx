/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Clock, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  ChevronRight, 
  Calendar,
  Menu as MenuIcon, 
  X,
  ArrowRight
} from 'lucide-react';
import { MENU_ITEMS, EVENTS, MenuItem } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'Coffee'>('Coffee');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Store hours: 7 AM to 8 PM
  const OPENING_HOUR = 7;
  const CLOSING_HOUR = 20;
  const isStoreOpen = currentTime.getHours() >= OPENING_HOUR && currentTime.getHours() < CLOSING_HOUR;
x-6 py-2.5 rounded-full hover:bg-espresso-light transition-all">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X strokeWidth={2} /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 z-20 bg-cream border-t border-espresso/10 shadow-lg py-8 px-6 md:hidden"
          >
            {['Coffee', 'Tea', 'Pastries'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-2 text-espresso text-sm hover:bg-cream/50 transition-colors">
              {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="space-y-12 min-h-screen"
        >
font-medium hover:bg-espresso-light transition-all flex items-center justify-center gap-2 group">
                  Order Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-espresso/30 text-espresso py-4 px-8 hover:bg-espresso hover:text-cream transition-all flex items-center justify-center gap-2 group">
                  View Menu
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Store Status Card */}
              <div className="bg-espresso/5 rounded-2xl p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cream/70">Closes in</span>
                  <span className="font-serif text-xl text-cream">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cream/50" />
                  <span className="text-cream/70 text-xs">{isStoreOpen ? 'Open Now' : 'Opens 7AM'}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-cream/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">24 Aroma Street, Bristol, UK</span>
              </div>

lassName={`w-3 h-3 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="font-medium uppercase tracking-widest text-sm">
                  {isOpen ? 'Currently Open' : 'Currently Closed'}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {['Instagram', 'Facebook', 'Twitter'].map((social, index) => (
                <button key={index} className="w-8 h-8 rounded-full bg-espresso/10 hover:bg-espresso/20 transition-colors flex items-center justify-center">
                  {social === 'Instagram' ? <Instagram className="w-4 h-4 text-cream/70" /> :
                    social === 'Facebook' ? <Facebook className="w-4 h-4 text-cream/70" /> :
                    <Twitter className="w-4 h-4 text-cream/70" />}
              </button>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="bg-espresso text-cream py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-7 h-7 text-cream/80" />
            <span className="font-serif text-2xl font-semibold">Aura</span>
          </div>
          <p className="text-sm text-cream/60 max-w-xs">A space for those who slow down and savour life.</p>
        </div>utton>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {EVENTS.map((event) => (
                <div key={event.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-espresso/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-espresso/70" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-espresso text-base">{event.title}</h3>
                      <p className="text-sm text-espresso/60">
                        <span className="block text-xs text-espresso/40 mb-0.5">{event.date}</span>
                        {event.time}
                      </p>
                      <p className="text-sm text-espresso/80 line-clamp-2">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
