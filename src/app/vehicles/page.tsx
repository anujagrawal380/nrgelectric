"use client";
// src/app/vehicles/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Battery,
  Zap,
  Clock,
  ArrowRight,
  Shield,
  Filter,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import { vehicles } from "@/data/vehicles";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { ActionButton } from "@/components/ui/ActionButton";
import { motion } from "framer-motion";

// Vehicle hero images for carousel
const vehicleHeroImages = [
  { src: "/vyom.png", alt: "Vyom electric scooter" },
  { src: "/vajra-side.png", alt: "Vajra electric scooter" },
  { src: "/nandi-pink.png", alt: "Nandi electric scooter" },
  { src: "/bahubali.png", alt: "Bahubali electric scooter" },
];

export default function VehiclesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted for client-side rendering with framer-motion
    setMounted(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === vehicleHeroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every second

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* Hero with Image Carousel */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-[60vh] min-h-[500px] w-full bg-gradient-to-r from-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/50 z-0">
          {vehicleHeroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-50 mix-blend-overlay"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <motion.div
          variants={staggerContainer}
          className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            variants={itemVariant}
            className="text-5xl font-bold text-white sm:text-6xl md:text-7xl tracking-tight"
          >
            Our <span className="text-orange-500">Vehicles</span>
          </motion.h1>
          <motion.p
            variants={itemVariant}
            className="mx-auto mt-8 max-w-2xl text-xl text-gray-200 leading-relaxed"
          >
            Explore our lineup of premium electric vehicles designed for every
            lifestyle. Performance, range, and sustainability in perfect
            harmony.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Vehicles Grid View */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => {
              // Get the first and last variants for price range
              const firstVariant = vehicle.variants[0];
              const lastVariant = vehicle.variants[vehicle.variants.length - 1];

              // Calculate price range
              const priceRange =
                firstVariant.price !== lastVariant.price
                  ? `₹${firstVariant.price} - ₹${lastVariant.price}`
                  : `₹${firstVariant.price}`;

              return (
                <motion.div
                  custom={index}
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                  id={vehicle.id}
                  key={vehicle.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden group">
                    <Image
                      src={vehicle.imageSrc || "/placeholder.svg"}
                      alt={`${vehicle.name} electric vehicle`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4 gap-5">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {vehicle.name}
                        </h3>
                        <p className="text-orange-500 font-medium">
                          {vehicle.category}
                        </p>
                      </div>
                      <div className="bg-orange-100 rounded-full px-4 py-2">
                        <p className="text-md font-bold text-orange-600 whitespace-nowrap">
                          {priceRange}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {vehicle.description}
                    </p>

                    <div className="flex justify-between mb-6 bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center">
                        <Battery className="h-6 w-6 text-orange-500 mr-2" />
                        <div>
                          <p className="font-semibold">{lastVariant.range}</p>
                          <p className="text-xs text-gray-500">Range</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-6 w-6 text-orange-500 mr-2" />
                        <div>
                          <p className="font-semibold">{lastVariant.voltage}</p>
                          <p className="text-xs text-gray-500">Voltage</p>
                        </div>
                      </div>
                    </div>

                    {/* Fixed button spacing in mobile view */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                      <ActionButton
                        href={`/vehicles/${vehicle.id}`}
                        text="View Details"
                        variant="white"
                        showArrow={false}
                        className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full sm:w-auto"
                      />
                      <ActionButton
                        href="tel:+918062177621"
                        text="Contact Sales"
                        variant="orange"
                        className="w-full sm:w-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Featured Vehicle */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-white"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured <span className="text-orange-500">Vehicle</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
              Experience our most advanced model with cutting-edge features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl overflow-hidden shadow-lg"
          >
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative h-96 lg:h-[600px] w-full">
                <Image
                  src="/vyom.png"
                  alt="Vyom electric vehicle"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full lg:w-1/2 p-12 lg:p-16"
            >
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Vyom</h3>
                <p className="text-xl text-orange-500">Premium Performance</p>
              </div>

              <p className="text-gray-700 text-lg mb-8">
                Redefining electric performance with breathtaking acceleration
                and precise handling. Our most advanced and exhilarating vehicle
                yet with cutting-edge technology and sustainable design.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <Battery className="h-8 w-8 text-orange-500 mb-3" />
                  <p className="text-2xl font-bold">100 KM</p>
                  <p className="text-gray-500">Range</p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <Zap className="h-8 w-8 text-orange-500 mb-3" />
                  <p className="text-2xl font-bold">5 Hours</p>
                  <p className="text-gray-500">Charge Time</p>
                </motion.div>
              </div>

              <h4 className="text-xl font-semibold mb-4">Key Features</h4>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              >
                {[
                  "Track mode",
                  "Active aerodynamics",
                  "Carbon fiber accents",
                  "Performance brakes",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariant}
                    className="flex items-center p-2 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    <div className="mr-3 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              {/* Fixed button spacing in mobile view */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <ActionButton
                    variant="orange"
                    text="Schedule Test Drive"
                    showArrow={false}
                    href="tel:+918062177621"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <ActionButton
                    variant="white"
                    text="Learn More"
                    showArrow={false}
                    href="/vehicles/vyom"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-24 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
      >
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Ready for the electric future?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-xl opacity-90 mb-10"
          >
            Schedule a test drive today and experience the power, performance,
            and sustainability of our electric vehicles.
          </motion.p>

          {/* Fixed button spacing in mobile view */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <ActionButton
                href="tel:+918062177621"
                text="Book Test Drive"
                variant="white"
                showArrow={false}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <ActionButton
                href="tel:+918062177621"
                text="Contact Sales"
                variant="white"
                showArrow={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
