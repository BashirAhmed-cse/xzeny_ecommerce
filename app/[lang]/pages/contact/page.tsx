import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

      {/* Contact Info */}
      <div className="text-center max-w-md mb-8">
        <p className="mb-2">
          Have a question, comment, or need assistance? We're here to help! Our
          dedicated customer support team is ready to assist you with anything
          from product information to order inquiries. Feel free to reach out to
          us through our contact form below or by email.
        </p>
        <p className="mb-2">Monday - Sunday | 8am - 11pm (GMT+1)</p>
        <p className="text-orange-500">Email: info@stepprs.com</p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact form</h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Comment"
            className="w-full p-2 border border-gray-300 rounded h-24"
          ></textarea>
          <Button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}

export default page
