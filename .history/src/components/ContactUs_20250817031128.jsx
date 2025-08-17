import React from 'react'
import Title from './Title'

const ContactUs = () => {
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
    text-gray-700'>
        <Title title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your
        business forward.' />

        <form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div>
                    <img src={assets}
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactUs