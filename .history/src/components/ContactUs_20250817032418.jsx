import React from 'react'
import Title from './Title'
import { FaEnvelope, FaUser } from 'react-icons/fa'; // Import the icon

const ContactUs = () => {
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
    text-gray-700'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your
        business forward.' />

        <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex items-center pl-3 rounded-lg border border-gray-300'>
                    {/* Use the React icon component instead of the img tag */}
                    <FaUser className='text-gray-400' size={20} />
                    <input
                        type='text'
                        placeholder='Enter your name'
                        className='w-full p-3 text-sm outline-none' required
                    />
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex items-center pl-3 rounded-lg border border-gray-300'>
                    {/* Use the React icon component instead of the img tag */}
                    <FaEnvelope className='text-gray-400' size={20} />
                    <input
                        type='email'
                        placeholder='Enter your email'
                        className='w-full p-3 text-sm outline-none' required
                    />
                </div>
            </div>
            
        </form>
    </div>
  )
}

export default ContactUs;