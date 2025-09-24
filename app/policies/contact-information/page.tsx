import React from 'react'
import { Button } from "@/components/ui/button";

const page = () => {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6">Contact Information</h1>

      {/* Main Content */}
      <div className="max-w-md text-center space-y-6">
        <p className="mb-4">
          Last updated: September 24, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-6">Customer Support</h2>
        <p>
          Our team is available to assist you with any questions or concerns.
        </p>
        <p>Email: 
          <a href="mailto:info@stepprs.com" className="text-orange-500 underline">
            info@stepprs.com
          </a>
        </p>
        <p>Phone: +1-800-555-0123</p>
        <p>Hours: Monday - Sunday, 8am - 11pm (GMT+1)</p>

        <h2 className="text-2xl font-semibold mt-6">Mailing Address</h2>
        <p>
          Stepprs Inc.<br />
          123 Comfort Lane<br />
          Suite 100<br />
          Boston, MA 02108<br />
          USA
        </p>

        <h2 className="text-2xl font-semibold mt-6">Follow Us</h2>
        <p>
          Stay updated with the latest news and offers:
          <br />
          <a href="https://twitter.com/stepprs" className="text-orange-500 underline">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://facebook.com/stepprs" className="text-orange-500 underline">
            Facebook
          </a>
        </p>
      </div>
    </div>
  )
}

export default page
