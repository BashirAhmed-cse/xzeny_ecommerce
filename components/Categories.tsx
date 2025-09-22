import React from 'react';

const Categories = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Find the <span className="text-orange-500">Relief</span> That Fits You
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {[
          { name: "Insoles", icon: "👣" },
          { name: "Footwear", icon: "👟" },
          { name: "Massagers", icon: "💆" },
          { name: "Pads", icon: "🦶" },
          { name: "Socks", icon: "🧦" },
        ].map((category, index) => (
          <div 
            key={index} 
            className="relative group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-200 p-6 flex flex-col items-center justify-center"
          >
            <div className="text-4xl mb-3">{category.icon}</div>
            <span className="text-gray-900 font-medium text-center">{category.name}</span>
            
            {/* Hover effect indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-orange-500 transition-colors duration-300 rounded-b-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;