import React, { useEffect } from "react";

const EMBED_CONFIGS = {
  'mental-health': {
    id: 'viz1753069733987',
    html: `<div class='tableauPlaceholder' id='viz1753069733987' style='position: relative'><noscript><a href='#'><img alt='MHSA ' src='https://public.tableau.com/static/images/DH/DHM_MHSA/MHSA/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DHM_MHSA/MHSA' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/DH/DHM_MHSA/MHSA/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  'health-program': {
    id: 'viz1753070327602',
    html: `<div class='tableauPlaceholder' id='viz1753070327602' style='position: relative'><noscript><a href='#'><img alt='HPA ' src='https://public.tableau.com/static/images/DH/DHM_HPA/HPA/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DHM_HPA/HPA' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/DH/DHM_HPA/HPA/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  'urgent-care': {
    id: 'viz1753070394526',
    html: `<div class='tableauPlaceholder' id='viz1753070394526' style='position: relative'><noscript><a href='#'><img alt='UCAH ' src='https://public.tableau.com/static/images/PS/PSY8GZKWS/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='path' value='shared/PSY8GZKWS' /> <param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/PS/PSY8GZKWS/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  'uninsured': {
    id: 'viz1753070460439',
    html: `<div class='tableauPlaceholder' id='viz1753070460439' style='position: relative'><noscript><a href='#'><img alt='UIUI ' src='https://public.tableau.com/static/images/DH/DHM_UIUI/UIUI/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DHM_UIUI/UIUI' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/DH/DHM_UIUI/UIUI/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  'military': {
    id: 'viz1753070477883',
    html: `<div class='tableauPlaceholder' id='viz1753070477883' style='position: relative'><noscript><a href='#'><img alt='MV ' src='https://public.tableau.com/static/images/DH/DHM_MV/MV/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DHM_MV/MV' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/DH/DHM_MV/MV/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  },
  'safer-sex': {
    id: 'viz1753070498553',
    html: `<div class='tableauPlaceholder' id='viz1753070498553' style='position: relative'><noscript><a href='#'><img alt='SSST ' src='https://public.tableau.com/static/images/DH/DHM_SSSTIT/SSST/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='DHM_SSSTIT/SSST' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/DH/DHM_SSSTIT/SSST/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`
  }
};

/**
 * This component displays the color-coded header and the embedded Tableau map
 * for the currently selected health category.
 * @param {object} props - Component props.
 * @param {object} props.activeCategory - The full object for the active category.
 */
export default function MapSection({ activeCategory }) {
  useEffect(() => {
    if (activeCategory && EMBED_CONFIGS[activeCategory.id]) {
      const { id } = EMBED_CONFIGS[activeCategory.id];
      const scriptId = `tableau-embed-script-${activeCategory.id}`;
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'text/javascript';
        script.innerHTML = `
          var divElement = document.getElementById('${id}');
          var vizElement = divElement.getElementsByTagName('object')[0];
          if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1280px';vizElement.style.height='707px';} else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1280px';vizElement.style.height='707px';} else { vizElement.style.width='100%';vizElement.style.height='727px';}
          var scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        `;
        document.body.appendChild(script);
      }
      return () => {
        const script = document.getElementById(scriptId);
        if (script) document.body.removeChild(script);
      };
    }
  }, [activeCategory]);

  if (!activeCategory) return null;

  const { title, description, icon: IconComponent, color, tableau_url, id } = activeCategory;

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
            <div className="w-full h-full flex justify-center items-center">
              {EMBED_CONFIGS[id] ? (
                <div
                  dangerouslySetInnerHTML={{ __html: EMBED_CONFIGS[id].html }}
                  style={{ width: '100%' }}
                />
              ) : (
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
              )}
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