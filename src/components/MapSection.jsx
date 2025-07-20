import React, { useEffect } from "react";

/**
 * This component displays the color-coded header and the embedded Tableau map
 * for the currently selected health category.
 * @param {object} props - Component props.
 * @param {object} props.activeCategory - The full object for the active category.
 */
export default function MapSection({ activeCategory }) {
  // A React hook to manage side effects. In this case, it's used to add the
  // Tableau embedding script to the page when the component is first loaded.
  useEffect(() => {
    // Check if the script is already on the page to avoid adding it multiple times.
    const scriptId = "tableau-embedding-api-script";
    if (document.getElementById(scriptId)) {
      return; // If script exists, do nothing.
    }

    // Create a new <script> element
    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";
    script.type = "module";

    // Append the script to the document's body, which will load and execute it.
    document.body.appendChild(script);

    // Optional: Cleanup function to remove the script when the component is unmounted.
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []); // The empty array [] means this effect runs only once after the initial render.

  if (!activeCategory) return null;

  const { title, description, icon: IconComponent, color, tableau_url } = activeCategory;

  return (
    <div className="bg-gray-50 pb-12">
      <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-8">
        {/* Color-coded Map Header */}
        <div 
          className={`${color} text-white p-6 rounded-xl shadow-lg flex items-center space-x-6 max-w-7xl mx-auto`}
        >
          <div className="flex-shrink-0 w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold">
              Resources for {title}
            </h2>
            <p className="text-lg opacity-90 mt-1">
              {description}
            </p>
          </div>
        </div>

        {/* Tableau Map Container - Properly centered */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mt-6 max-w-7xl mx-auto">
          <div className="w-full min-h-[700px] p-4">
            {/* 
              DEVELOPER NOTE: This is the Tableau Web Component.
              - Wrapped in a flex container to ensure proper centering
              - Added padding to the container for better spacing
              - The tableau-viz component now fills the container properly
            */}
            <div className="w-full h-full flex justify-center items-center">
              <tableau-viz 
                id="tableauViz"       
                src={tableau_url}
                toolbar="bottom" 
                hide-tabs
                className="w-full h-full max-w-none"
                style={{
                  width: '100%', 
                  height: '680px',
                  display: 'block',
                  margin: '0 auto'
                }}>
              </tableau-viz>
            </div>
          </div>
        </div>

        {/* Updated Map Instructions */}
        <div className="mt-6 text-center max-w-7xl mx-auto">
          <p className="text-sm text-gray-500">
            Use the toolbar on the right for more options and filtering the locations.
          </p>
        </div>
      </div>
    </div>
  );
}