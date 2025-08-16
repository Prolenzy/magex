import React from 'react'

const Trustedby = () => {
  return (
    <div>
        <h3 className='font-semibold'>Trusted by Leading Companies</h3>
        <div>
            {company_logos.map((logo, index) => (
                <img key={index} src={logo} alt='' className='max'
            ))}
        </div>
    </div>
  )
}

export default Trustedby