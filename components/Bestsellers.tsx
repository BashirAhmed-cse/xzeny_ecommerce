import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge, Star } from 'lucide-react'
import Link from 'next/link'

const Bestsellers = () => {
  return (
    <div className=''>
   <section className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          The <span className="text-orange-500">Bestsellers</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Massage Insoles",
              rating: 4.9,
              reviews: 1012,
              price: 27.95,
              originalPrice: 42.0,
              image: "orange massage insoles",
              badge: "SALE",
            },
            {
              name: "Arch Support Flip Flops",
              rating: 4.8,
              reviews: 2089,
              price: 46.95,
              originalPrice: 70.0,
              image: "beige arch support flip flops",
              badge: "SALE",
            },
            {
              name: "Foot Leg Compression Massager",
              rating: 4.9,
              reviews: 751,
              price: 159.95,
              originalPrice: 229.0,
              image: "black foot massager device",
              badge: "SALE",
            },
            {
              name: "Massage Roller",
              rating: 4.8,
              reviews: 1203,
              price: 27.95,
              originalPrice: 42.0,
              image: "blue massage roller",
              badge: "SALE",
            },
          ].map((product, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow p-0">
              <Link href="/products">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=300&query=${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              </Link>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-orange-500">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </div>
  )
}

export default Bestsellers
