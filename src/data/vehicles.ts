// src/lib/data/vehicles.ts
export interface Variant {
  id: string;
  voltage: string;
  batteryType: string;
  range: string;
  warranty?: string;
  chargeTime?: string;
  price: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: string; 
  imageSrc: string;
  description: string;
  features: string[];
  variants: Variant[];
}

export const vehicles: Vehicle[] = [
  {
    id: "bahubali",
    name: "Bahubali",
    category: "Delivery Scooter",
    imageSrc: "/bahubali.png",
    description:
      "Our flagship delivery scooter, designed for speed and efficiency. Perfect for last-mile delivery and urban mobility. It can be used to deliver jars of water and other products to the customers.",
    features: [
      "High-speed delivery",
      "Long-range battery",
      "Comfortable seating",
      "Easy to maneuver",
    ],
    variants: [
      {
        id: "bahubali-1",
        voltage: "60V",
        batteryType: "25 AH",
        range: "50 KM",
        price: "110000"
      },
      {
        id: "bahubali-2",
        voltage: "60V",
        batteryType: "30 AH",
        range: "60-80 KM",
        price: "122000"
      },
      {
        id: "bahubali-3",
        voltage: "60V",
        batteryType: "35 AH",
        range: "80-100 KM",
        price: "135000"
      },
    ]
  },
  {
    id: "vajra",
    name: "Vajra",
    category: "Delivery Scooter",
    imageSrc: "/vajra.png",
    description:
      "Our flagship delivery scooter, designed for speed and efficiency. Perfect for last-mile delivery and urban mobility. It can be used to deliver jars of water and other products to the customers.",
    features: [
      "High-speed delivery",
      "Long-range battery",
      "Comfortable seating",
      "Easy to maneuver",
    ],
    variants: [
      {
        id: "vajra-1",
        voltage: "60V",
        batteryType: "25 AH",
        range: "50 KM",
        price: "86000"
      },
      {
        id: "vajra-2",
        voltage: "60V",
        batteryType: "30 AH",
        range: "60-80 KM",
        price: "96000"
      },
      {
        id: "vajra-3",
        voltage: "60V",
        batteryType: "35 AH",
        range: "80-100 KM",
        price: "105000"
      },
      {
        id: "vajra-4",
        voltage: "60V",
        batteryType: "40 AH",
        range: "100-110 KM",
        price: "117000"
      },
    ]
  },
  {
    id: "nandi",
    name: "Nandi",
    category: "Scooter",
    imageSrc: "/nandi.png",
    description:
      "The ultimate electric SUV for families and adventure seekers. Spacious interior with cutting-edge technology and impressive off-road capabilities.",
    features: [
      "All-wheel drive",
      "Panoramic glass roof",
      "Up to 7 seats",
      "Advanced air filtration",
    ],
    variants: [
      {
        id: "nandi-1",
        voltage: "48V",
        batteryType: "25 AH",
        range: "40-50 KM",
        warranty: "1",
        chargeTime: "4-5 hours",
        price: "44000"
      },
      {
        id: "nandi-2",
        voltage: "60V",
        batteryType: "25 AH",
        range: "50-60 KM",
        warranty: "1",
        chargeTime: "4-5 hours",
        price: "47500"
      },
      {
        id: "nandi-3",
        voltage: "60V",
        batteryType: "30 AH",
        range: "60-70 KM",
        warranty: "1+1",
        chargeTime: "5-6 hours",
        price: "56800"
      },
      {
        id: "nandi-4",
        voltage: "60V",
        batteryType: "35 AH",
        range: "80-100 KM",
        warranty: "1+1",
        chargeTime: "5-6 hours",
        price: "65500"
      },
    ]
  },
  {
    id: "vyom",
    name: "Vyom",
    category: "Scooter",
    imageSrc: "/vyom.png",
    description:
      "Redefining electric performance with breathtaking acceleration and precise handling. Our most advanced and exhilarating vehicle yet.",
    features: [
      "Track mode",
      "Active aerodynamics",
      "Carbon fiber accents",
      "Performance brakes",
    ],
    variants: [
      {
        id: "vyom-1",
        voltage: "60V",
        batteryType: "28 AH",
        range: "50-60 KM",
        warranty: "1",
        chargeTime: "7-8 hours",
        price: "56500"
      },
      {
        id: "vyom-2",
        voltage: "60V",
        batteryType: "25 AH",
        range: "50-60 KM",
        warranty: "1",
        chargeTime: "4-5 hours",
        price: "56800"
      },
      {
        id: "vyom-3",
        voltage: "60V",
        batteryType: "30 AH",
        range: "60-70 KM",
        warranty: "1+1",
        chargeTime: "5-6 hours",
        price: "68500"
      },
      {
        id: "vyom-4",
        voltage: "60V",
        batteryType: "35 AH",
        range: "80-100 KM",
        warranty: "1+1",
        chargeTime: "5-6 hours",
        price: "78500"
      }
    ]
  },
  {
    id: "dl3",
    name: "DL3",
    category: "Fast Scooter",
    imageSrc: "/DL3.png",
    description:
      "The DL3 is a fast scooter that is designed for urban mobility. It is a great choice for those who want to travel in a fast and efficient way.",
    features: [
      "High-speed",
      "Long-range battery",
      "Comfortable seating",
      "Easy to maneuver",
    ],
    variants: [
      {
        id: "dl3-1",
        voltage: "60V",
        batteryType: "28 AH",
        warranty: "1",
        chargeTime: "7-8 hours",
        range: "50 - 60KM",
        price: "54000"
      },
      {
        id: "dl3-2",
        voltage: "60V",
        batteryType: "25 AH",
        warranty: "1",
        range: "50 - 60 KM",
        chargeTime: "4-5 hours",
        price: "56800"
      },
      {
        id: "dl3-3",
        voltage: "60V",
        batteryType: "30 AH",
        warranty: "1+1",
        range: "60 - 70 KM",
        chargeTime: "5-6 hours",
        price: "63500"
      },
      {
        id: "dl3-4",
        voltage: "60V",
        batteryType: "35 AH",
        warranty: "1+1",
        range: "80 - 100 KM",
        chargeTime: "5-6 hours",
        price: "72500"
      },
    ]
  }
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((vehicle) => vehicle.id === id);
}

export function getVariantById(vehicleId: string, variantId: string): Variant | undefined {
  const vehicle = getVehicleById(vehicleId);
  return vehicle?.variants.find(variant => variant.id === variantId);
}