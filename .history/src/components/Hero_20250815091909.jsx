import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24
    xl:px-40 text-center w-full overflow-hidden text-gray-700'>
        
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl-leading-[95px]
        max-w-5xl'>
            Turning imaginations into <span className='bg-gradient-to-r from-[#5044e5]
            to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
        </h1>

        <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75
        max-w-4/5 sm:max-w-lg pm-3'>creating meaningful connections and turning big ideas 
        into interactive digital 
            experiences</p>

            <div c>
                <img src='' alt='' className='w-full max-w-6xl'/>
            </div>
    </div>
  )
}

export default Hero