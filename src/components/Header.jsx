import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Info } from "lucide-react";
import Logo from "./Logo";

/**
 * The main header for the application.
 * Contains the logo, title, slogan, and a link to the "About" page.
 */
export default function Header() {
  return (
    // Reduced vertical padding (py-6) to decrease space below the header.
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Replaced the previous placeholder with the new SVG Logo component */}
            <Logo />
            
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  Durham Health Map
                </span>
              </h1>
              <p className="text-lg text-gray-600 mt-2 font-medium">
                Find Cost-Effective Healthcare{" "}
                <span className="text-blue-600 font-semibold">Services</span> and{" "}
                <span className="text-green-500 font-semibold">Resources</span> in{" "}
                <span className="font-semibold">Your Community</span>.
              </p>
            </div>
          </div>
          
          {/* About Button */}
          <Link 
            to={createPageUrl("About")}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Info className="w-5 h-5" />
            <span className="font-medium">About This Project</span>
          </Link>
        </div>
      </div>
    </header>
  );
}