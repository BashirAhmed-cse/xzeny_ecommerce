import React from 'react'

const FooterTop = () => {
  return (
    <section className="bg-gray-50 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            READY TO EXPERIENCE ULTIMATE <span className="text-orange-500">FOOT CARE?</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8">Step up into the world's best footcare range.</p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 mb-12">
            SHOP BESTSELLERS
          </button>

          {/* Payment Methods */}
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2">
            <img src="/visa-logo-generic.png" alt="Visa" className="h-8" />
            <img src="/mastercard-logo.png" alt="Mastercard" className="h-8" />
            <img src="/american-express-logo.png" alt="American Express" className="h-8" />
            <img src="/maestro-logo.png" alt="Maestro" className="h-8" />
            <img src="/apple-pay-logo.png" alt="Apple Pay" className="h-8" />
            <img src="src/assets/google-pay.png" alt="Google Pay" className="h-8" />
            <img src="/paypal-logo.png" alt="PayPal" className="h-8" />
          </div>
        </div>
      </section>
  )
}

export default FooterTop
