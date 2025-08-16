import React from 'react'
import Title from './Title'

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile app marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: <img src='/mobile.jpeg' alt=''/>
        },
         {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver results.',
            image: <img src='/dashboard.jpeg' alt=''/>
        },
         {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results',
            image: <img src='/fitness.jpeg' alt=''/>
        }
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700'>
        <Title title='Our latest work' desc='From Strategy to Execution, we craft digital solutions that move your 
        business forward.' />
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work, index)=>(
                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} className='w-full rounded-xl' alt='' />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p>{work.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurWork