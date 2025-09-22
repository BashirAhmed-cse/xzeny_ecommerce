"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, X, Heart, Trash2, ChevronRight, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

// This is a single-file React component. All logic, components,
// and styling are contained within this file. The parent component
// is expected to provide the necessary context or props.

// Main component, must be the default export
export default function App() {
  const [timeLeft, setTimeLeft] = useState(137); // 2 minutes 17 seconds
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (isSheetOpen) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isSheetOpen]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleOpenChange = (open) => {
    setIsSheetOpen(open);
    if (open) {
      setTimeLeft(137); // Reset timer when opened
    }
  };

  return (
    <Sheet onOpenChange={handleOpenChange}>
      {/* Trigger = Shopping Cart button */}
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center font-semibold">
            1
          </span>
        </button>
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent side="right" className="w-[400px] sm:w-[450px] p-0 flex flex-col font-sans">
        {/* Header */}
        <SheetHeader className="flex flex-row items-center justify-between px-4 py-3 border-b">
          <SheetTitle className="text-lg font-bold">Cart • 1 items</SheetTitle>
          <SheetClose asChild>
            
          </SheetClose>
        </SheetHeader>

        {/* Progress bar discount section */}
        <div className="px-4 py-3 border-b">
          <p className="text-sm font-medium text-center text-gray-700">
            You’re 1 away from a <span className="text-orange-500 font-semibold">40% discount!</span>
          </p>
          <div className="relative flex items-center justify-between mt-4">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200">
              <div className="h-full bg-orange-500 w-[50%]" />
            </div>
            {/* Progress indicators with percentages */}
            <div className="flex w-full justify-between z-10">
              {['40%', '50%', '60%'].map((percent, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center ${index === 0 ? 'border-orange-500' : 'border-gray-300'}`}>
                    <ShoppingBag size={16} className={`${index === 0 ? 'text-orange-500' : 'text-gray-400'}`} />
                  </div>
                  <span className="mt-1 text-xs font-semibold text-gray-500">{percent} OFF</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart items */}
        <div className="px-4 py-4 flex-1 overflow-y-auto">
          <div className="flex items-start space-x-4 border rounded-lg p-2 relative">
            <div className="relative">
              {/* Product Image and 'Sale' Badge */}
              <img
                src="https://placehold.co/80x80/EFEFEF/text?text=Product"
                alt="Product"
                width={80}
                height={80}
                className="rounded-md border"
              />
              <span className="absolute top-1 left-1 bg-red-500 text-white text-[10px] font-bold px-1 py-[1px] rounded">
                SALE
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Full Leg Compression Massager</h3>
              <p className="text-sm text-gray-500">US</p>
              <div className="flex items-center space-x-2 mt-2 border rounded-md w-fit">
                <button className="px-2 py-1 text-gray-600">-</button>
                <span>1</span>
                <button className="px-2 py-1 text-gray-600">+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 line-through">$225.00</p>
              <p className="text-lg font-semibold text-orange-500">$145.00</p>
              <button className="text-gray-400 hover:text-red-500 absolute top-2 right-2">
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 text-center mt-6 text-xs font-medium text-gray-700">
            <div>
              <span className="text-xl">🚚</span>
              <p className="mt-1">Tracked <br/> Insured Shipping</p>
            </div>
            <div>
              <Heart className="h-6 w-6 text-red-500 mx-auto" />
              <p className="mt-1">200k+ Happy <br/> Customers</p>
            </div>
            <div>
              <span className="text-xl">💰</span>
              <p className="mt-1">100% Money <br/> Back Guarantee</p>
            </div>
          </div>
        </div>

        {/* Timer Section */}
        <div className="bg-gray-900 text-white text-center py-2 text-sm font-medium">
          Cart reserved for <span className="font-bold">{formatTime(timeLeft)}</span> more minutes!
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span>You Save</span>
            <span className="text-orange-500 font-bold">$80.00</span>
          </div>
          <div className="flex justify-between text-xl font-bold mt-1">
            <span>Total</span>
            <span>$145.00</span>
          </div>

          <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg font-bold text-lg shadow hover:shadow-lg transition-all">
            CHECKOUT
          </button>

          {/* Payment Icons */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/shop-pay.png" alt="Shop Pay" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="Apple Pay" className="h-6 w-auto" />
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="Google Pay" className="h-6 w-auto" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}