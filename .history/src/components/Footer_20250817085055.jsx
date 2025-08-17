import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-50 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        {/* Footer top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700'>
                <img src='/logo.png' className='w-32 sm:w-44' alt=''/>
                <p className='max-w-md'>From strategy to execution, we craft digital solutions that 
                    move your business forward.</p>

                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href='#hero'>Home</a></li>
                    <li><a className='hover:text-primary' href='#service'>Services</a></li>
                    <li><a className='hover:text-primary' href='#our-work'>Our Work</a></li>
                    <li><a className='hover:text-primary' href='#contact-us'>Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer