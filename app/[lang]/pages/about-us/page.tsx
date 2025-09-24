import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      {/* Our Story Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Welcome to Stepprs, where finding the most innovative ways to
          revolutionize foot comfort is the cornerstone of our business. As a
          small yet motivated company specializing in insoles, we believe
          passionately in helping people live free from pain.
        </p>
        <p>
          We feel quality is a right, not a luxury, and after years of research
          and carefully tested prototypes, we've finally perfected the ultimate
          insole for everyone.
        </p>
      </div>

      {/* Quality and Innovation Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quality and Innovation</h2>
        <p>
          In addition to providing premium insoles at the highest standards, our
          team is consistently looking for ways to improve and always listening
          to our customers' feedback. We're always keeping an eye on the latest
          trends and innovations as we push to the forefront of the insole
          industry.
        </p>
      </div>

      {/* Our Customers Section */}
      <div className="max-w-2xl text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Customers</h2>
        <p>
          We govern ourselves by the simple truth that our customers and their
          interests are our top priority, and through our products, we work hard
          to meet their needs and beyond. We've had the privilege of serving
          thousands of satisfied customers worldwide, and are proud to be a
          leader in the insole space. We hope you enjoy our products as much as
          we enjoy creating them for you.
        </p>
      </div>

      {/* Signature */}
      <p className="text-sm italic mt-4">- The Stepprs Team</p>
    </div>
  )
}

export default page
