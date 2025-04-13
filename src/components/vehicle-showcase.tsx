"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import VehicleCard from "@/components/vehicle-card";
import { Vehicle } from "@/data/vehicles";

interface VehicleShowcaseProps {
  vehicles: Vehicle[];
}

export default function VehicleShowcase({ vehicles }: VehicleShowcaseProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setScrollPosition(Math.max(0, scrollPosition - 1));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && scrollPosition < vehicles.length - 1) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setScrollPosition(scrollPosition + 1);
    }
  };

  return (
    <div className="relative px-4">
      {/* Top navigation buttons - right aligned */}
      <div className="flex justify-end mb-4">
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className={`h-10 w-10 bg-orange-500 text-white shadow-md rounded-lg flex items-center justify-center ${
              scrollPosition === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
            disabled={scrollPosition === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollRight}
            className={`h-10 w-10 bg-orange-500 text-white shadow-md rounded-lg flex items-center justify-center ${
              scrollPosition >= vehicles.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-orange-600"
            }`}
            disabled={scrollPosition >= vehicles.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Carousel - fixed for desktop and mobile */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-6 px-4 pb-4 snap-x scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex-shrink-0 w-full sm:w-80 md:w-96 snap-center sm:snap-start"
            >
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </div>

      {/* See all vehicles button */}
      <div className="text-center mt-10">
        <Link href="/vehicles">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            See All Vehicles
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}