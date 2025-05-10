"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bahubali.png"
            alt="NRG Group India team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-0"></div>
        </div>
        <div className="container relative z-10 mx-auto px-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white sm:text-6xl tracking-tight">
              About <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-xl text-gray-200 mt-4 max-w-2xl">
              Driving the future of electric mobility in India with innovative and sustainable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-10 md:p-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 text-lg mb-6">
                  At NRG Group India, we are committed to revolutionizing the way India moves. As a leading provider of electric scooters, our mission is to offer eco-friendly, efficient, and innovative mobility solutions that contribute to a greener, more sustainable future.
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  With a focus on performance, safety, and design, our electric scooters are engineered to meet the diverse needs of urban commuters and enthusiasts alike. We take pride in our growing community, with over 50,000 happy customers who have chosen NRG Group India for their clean and affordable transportation.
                </p>
                <p className="text-gray-700 text-lg">
                  Our dedication goes beyond just selling electric scooters—we aim to drive a positive impact by promoting cleaner air, reducing carbon emissions, and making electric mobility accessible to all. As we continue to expand, we remain committed to delivering high-quality products and exceptional service.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-orange-500 p-10 md:p-16 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-white mb-8">Why Choose NRG</h3>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    <p className="text-white font-semibold text-xl">Eco-Friendly Mobility</p>
                  </div>
                  <p className="text-white/90 ml-8">Zero emissions, reduced carbon footprint</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    <p className="text-white font-semibold text-xl">Innovation</p>
                  </div>
                  <p className="text-white/90 ml-8">Cutting-edge technology and design</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    <p className="text-white font-semibold text-xl">Customer Satisfaction</p>
                  </div>
                  <p className="text-white/90 ml-8">50,000+ happy customers and growing</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="h-5 w-5 rounded-full bg-white flex items-center justify-center mr-3">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    </div>
                    <p className="text-white font-semibold text-xl">Affordability</p>
                  </div>
                  <p className="text-white/90 ml-8">Clean transportation at competitive prices</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <p className="text-5xl font-bold text-orange-500 mb-3">50,000+</p>
              <p className="text-gray-700 text-lg">Satisfied Customers</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <p className="text-5xl font-bold text-orange-500 mb-3">5+</p>
              <p className="text-gray-700 text-lg">Vehicle Models</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <p className="text-5xl font-bold text-orange-500 mb-3">15+</p>
              <p className="text-gray-700 text-lg">Employees</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow"
            >
              <p className="text-5xl font-bold text-orange-500 mb-3">3+</p>
              <p className="text-gray-700 text-lg">Partners</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our <span className="text-orange-500">Leadership</span> Team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Meet the passionate individuals driving our mission forward and 
              revolutionizing electric mobility in India.
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src="/nrg-main.jpg"
                  alt="Team Member"
                  fill
                  className="object-cover"
                /> 
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Ravindra Gaikwad</h3>
                <p className="text-orange-500 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the automotive industry, Ravindra leads our vision for sustainable transportation.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}