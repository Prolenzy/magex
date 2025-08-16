import React from 'react'
import Title from './Title'

const OurWork = () => {
    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: '/mobile.jpeg'
        },
        {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            image: '/dashboard.jpeg'
        },
        {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results',
            image: '/fitness.jpeg'
        }
    ]

    return (
        <section id='our-work' className='py-16 px-4 sm:px-8 lg:px-16 xl:px-32 bg-gray-50 dark:bg-gray-900'>
            <div className='max-w-7xl mx-auto'>
                {/* Centered Title Section */}
                <div className='text-center mb-12'>
                    <Title 
                        title='Our latest work' 
                        desc='From Strategy to Execution, we craft digital solutions that move your business forward.' 
                    />
                </div>

                {/* Centered Work Grid */}
                <div className='flex justify-center'>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                        {workData.map((work, index) => (
                            <div 
                                key={index} 
                                className='hover:scale-102 duration-500 transition-all cursor-pointer group text-center'
                            >
                                <div className='overflow-hidden rounded-xl mx-auto w-full'>
                                    <img 
                                        src={work.image} 
                                        className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                                        alt={work.title}
                                    />
                                </div>
                                <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                                <p className='text-sm opacity-60 px-4'>{work.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWork