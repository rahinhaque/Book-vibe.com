import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#0A071E] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 font-serif text-2xl font-bold mb-6 hover:opacity-90 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6D28D9] to-[#3B82F6] rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              Book Vibe
            </Link>
            <p className="text-white/60 leading-relaxed mb-8">
              Your ultimate reading companion. Discover, track, and share your favorite stories from our curated collection of global literature.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#6D28D9] hover:border-[#6D28D9] transition-all duration-300">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-white/40 rounded-sm group-hover:bg-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Listed Books', 'Pages to Read', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-[#6D28D9] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Categories</h4>
            <ul className="space-y-4">
              {['Fiction', 'Classic', 'Fantasy', 'Romance', 'Adventure'].map((cat) => (
                <li key={cat}>
                  <a href={`#${cat.toLowerCase()}`} className="text-white/60 hover:text-[#3B82F6] transition-colors">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Newsletter</h4>
            <p className="text-white/60 mb-6">Subscribe to get the latest updates and book recommendations.</p>
            <form className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6D28D9] transition-colors"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Book Vibe. All rights reserved. Built with ❤️ for readers.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;