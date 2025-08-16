import React from 'react';
import Title from './Title';
import { 
  FaBullhorn,         // Advertising
  FaChartLine,        // Content Marketing
  FaPenAlt,           // Content Writing
  FaHashtag,          // Social Media
  FaLightbulb,        // Strategy (if needed)
  FaLaptopCode        // Development (if needed)
} from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: <FaBullhorn className="text-2xl text-blue-500" />
    },
    {
      title: 'Content Marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: <FaChartLine className="text-2xl text-green-500" />
    },
    {
      title: 'Content Writing',
      description: 'We help you create a marketing strategy that drives results.',
      icon: <FaPenAlt className="text-2xl text-purple-500" />
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong social media presence and engage with your audience.',
      icon: <FaHashtag className="text-2xl text-pink-500" />
    }
  ];

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title 
        title='How can we help?' 
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-blue-50 dark:bg-gray-700">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        {servicesData.map(() =)}
      </div>
    </div>
  );
};

export default Services;