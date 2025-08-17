import React from 'react'
import Title from './Title'

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800'>
        <Title title='Meet the team' desc='A passionate team of digital experts dedicated to your brands success.' />
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {teamData}
        </div>
        Teams
    </div>
  )
}

export default Teams