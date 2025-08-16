import React from 'react';

const Title = ({title, desc}) => {
  return (
    <div className='flex flex-col items-center'> {/* Ensures centering */}
      <h2 className='text-3xl sm:text-5xl font-medium text-gray-800 dark:text-white mb-4'>
        {title}
      </h2>
      <p className='max-w-2xl text-gray-500 dark:text-white/75 px-4'>
        {desc}
      </p>
    </div>
  );
};

export default Title;