import React, { useState, useRef } from 'react';

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ 
      x: e.clientX - bounds.left, 
      y: e.clientY - bounds.top 
    });
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative h-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
    >
      {/* Animated gradient background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 ${visible ? 'opacity-10' : ''}`}
        style={{
          transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%)`,
          backgroundPosition: `${position.x}px ${position.y}px`
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col sm:flex-row items-center gap-6">
        <div className={`p-4 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg`}>
          {service.icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;