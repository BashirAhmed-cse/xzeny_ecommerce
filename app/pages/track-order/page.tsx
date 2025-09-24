import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      {/* Header */}


      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Track your order</h1>
        <p className="max-w-md mb-6">
          Track the status of your order by simply entering the tracking number
          we provided in your confirmation email. Stay up-to-date with the latest
          information on your delivery and ensure a hassle-free experience.
          Thank you for choosing our services! If you have any questions don’t
          hesitate to contact us.
        </p>

        {/* Tracking Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Tracking number"
            className="w-full max-w-md p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Track Order Button */}
        <Button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
          Track Order
        </Button>

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-2">Have a Question?</h2>
          <p className="mb-4">Click the button below and send us a message.</p>
          <Button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default page
