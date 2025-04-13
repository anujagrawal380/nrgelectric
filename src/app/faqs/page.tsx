"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";

// FAQ data structure
const faqs = [
  {
    question: "How much weight can an electric scooter carry?",
    answer: "In general, all EV's i.e e-scooters have a load capacity of 150kg, which is equal to the carrying capacity of any petrol vehicle."
  },
  {
    question: "What is the battery life of electric scooters in India?",
    answer: "In India, we have a present temperature of around 30-40 degree C thus VRLA battery with 300-350 life cycle lasts around 1-2 years whereas lithium-ion with 1500 lifecycle last around 3 - 4 years."
  },
  {
    question: "What is the Battery warranty for Electric Scooters?",
    answer: "Each electric Scooter company comes with different battery warranties. Currently, Benling company's Electric Scooter comes with maximum battery warranty, i.e, 3 year of Lithium-Ion batteries and 1 year for VRLA batteries respectively."
  },
  {
    question: "Can Electric Scooters be charged at home?",
    answer: "Yes, charging an electric powered scooter is as easy as charging your cell phones. It can be charged by a regular 6 Amp socket with ease."
  },
  {
    question: "Can an Electric Scooter go uphill?",
    answer: "Yes, a battery-operated vehicle can easily go uphill, the only difference that makes is you need to get a more powerful battery for travelling long ranges as going uphill will consume more battery that would reduce average travelling distance of per charge of your e-scooter."
  }
];

// FAQ Item component for accordion
function FaqItem({ faq, index, openIndex, setOpenIndex }: { 
  faq: { question: string; answer: string }, 
  index: number, 
  openIndex: number | null, 
  setOpenIndex: (index: number | null) => void 
}) {
  const isOpen = openIndex === index;
  
  return (
    <div 
      className={`rounded-2xl overflow-hidden mb-6 transition-all duration-300 ${
        isOpen ? "shadow-lg" : "shadow-md hover:shadow-lg"
      }`}
    >
      <button
        className={`w-full flex justify-between items-center p-6 text-left ${
          isOpen 
            ? "bg-orange-500 text-white" 
            : "bg-white text-gray-900 hover:bg-orange-50"
        }`}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <h3 className="text-xl font-semibold pr-10">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className={`h-6 w-6 flex-shrink-0 ${isOpen ? "text-white" : "text-orange-500"}`} />
        ) : (
          <ChevronDown className="h-6 w-6 flex-shrink-0 text-orange-500" />
        )}
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-64" : "max-h-0"
      }`}>
        <div className="p-6 bg-white">
          <p className="text-gray-700 text-lg">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full bg-gradient-to-r from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/60 z-0">
          <Image
            src="/nandi.png"
            alt="Electric scooter FAQ"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white sm:text-6xl tracking-tight">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
          <p className="max-w-2xl mt-6 text-xl text-gray-200">
            Everything you need to know about our electric scooters
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-4 md:p-10 mb-12">
            <div className="flex items-center justify-center mb-10">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                <HelpCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Common Questions
              </h2>
            </div>

            {faqs.map((faq, index) => (
              <FaqItem 
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl text-white p-10 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-lg mx-auto">
              Our team is ready to help you with any other questions you might have about our electric scooters.
            </p>
            <ActionButton
              href="tel:+918062177621"
              text="Contact Support"
              variant="white"
            />
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Our Vehicles</h4>
              <p className="text-gray-600 mb-4">Explore our range of electric scooters</p>
              <a href="/vehicles" className="text-orange-500 font-medium hover:underline">View Vehicles →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">About Us</h4>
              <p className="text-gray-600 mb-4">Learn more about NRG Group India</p>
              <a href="/about" className="text-orange-500 font-medium hover:underline">About NRG →</a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact</h4>
              <p className="text-gray-600 mb-4">Get in touch with our support team</p>
              <a href="tel:+918062177621" className="text-orange-500 font-medium hover:underline">Contact Us →</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}