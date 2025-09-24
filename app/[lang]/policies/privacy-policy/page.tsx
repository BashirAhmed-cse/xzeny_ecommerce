import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      {/* Main Content */}
      <div className="max-w-md text-center space-y-6">
        <p className="mb-4">
          Last updated: September 24, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <p>
          We collect information you provide directly, such as name, email, and
          payment details, when you use our services or make a purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p>
          We use your information to process orders, improve our services, and
          communicate with you about your account or products.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your data, but no method is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Contact Us</h2>
        <p>
          For any questions about this privacy policy, please contact us at{" "}
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
