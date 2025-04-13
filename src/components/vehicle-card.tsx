// src/components/vehicle-card.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Battery, Zap, ArrowRight } from "lucide-react";
import { Vehicle } from "@/data/vehicles";
import Link from "next/link";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const { name, category, imageSrc, id, variants } = vehicle;

  // Get the base variant (first one) for display
  const baseVariant = variants[0];
  // Get price from the base variant
  const price = baseVariant?.price || "N/A";
  // Get the range from the base variant
  const range = baseVariant?.range || "N/A";

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative h-48 sm:h-64">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={`${name} electric vehicle`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-500">{category}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-orange-500">
              ₹
              {Number(price)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p className="text-sm text-gray-500">Starting at</p>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <Battery className="h-5 w-5 text-orange-500 mr-2" />
            <span className="text-sm">{range}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-5 w-5 text-orange-500 mr-2" />
            <span className="text-sm">{baseVariant?.voltage || "N/A"}</span>
          </div>
        </div>

        <div className="flex justify-end">
          <Link href={`/vehicles/${id}`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
