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
                    <li><a className='hover:text-primary' href='#services'>Services</a></li>
                    <li><a className='hover:text-primary' href='#our-work'>Our Work</a></li>
                    <li><a className='hover:text-primary' href='#contact-us'>Contact Us</a></li>
                </ul>
            </div>
            <div className='text-gray-600'>
                <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='flex gap-2 text-sm'>
                    <input type='email' placeholder='Enter your email' className='w-full p-3 text-sm outline-none 
                    rounded bg-transparent border border-gray-300' />
                    <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr className='border-gray-300 my-6' />

        {/* Footer bottom */}
        <div>
            <p>&copy; 2025 <a href='https://contentandcodebycharles.com/' target='_blank' rel='noopener noreferrer' 
            className='hover:underline'>Content & Code by Charles</a> - All Rights Reserved.</p>
            <div className='flex gap-4'>
                    <a href='https://www.facebook.com/kimotho.kyalo' target='_blank' rel='noopener noreferrer' 
                    aria-label='Facebook' className='hover:text-white transition-colors duration-300'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='https://x.com/pizzchzz' target='_blank' rel='noopener noreferrer' aria-label='Twitter' className='hover:text-white transition-colors duration-300'>
                        <FaTwitter size={24} />
                    </a>
                    <a href='https://www.linkedin.com/in/charles-kimotho-full-stack-developer/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:text-white transition-colors duration-300'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='https://github.com/Prolenzy' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='hover:text-white transition-colors duration-300'>
                        <FaGithub size={24} />
                    </a>
                </div>
        </div>
    </div>
  )
}

export default Footer