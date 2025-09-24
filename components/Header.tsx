"use client";

import { ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import CartDrawer from "./CartDrawer";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-gray-100">
                  <Menu className="h-6 w-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <Link href="/" passHref>
                    <SheetTitle className="text-lg font-bold text-orange-500">
                      stepprs.
                    </SheetTitle>
                  </Link>
                  <SheetClose asChild>
                    <button className="p-2 rounded-md hover:bg-gray-100">
                      <X className="h-5 w-5 text-gray-700" />
                    </button>
                  </SheetClose>
                </div>

                {/* Navigation links */}
                <nav className="flex flex-col space-y-2 mt-4 px-4 text-gray-700 text-base">
                  {/* Dropdown Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center justify-between w-full px-2 py-2 rounded hover:bg-gray-100">
                      Shop All
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuItem asChild>
                        <Link href="/collections/products">Shop All</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#">Insoles</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#">Footwear</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#">Massagers</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#">Pads</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="#">Socks</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Link href="/pages/about-us" className="block px-2 py-2 rounded hover:bg-gray-100">
                    About Us
                  </Link>
                  <Link href="/pages/track-order" className="block px-2 py-2 rounded hover:bg-gray-100">
                    Track Order
                  </Link>
                  <Link href="/pages/contact" className="block px-2 py-2 rounded hover:bg-gray-100">
                    Help
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-sm text-gray-600 font-medium items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-orange-500 transition-colors">
                Shop All
                <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/collections/products">Shop All</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Insoles</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Footwear</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Massagers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Pads</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="#">Socks</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pages/about-us" className="hover:text-orange-500 transition-colors">
              About Us
            </Link>
            <Link href="/pages/track-order" className="hover:text-orange-500 transition-colors">
              Track Order
            </Link>
            <Link href="/pages/contact" className="hover:text-orange-500 transition-colors">
              Help
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link
              href="/"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all"
              passHref
            >
              stepprs.
            </Link>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-4">
            <CartDrawer/>
          </div>
        </div>
      </div>
    </header>
  );
}
