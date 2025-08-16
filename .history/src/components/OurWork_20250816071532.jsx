import React from 'react'
import Title from './Title'

const OurWork = () => {

    const workData = [
        {
            title:
            description:
            image:
        },
         {
            title: 'Dashboard management',
            description: 'We help you execute your plan and deliver',
            image:
        },
         {
            title: 'Fitness app promotion',
            description: 'We help you create a marketing strategy that drives results',
            image:
        }
    ]
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700'>
        <Title title='Our latest work' desc='From Strategy to Execution, we craft digital solutions that move your 
        business forward.' />
    </div>
  )
}

export default OurWork