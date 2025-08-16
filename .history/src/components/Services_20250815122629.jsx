import React from 'react'

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            icon: 
        },
        {
            title: 'Content Marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: 
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: 
        },
        {
            title: 'Social Media',
            description: 'We help you build a strong social media presence and engage with your
            audience.',
            icon: 
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
        Services
    </div>
  )
}

export default Services