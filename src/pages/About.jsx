import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, MapPin, Users, Heart, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link 
              to={createPageUrl("Map")}
              className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 text-blue-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 via-blue-600 to-green-500 bg-clip-text text-transparent">
                About This Project
              </h1>
              <p className="text-gray-600 mt-1">Learn more about the Durham Health Map initiative</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-12">
            {/* Introduction */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Connecting Durham to Healthcare Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The Durham Health Map is a comprehensive resource designed to help community members 
                find accessible, affordable healthcare services across six critical categories.
              </p>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To eliminate barriers to healthcare access by providing clear, 
                  organized information about available resources in Durham.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Built with input from local healthcare providers, community organizations, 
                  and residents to ensure relevance and accuracy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Care</h3>
                <p className="text-gray-600">
                  Covering urgent care, insurance support, sexual health, veteran services, 
                  mental health, and program assistance.
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use This Resource</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Navigate through the six health categories using the interactive tabs on the main page. 
                Each category contains a specialized map showing relevant healthcare providers, 
                community organizations, and support services in the Durham area.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories Covered</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Urgent Care / After Hours</h4>
                  <p className="text-sm text-gray-600">Immediate medical care options when your primary doctor isn't available.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Uninsured / Underinsured</h4>
                  <p className="text-sm text-gray-600">Healthcare options for those without insurance or with limited coverage.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Safer Sex / STI Testing</h4>
                  <p className="text-sm text-gray-600">Confidential testing and resources for sexual health and wellness.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Military / Veteran</h4>
                  <p className="text-sm text-gray-600">Specialized healthcare services for military personnel and veterans.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Mental Health / Substance Abuse</h4>
                  <p className="text-sm text-gray-600">Support services for mental wellness and addiction recovery.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Health Program Aid</h4>
                  <p className="text-sm text-gray-600">Financial assistance and support programs for healthcare needs.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Goals</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This project aims to reduce healthcare disparities in Durham by making information 
                more accessible and easier to navigate. By organizing resources geographically and 
                by category, we hope to connect more community members with the care they need.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Audience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Durham Health Map is intended for use by all Durham residents, with a particular focus on underserved and at-risk communities, as well as local organizations and service providers who support public health initiatives.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions about the Map?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Please reach out to learn more about this site, the Durham Health Map Project, and how to get involved in community health action. Team: Monona Zhou (Project Lead, zhoumonona3@gmail.com), Chloe Balin, Bryan Conston, Justin Zou.
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Last Updated July 21, 2025.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 italic">
                  "Healthcare access shouldn't depend on knowing where to look. 
                  The Durham Health Map brings all the resources together in one place, 
                  making it easier for everyone to find the care they need."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}