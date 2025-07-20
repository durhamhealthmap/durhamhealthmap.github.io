import React from "react";

/**
 * This component contains the README content for the Durham Health Map project.
 * Copy the content below to create a README.md file when exporting the project.
 */
export default function ProjectReadme() {
  const readmeContent = `
# Durham Health Map

This project is a web application designed to provide an interactive map of health resources in Durham. It helps users find cost-effective healthcare services across six key categories.

## Key Features

- **Interactive Maps:** Displays a unique, filterable map for each health category.
- **Category Navigation:** Easy-to-use tabs with icons to switch between different health resources.
- **Responsive Design:** The interface is optimized for both desktop and mobile devices.
- **About Page:** Provides detailed information about the project's mission and goals.
- **Tableau Integration:** Uses the Tableau Embedding API to render dynamic and interactive map visualizations.

---

## How to Update Map Links

The core functionality of this application relies on links to Tableau Public visualizations. To update a map, you need to edit a single file:

**File to Edit:** \`pages/Map.js\`

1.  Navigate to the \`pages/Map.js\` file in your project.
2.  Find the \`categories\` constant, which is an array of objects.
3.  Each object in the array represents one of the health categories displayed in the app.
4.  Locate the \`tableau_url\` property for the category you wish to update.
5.  Replace the existing placeholder URL with your new Tableau Public link.

**Example:**

To update the map for **Urgent Care**, you would change this line:

\`\`\`javascript
// ...
const categories = [
  {
    id: "urgent-care",
    // ... other properties
    tableau_url: "https://public.tableau.com/views/Superstore_embedded_800x800/Overview" // <-- CHANGE THIS URL
  },
  // ... other categories
];
// ...
\`\`\`

Simply replace the URL string with your new one. The change will be reflected on the live website automatically.

---

## Health Categories

1. **Urgent Care / After Hours** - Access immediate medical care when your primary doctor isn't available.
2. **Uninsured / Underinsured** - Healthcare options for those without insurance or with limited coverage.
3. **Safer Sex / STI Testing** - Confidential testing and resources for sexual health and wellness.
4. **Military / Veteran** - Specialized healthcare services designed for military personnel and veterans.
5. **Mental Health / Substance Abuse** - Support services for mental wellness and addiction recovery.
6. **Health Program Aid** - Financial assistance and support programs for healthcare needs.

---

## Technology Stack

- **Frontend Framework:** React
- **Styling:** TailwindCSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Mapping/Visualization:** Tableau Embedding API
- **Deployment:** base44 Platform

---

## Installation and Setup

This project was built using the base44 low-code platform. To run locally:

1. Extract the project files
2. Ensure all dependencies are installed
3. Update the Tableau URLs in \`pages/Map.js\`
4. Deploy to your preferred hosting platform

---

## Project Structure

\`\`\`
├── components/
│   ├── CategoryTabs.jsx     # Navigation tabs for health categories
│   ├── Header.jsx           # Main header with logo and title
│   ├── Logo.jsx             # Project logo component
│   ├── MapSection.jsx       # Tableau map display component
│   └── ProjectReadme.jsx    # This file - contains README content
├── pages/
│   ├── About.js             # About page with project information
│   └── Map.js               # Main map page with category data
├── entities/
│   └── HealthCategory.json  # Data structure for health categories
└── Layout.js                # Main layout wrapper
\`\`\`

---

**Note:** Copy this content to create a README.md file in your project root when exporting.
`;

  return (
    <div className="hidden">
      {/* This component is hidden and only used to store README content */}
      <pre>{readmeContent}</pre>
    </div>
  );
}