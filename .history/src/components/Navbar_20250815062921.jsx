import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
    sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>
        
        <img src='/dox.png' className='w-32 sm:w-40' alt=''/>

        <div className='text-gray-700 sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixe'>
            <a href='#' className='sm:hover:border-b'>Home</a>
            <a href='#services' className='sm:hover:border-b'>services</a>
            <a href='#our-work' className='sm:hover:border-b'>Our Work</a>
            <a href='#contact-us' className='sm:hover:border-b'>Contact Us</a>
        </div>
    </div>
  )
}

export default Navbar