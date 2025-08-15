import React from 'react'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24
    xl:px-40 text-center w-full overflow-hidden text-gray-700'>
        
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl-leading-[95px]
        max-w-5xl'>
            Turning imaginations into <span className='bg-gradient-to-r from-[#'>digital</span> impact.
        </h1>
    </div>
  )
}

export default Hero