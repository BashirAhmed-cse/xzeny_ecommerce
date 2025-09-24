import React from 'react'

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Shipping Policy</h1>

      {/* Main Content */}
      <div className="max-w-md text-center space-y-6">
        <p className="mb-4">
          Last updated: September 24, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Shipping Times</h2>
        <p>
          Orders are typically processed within 1-2 business days. Shipping
          times vary by location, averaging 3-7 business days.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Shipping Costs</h2>
        <p>
          Standard shipping is free on orders over $50. For orders below $50,
          a flat rate of $5 applies.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Tracking</h2>
        <p>
          Once your order is shipped, you will receive a tracking number via
          email. You can track your order{" "}
          <a href="/track-order" className="text-orange-500 underline">
            here
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Contact Us</h2>
        <p>
          For any questions about shipping, please contact us at{" "}
          <a href="mailto:info@stepprs.com" className="text-orange-500 underline">
            info@stepprs.com
          </a>
          .
        </p>
      </div>
    </div>
  )
}

export default page
