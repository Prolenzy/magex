import React from 'react'

const Title = ({title, desc}) => {
  return (
    <>
      <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
      <p className='max-w'>{desc}</p>
    </>
  )
}

export default Title
