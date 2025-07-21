import React, { useState } from "react";
import Header from "../components/Header";
import CategoryTabs from "../components/CategoryTabs";
import MapSection from "../components/MapSection";
import { 
  Clock, 
  CreditCard, 
  Heart, 
  Shield, 
  Brain, 
  FileText 
} from "lucide-react";

// ===================================================================================
// DEVELOPER NOTE: UPDATE TABLEAU URLS HERE
// Each category object below has a `tableau_url`.
// Replace the placeholder URL with the specific Tableau map URL for each category.
// ===================================================================================
const categories = [
  {
    id: "urgent-care",
    name: "Urgent Care/\nAfter Hours",
    title: "Urgent Care / After Hours",
    description: "Access immediate medical care when your primary doctor isn't available.",
    icon: Clock,
    color: "bg-red-500",
    colorHex: "#ef4444",
    tableau_url: "https://public.tableau.com/views/DHM_UCAH/UCAH?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    id: "uninsured",
    name: "Uninsured/\nUnderinsured",
    title: "Uninsured & Underinsured",
    description: "Healthcare options for those without insurance or with limited coverage.",
    icon: CreditCard,
    color: "bg-cyan-500",
    colorHex: "#06b6d4",
    tableau_url: "https://public.tableau.com/views/DHM_UIUI/UIUI?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    id: "safer-sex",
    name: "Safer Sex/\nSTI Testing",
    title: "Safer Sex / STI Testing",
    description: "Confidential testing and resources for sexual health and wellness.",
    icon: Heart,
    color: "bg-pink-500",
    colorHex: "#ec4899",
    tableau_url: "https://public.tableau.com/views/DHM_SSSTIT/SSST?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    id: "military",
    name: "Military/\nVeteran",
    title: "Military / Veteran",
    description: "Specialized healthcare services designed for military personnel and veterans.",
    icon: Shield,
    color: "bg-orange-500",
    colorHex: "#f97316",
    tableau_url: "https://public.tableau.com/views/DHM_MV/MV?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    id: "mental-health",
    name: "Mental Health/\nSubstance Abuse",
    title: "Mental Health / Substance Abuse",
    description: "Support services for mental wellness and addiction recovery.",
    icon: Brain,
    color: "bg-purple-500",
    colorHex: "#a855f7",
    tableau_url: "https://public.tableau.com/views/DHM_MHSA/MHSA?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    id: "health-program",
    name: "Health\nProgram Aid",
    title: "Health Program Aid",
    description: "Financial assistance and support programs for healthcare needs.",
    icon: FileText,
    color: "bg-green-500",
    colorHex: "#22c55e",
    tableau_url: "https://public.tableau.com/shared/SG7WDN75C?:display_count=n&:origin=viz_share_link"
  }
];

export default function MapPage() {
  const [activeCategoryId, setActiveCategoryId] = useState("urgent-care");

  const activeCategory = categories.find(c => c.id === activeCategoryId);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryTabs 
        categories={categories}
        activeCategory={activeCategoryId}
        onCategoryChange={setActiveCategoryId}
      />
      <MapSection activeCategory={activeCategory} />
    </div>
  );
}