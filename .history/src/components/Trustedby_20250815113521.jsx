import React from 'react'

const Trustedby = () => {
  return (
    <div>
        <h3 className='font-semibold'>Trusted by Leading Companies</h3>
        <div>
            {company_logos.map((logo, index) => (
                <img src={logo} alt=''
            ))}
        </div>
    </div>
  )
}

export default Trustedby