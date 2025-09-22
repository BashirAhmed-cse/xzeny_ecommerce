import React from 'react'
import { Button } from './ui/button'
import { Star } from 'lucide-react'

const Trust = () => {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/professional-person-in-medical-office-with-orange-.jpg"
              alt="Professional with product"
              className="rounded-2xl w-full h-auto"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">
              MADE FOR YOU,
              <br />
              ENGINEERED &{" "}
              <span className="text-orange-500">
                TRUSTED
                <br />
                BY EXPERTS
              </span>
            </h2>

            <p className="text-gray-600 mb-6">
              Stepprs has reimagined <strong>everyday comfort</strong> by creating a well-tested and research-backed
              range of footcare solutions.
            </p>

            <p className="text-gray-600 mb-8">
              With a strong focus on innovation and <strong>quality of life improvements</strong>, Stepprs is a leader
              in pain-relief and innovative footcare products.
            </p>

            <p className="text-gray-600 mb-8">What are you waiting for?</p>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg mb-6">Shop Now</Button>

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
              ))}
              <span className="text-sm text-gray-600 ml-2">1000+ Satisfied Customers</span>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Trust
