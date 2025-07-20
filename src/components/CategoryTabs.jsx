import React from "react";
// Note: Icon imports are handled in the parent MapPage component and passed down.

/**
 * Displays the main navigation tabs for each health category.
 * @param {object} props - Component props.
 * @param {Array} props.categories - Array of category objects.
 * @param {string} props.activeCategory - The ID of the currently active category.
 * @param {Function} props.onCategoryChange - Callback function to change the active category.
 */
export default function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Reduced vertical padding (py-4) to decrease space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Instructions */}
        <div className="text-center mb-8">
          {/* Reduced font size (text-base) to help it fit on one line */}
          <p className="text-gray-600 text-base font-medium">
            Navigate through the different tabs to explore various health categories. 
            To learn more about this project, head towards the "About This Project" tab.
          </p>
        </div>
        
        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  relative group p-6 rounded-2xl border-2 transition-all duration-300 text-center
                  ${isActive 
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md hover:scale-102'
                  }
                `}
              >
                {/* Icon Circle */}
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300
                  ${category.color} ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                `}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Category Name */}
                <h3 className={`
                  font-semibold text-base leading-tight whitespace-pre-line
                  ${isActive ? 'text-blue-700' : 'text-gray-700'}
                `}>
                  {category.name}
                </h3>
                
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}