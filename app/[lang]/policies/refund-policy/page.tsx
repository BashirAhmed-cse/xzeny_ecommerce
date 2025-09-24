import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Refund policy</h1>

      {/* Main Content */}
      <div className="max-w-md text-center space-y-6">
        <p>
          We have a 90-day money back guarantee policy, which means you have 90
          days after receiving your item to request a refund.
        </p>
        <p className="text-orange-500">
          To start a refund, you can contact us at{" "}
          <a href="mailto:info@stepprs.com" className="underline">
            info@stepprs.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6">Damages and issues</h2>
        <p>
          Please inspect your order upon reception and contact us immediately if
          the item is defective, damaged or if you received the wrong item, so
          that we can evaluate the issue and make it right.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Refunds</h2>
        <p>
          We will notify you once we've refunded you. You will receive the
          refund on your original payment method within 10 business days.
          Please remember it can take some time for your bank or credit card
          company to process and post the refund too.
        </p>
        <p>
          If more than 15 business days have passed since we've approved your
          return, please contact us at{" "}
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
