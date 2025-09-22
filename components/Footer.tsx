import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-black text-white">
        {/* Email Subscription Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our emails</h2>
          <p className="text-gray-400 mb-8">Join our email list for exclusive offers and the latest news.</p>

          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-l-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-transparent border border-gray-600 border-l-0 rounded-r-lg hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo */}
              <div>
                <div className="bg-orange-500 text-white px-3 py-2 rounded font-bold text-lg inline-block">
                  stepprs.
                </div>
              </div>

              {/* Menu */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Menu</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Shop All
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Track Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stepprs Info */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Stepprs</h3>
                <p className="text-gray-400 mb-4">
                  Our mission is to make foot care accessible and enjoyable for everyone.
                </p>
                <div className="text-gray-400">
                  <p className="font-medium">Support: Monday - Sunday | 8am - 11pm (GMT+1)</p>
                  <p>info@stepprs.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017-.001z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 0 1-3.14 3.78 3.24 3.24 0 0 1-2.05-.55A3.33 3.33 0 0 1 7.31 8.46a3.82 3.82 0 0 1 .2-.51h1.05a6.07 6.07 0 0 0-.2.51 2.3 2.3 0 0 0 .86 1.81c.52.41 1.17.6 1.81.52a2.86 2.86 0 0 0 2.32-2.79V2.69h1.94a6.86 6.86 0 0 0 4.81 6.07 8.37 8.37 0 0 0 2.61.42v-2.49z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Country/Region Selector */}
              <div>
                <select className="bg-transparent border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-orange-500">
                  <option value="us" className="bg-black">
                    United States (USD $)
                  </option>
                </select>
              </div>

              {/* Payment Methods */}
              <div className="flex items-center space-x-2 flex-wrap justify-center">
                <img src="/visa-logo-generic.png" alt="Amazon" className="h-8 bg-white rounded px-1" />
                <img src="/american-express-logo.png" alt="American Express" className="h-8 bg-white rounded px-1" />
                <img src="/apple-pay-logo.png" alt="Apple Pay" className="h-8 bg-white rounded px-1" />
                <img src="/mastercard-logo.png" alt="Mastercard" className="h-8 bg-white rounded px-1" />
                <img src="/maestro-logo.png" alt="Maestro" className="h-8 bg-white rounded px-1" />
                <img src="/paypal-logo.png" alt="PayPal" className="h-8 bg-white rounded px-1" />
                <img src="src/assets/google-pay.png" alt="Google Pay" className="h-8 bg-white rounded px-1" />
              </div>
            </div>

            {/* Copyright and Links */}
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p className="mb-4">© 2025, Stepprs</p>
              <div className="flex flex-wrap justify-center space-x-4 text-xs">
                <a href="#" className="hover:text-white transition-colors">
                  Refund policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Contact information
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
