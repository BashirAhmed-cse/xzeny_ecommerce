import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Email Subscription Section */}
      <div className="py-16 text-center bg-gradient-to-r from-gray-800 to-black">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Subscribe to our emails
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join our email list for exclusive offers and the latest news.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-400 transition-all duration-200"
              />
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 border border-orange-500 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-orange-500/50">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-bold text-xl inline-block mb-4 shadow-lg">
                stepprs.
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Making foot care accessible and enjoyable for everyone through premium products 
                and expert guidance.
              </p>
              <div className="text-gray-400 space-y-1 text-sm">
                <p className="font-medium text-orange-400">Support Hours:</p>
                <p>Monday - Sunday | 8am - 11pm (GMT+1)</p>
                <p className="text-orange-300">info@stepprs.com</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Shop All', '/collections/products'],
                  ['New Arrivals', '/collections/new'],
                  ['Best Sellers', '/collections/best-sellers'],
                  ['Gift Cards', '/pages/gift-cards']
                ].map(([title, href]) => (
                  <li key={title}>
                    <Link href={href} className="hover:text-orange-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Support
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['About Us', '/pages/about-us'],
                  ['Track Order', '/pages/track-order'],
                  ['Shipping Info', '/pages/shipping'],
                  ['Returns & Exchanges', '/pages/returns']
                ].map(([title, href]) => (
                  <li key={title}>
                    <Link href={href} className="hover:text-orange-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-orange-500">
                Connect
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  ['Contact Us', '/pages/contact'],
                  ['FAQ', '/pages/faq'],
                  ['Size Guide', '/pages/size-guide'],
                  ['Blog', '/blog']
                ].map(([title, href]) => (
                  <li key={title}>
                    <Link href={href} className="hover:text-orange-400 transition-colors duration-200 flex items-center group">
                      <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="border-t border-gray-700 py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-2">Follow Us</h4>
              <p className="text-gray-300 text-sm">Join our community for foot care tips and updates</p>
            </div>
            
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 0 1-3.14 3.78 3.24 3.24 0 0 1-2.05-.55A3.33 3.33 0 0 1 7.31 8.46a3.82 3.82 0 0 1 .2-.51h1.05a6.07 6.07 0 0 0-.2.51 2.3 2.3 0 0 0 .86 1.81c.52.41 1.17.6 1.81.52a2.86 2.86 0 0 0 2.32-2.79V2.69h1.94a6.86 6.86 0 0 0 4.81 6.07 8.37 8.37 0 0 0 2.61.42v-2.49z' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  title={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region & Payment */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-8">
            {/* Region Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Region:</span>
              <select className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200">
                <option value="us">United States (USD $)</option>
                <option value="eu">Europe (EUR €)</option>
                <option value="uk">United Kingdom (GBP £)</option>
              </select>
            </div>

            {/* Payment Methods */}
          {/* Payment Methods with SVG Icons */}
<div className="flex items-center space-x-3 flex-wrap justify-center">
  {/* Visa */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#1A1F71" d="M9.6 15.6H7.5l1.5-9.2h2.1l-1.5 9.2zm5.9 0h-2.1l1.5-9.2h2.1l-1.5 9.2zm4.5 0h-2.1l.7-4.3-.9 1.1-1.9 3.2h-2.2l2.4-9.2h2.9l.7 4.3.9-1.1 1.9-3.2h2.2l-2.4 9.2zm-16.4 0H1.5l2.4-9.2h2.1L5.5 15.6z"/>
    </svg>
  </div>
  
  {/* Mastercard */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="9" cy="12" r="7" fill="#EB001B"/>
      <circle cx="15" cy="12" r="7" fill="#F79E1B"/>
      <path fill="#FF5F00" d="M12 15.5a7 7 0 0 1 0-7 7 7 0 0 1 0 7z"/>
    </svg>
  </div>
  
  {/* American Express */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-blue-800">AMEX</span>
  </div>
  
  {/* PayPal */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-blue-600">PayPal</span>
  </div>
  
  {/* Apple Pay */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-gray-800"> Pay</span>
  </div>
  
  {/* Google Pay */}
  <div className="w-12 h-8 bg-white rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-gray-800">G Pay</span>
  </div>
  
  {/* Discover */}
  <div className="w-12 h-8 bg-orange-500 rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-white">Discover</span>
  </div>
  
  {/* Shop Pay */}
  <div className="w-12 h-8 bg-black rounded flex items-center justify-center px-1 shadow-sm">
    <span className="text-xs font-bold text-white">shcp</span>
  </div>
</div>
          </div>

          {/* Copyright and Links */}
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 mb-4 text-sm">
              © 2025 Stepprs. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 text-xs text-gray-500">
              {[
                ['Privacy Policy', '/policies/privacy-policy'],
                ['Terms of Service', '/policies/terms-of-service'],
                ['Shipping Policy', '/policies/shipping-policy'],
                ['Refund Policy', '/policies/refund-policy'],
                ['Accessibility', '/policies/accessibility']
              ].map(([title, href]) => (
                <Link
                  key={title}
                  href={href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer