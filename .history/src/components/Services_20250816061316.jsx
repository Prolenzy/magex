import React from 'react';
import Title from './Title';
import { 
  FaBullhorn, FaChartLine, FaPenAlt, FaHashtag 
} from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: <FaBullhorn className="text-3xl" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Content Marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: <FaChartLine className="text-3xl" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Content Writing',
      description: 'We help you create a marketing strategy that drives results.',
      icon: <FaPenAlt className="text-3xl" />,
      color: 'from-purple-500 to-fuchsia-500'
    },
    {
      title: 'Social Media',
      description: 'We help you build a strong social media presence and engage with your audience.',
      icon: <FaHashtag className="text-3xl" />,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id='services' className='relative py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto'>
        <Title 
          title='How can we help?' 
          desc='From strategy to execution, we craft digital solutions that move your business forward.'
        />
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;