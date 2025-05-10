"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Battery, Zap, Clock, Shield } from "lucide-react";
import Navbar from "@/components/navbar";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";

import Footer from "@/components/footer";
import VehicleShowcase from "@/components/vehicle-showcase";
import { ActionButton } from "@/components/ui/ActionButton";

const heroImages = [
  { src: "/nrg-main.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-1.jpg", alt: "NRG Auto electric scooter" },
  { src: "/vyom.png", alt: "Vyom electric scooter" },
  { src: "/nrg-2.jpg", alt: "NRG Auto electric scooter" },
  { src: "/vajra-side.png", alt: "Vajra electric scooter" },
  { src: "/nrg-13.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-3.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nandi-pink.png", alt: "Nandi electric scooter" },
  { src: "/nrg-4.jpg", alt: "NRG Auto electric scooter" },
  { src: "/gt-force.jpg", alt: "GT Force electric scooter" },
  { src: "/nrg-5.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-6.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-7.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-8.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-10.jpg", alt: "NRG Auto electric scooter" },
  { src: "/nrg-11.jpg", alt: "NRG Auto electric scooter" },
  
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const vehicleShowcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToVehicles = () => {
    vehicleShowcaseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section with Carousel */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="relative h-[85vh] w-full overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-6 absolute inset-0 z-20 flex flex-col justify-center">
          <div className="max-w-2xl space-y-6 md:pl-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              The Future of <span className="text-orange-500">Electric</span>{" "}
              Mobility
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              Experience the perfect blend of performance, range, and
              sustainability with our cutting-edge electric vehicles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col space-y-4 gap-4 sm:space-y-0 sm:space-x-4 pt-2 pb-4"
            >
              <Button
                size="lg"
                onClick={scrollToVehicles}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Explore Vehicles
              </Button>
              <ActionButton
                href="tel:+918062177621"
                text="Book a Test Drive"
                variant="white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose <span className="text-orange-500">NRG Auto</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Our electric vehicles are designed with innovation, performance,
              and sustainability in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-8 rounded-xl hover:shadow-2xl transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Battery className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long Range</h3>
              <p className="text-gray-600">
                Up to 400 miles on a single charge, so you can go further
                without worry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-8 rounded-xl hover:shadow-2xl transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Charging</h3>
              <p className="text-gray-600">
                Charge up to 80% in just 30 minutes with our supercharging
                network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-8 rounded-xl hover:shadow-2xl transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-gray-600">
                0-60 mph in as little as 3.1 seconds with instant torque
                delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-8 rounded-xl hover:shadow-2xl transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety</h3>
              <p className="text-gray-600">
                Advanced driver assistance systems and top safety ratings for
                peace of mind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vehicle Showcase */}
      <section ref={vehicleShowcaseRef} className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our <span className="text-orange-500">Vehicles</span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our lineup of premium electric vehicles designed for every
              lifestyle.
            </p>
          </motion.div>

          <VehicleShowcase vehicles={vehicles} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-orange-500 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10"
          >
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to join the electric revolution?
              </h2>
              <p className="mt-6 text-xl text-orange-100">
                Schedule a test drive today and experience the future of
                driving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white hover:bg-orange-50 text-orange-500 rounded-lg cursor-pointer px-8 py-6 shadow-md hover:scale-[1.02] transition-all duration-300"
                  onClick={() => (window.location.href = "tel:+918062177621")}
                >
                  Book Test Drive →
                </Button>
                <Button
                  size="lg"
                  className="bg-white hover:bg-orange-50 text-orange-500 rounded-lg cursor-pointer px-8 py-6 shadow-md hover:scale-[1.02] transition-all duration-300"
                  onClick={() => (window.location.href = "tel:+918062177621")}
                >
                  Contact Sales →
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.057348944752!2d75.88246101531556!3d19.850013133189334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bda57640103dc13%3A0x23d007c98a03a10!2sNRG%20auto%20electric%20industry!5e0!3m2!1sen!2sin!4v1720065921388!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
