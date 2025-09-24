import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      {/* Main Content */}
      <div className="max-w-md text-center space-y-6">
        <p className="mb-4">
          Last updated: September 24, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound
          by these Terms of Service. If you do not agree, please do not use our
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Use of Service</h2>
        <p>
          You may use our services only for lawful purposes and in accordance
          with these terms. You are responsible for maintaining the
          confidentiality of your account.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Payment and Refunds</h2>
        <p>
          All purchases are subject to our refund policy, available{" "}
          <a href="/refund-policy" className="text-orange-500 underline">
            here
          </a>
          . Payments are processed securely, and no refunds are issued outside
          the 90-day window unless specified.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Contact Us</h2>
        <p>
          For any questions about these terms, please contact us at{" "}
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
