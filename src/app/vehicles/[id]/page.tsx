"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Battery,
  Zap,
  ArrowLeft,
  Clock,
  Shield,
  BatteryCharging,
  Star,
  Car,
  Settings,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getVehicleById } from "@/data/vehicles";
import { notFound } from "next/navigation";
import { useState, useEffect } from "react";
import * as React from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

export default function VehicleDetailPage() {
  // Use the hook to get params directly
  const params = useParams();
  const id = params.id as string;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    notFound();
  }

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = vehicle.variants[selectedVariantIndex];
  const [mounted, setMounted] = useState(false);

  // Prevent hydration error with framer-motion
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* Vehicle Detail */}
      <section className="mt-16 py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/vehicles">
              <Button
                variant="outline"
                className="flex items-center text-orange-500 hover:text-white hover:bg-orange-500 mb-12 rounded-lg shadow-sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all vehicles
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl overflow-hidden shadow-xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Vehicle Image */}
              <motion.div
                className="relative h-[400px] lg:h-auto lg:min-h-[600px]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={vehicle.imageSrc}
                  alt={`${vehicle.name} electric vehicle`}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Vehicle Details */}
              <motion.div
                className="p-10 lg:p-12"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.div variants={itemVariant}>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                      {vehicle.name}
                    </h1>
                    <div className="flex items-center">
                      <Car className="h-5 w-5 text-orange-500 mr-2" />
                      <p className="text-xl text-orange-500">
                        {vehicle.category}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={itemVariant}
                    className="bg-orange-100 rounded-full px-3 py-3 shadow-sm"
                  >
                    <p className="text-md font-bold text-orange-600">
                      {selectedVariant.price} ₹
                    </p>
                  </motion.div>
                </div>

                <motion.p
                  variants={itemVariant}
                  className="text-gray-700 text-lg mb-10 leading-relaxed"
                >
                  {vehicle.description}
                </motion.p>

                {/* Variant Selector */}
                <motion.div variants={itemVariant} className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Settings className="h-5 w-5 text-orange-500 mr-2" />
                    Select Variant
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {vehicle.variants.map((variant, index) => (
                      <motion.button
                        key={variant.id}
                        onClick={() => setSelectedVariantIndex(index)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-5 py-2.5 cursor-pointer rounded-full border transition-colors ${
                          selectedVariantIndex === index
                            ? "bg-orange-500 text-white border-orange-500 shadow-md"
                            : "bg-white text-gray-700 border-gray-300 hover:border-orange-300"
                        }`}
                      >
                        {variant.id.split("-")[1] || `Model ${index + 1}`}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariant}
                  className="grid grid-cols-2 gap-6 mb-10"
                >
                  <motion.div
                    className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Battery className="h-8 w-8 text-orange-500 mb-3" />
                    <p className="text-2xl font-bold">
                      {selectedVariant.range}
                    </p>
                    <p className="text-gray-500">Range</p>
                  </motion.div>

                  <motion.div
                    className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Zap className="h-8 w-8 text-orange-500 mb-3" />
                    <p className="text-2xl font-bold">
                      {selectedVariant.voltage}
                    </p>
                    <p className="text-gray-500">Voltage</p>
                  </motion.div>
                </motion.div>

                {/* Variant Details */}
                <motion.div
                  variants={itemVariant}
                  className="bg-gray-50 rounded-xl p-6 mb-10 shadow-sm"
                >
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Star className="h-5 w-5 text-orange-500 mr-2" />
                    Variant Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-center mb-2">
                        <BatteryCharging className="h-5 w-5 text-orange-500 mr-2" />
                        <p className="text-gray-500">Battery Type</p>
                      </div>
                      <p className="font-medium pl-7">
                        {selectedVariant.batteryType}
                      </p>
                    </div>
                    {selectedVariant.warranty && (
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <Shield className="h-5 w-5 text-orange-500 mr-2" />
                          <p className="text-gray-500">Warranty</p>
                        </div>
                        <p className="font-medium pl-7">
                          {selectedVariant.warranty} year(s)
                        </p>
                      </div>
                    )}
                    {selectedVariant.chargeTime && (
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <Clock className="h-5 w-5 text-orange-500 mr-2" />
                          <p className="text-gray-500">Charge Time</p>
                        </div>
                        <p className="font-medium pl-7">
                          {selectedVariant.chargeTime}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.h2
                  variants={itemVariant}
                  className="text-2xl font-semibold mb-4 flex items-center"
                >
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  Key Features
                </motion.h2>
                <motion.ul
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                >
                  {vehicle.features.map((feature, i) => (
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

                <motion.div
                  variants={itemVariant}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:text-orange-500 hover:bg-white border border-orange-500 text-white rounded-full cursor-pointer px-8 py-6 shadow-md"
                    onClick={() => (window.location.href = "tel:+918062177621")}
                  >
                    Schedule Test Drive
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 rounded-full px-8 py-6"
                    onClick={() => (window.location.href = "tel:+918062177621")}
                  >
                    Contact Sales
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
