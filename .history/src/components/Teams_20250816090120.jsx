import React from 'react';
import Title from './Title';

const Teams = () => {
  const teamData = [
    {
      name: 'Wanjiku Mwangi',
      title: 'CEO & Founder',
      image: '/wanjiku-ceo.jpeg' // Kenyan female executive
    },
    {
      name: 'Kamau Otieno',
      title: 'Vice President',
      image: '/kamau-vp.jpg' // Kenyan male professional
    },
    {
      name: 'Auma Okoth',
      title: 'Performance Manager',
      image: '/auma-pm.jpg' // Kenyan female manager
    },
    {
      name: 'Juma Were',
      title: 'Ads Manager',
      image: '/juma-ads.jpg' // Kenyan male marketer
    },
    {
      name: 'Nyambura Kariuki',
      title: 'Content Writer',
      image: '/nyambura-writer.jpeg' // Kenyan female writer
    },
    {
      name: 'Omondi Onyango',
      title: 'Content Marketer',
      image: '/omondi-marketer.jpg' // Kenyan male professional
    },
    {
      name: 'Adhiambo Atieno',
      title: 'Marketing & Sales',
      image: '/adhiambo-sales.jpg' // Kenyan female sales executive
    },
    {
      name: 'Mwangi Githinji',
      title: 'Senior Writer',
      image: '/mwangi-senior-writer.jpg' // Kenyan male senior professional
    }
  ];

  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-gray-100'>
      <Title 
        title='Meet the team' 
        desc='A passionate team of digital experts dedicated to your brand's success.' 
      />
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full'>
        {teamData.map((team, index) => (
          <div 
            key={index} 
            className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl shadow-gray-100 dark:shadow-gray-900 hover:scale-103 transition-all duration-400'
          >
            <img 
              src={team.image} 
              className='w-12 h-12 rounded-full object-cover border-2 border-blue-500' 
              alt={`${team.name}, ${team.title}`}
            />
            <div className='flex-1'>
              <h3 className='font-bold text-sm'>{team.name}</h3>
              <p className='text-xs opacity-60 dark:opacity-80'>{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;