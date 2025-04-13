import Link from "next/link";
import { MapPin, Mail, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 px-4">
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">NRG Auto</h3>
            <p className="text-gray-400">
              Pioneering the future of sustainable transportation with
              cutting-edge electric vehicles.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Vehicles</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/vehicles/vajra" className="hover:text-orange-400">
                  Vajra
                </Link>
              </li>
              <li>
                <Link href="/vehicles/nandi" className="hover:text-orange-400">
                  Nandi
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-orange-400">
                  All Vehicles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-orange-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-orange-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                <span>NRG GROUP INDIA</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:nrgautoelectricindustry@gmail.com"
                  className="hover:text-orange-400"
                >
                  nrgautoelectricindustry@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                <a href="tel:08062177621" className="hover:text-orange-400">
                  08062177621
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Youtube
                  size={18}
                  className="text-orange-400 mt-1 flex-shrink-0"
                />
                <a
                  href="https://www.youtube.com/@nrgautogaikwad38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} NRG Auto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
