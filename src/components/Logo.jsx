import React from "react";

/**
 * Logo component for the Durham Health Map.
 * Uses the exact logo image provided by the user.
 */
export default function Logo() {
  return (
    <div className="w-16 h-16 flex-shrink-0">
      <img
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/514792a22_Logo_nobackground.png"
        alt="Durham Health Map Logo - Circular map with grid lines and location markers"
        className="w-full h-full object-contain"
      />
    </div>
  );
}