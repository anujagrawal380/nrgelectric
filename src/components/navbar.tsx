"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, X, Zap } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex h-20 items-center justify-between">
        <div className="flex items-center pl-2">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="NRG Auto" width={60} height={60} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 pr-2">
          <Link
            href="/"
            className="text-sm font-medium text-white hover:text-orange-400 py-2"
          >
            Home
          </Link>
          <Link
            href="/vehicles"
            className="text-sm font-medium text-white hover:text-orange-400 py-2"
          >
            Vehicles
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-white hover:text-orange-400 py-2"
          >
            About Us
          </Link>
          <Link
            href="/faqs"
            className="text-sm font-medium text-white hover:text-orange-400 py-2"
          >
            FAQs
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden pr-2">
            <Button variant="ghost" size="icon" className="text-white p-3">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black text-white w-[300px] sm:w-[350px] p-6"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu for NRG Auto
            </SheetDescription>
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-10 pt-4">
                <Link
                  href="/"
                  className="flex items-center space-x-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    alt="NRG Auto"
                    width={60}
                    height={60}
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-8 px-2">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-orange-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/vehicles"
                  className="text-lg font-medium hover:text-orange-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vehicles
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-orange-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About US
                </Link>
                <Link
                  href="/faqs"
                  className="text-lg font-medium hover:text-orange-400 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
