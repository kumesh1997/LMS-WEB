import React from 'react';

function CourseCard({ name = 'course Name', courseId ="Course ID", year = 'Year', link = 'link', onClickHandler }) {
  return (
   
    <div
      className='rounded overflow-hidden shadow-lg h-80 w-80 duration-500 hover:text-gray-400 bg-white mb-10  '
      onClick={onClickHandler}>
      <div className='relative h-40 w-80'>
        <img
          className='absolute inset-0 w-full h-full object-cover '
          src={link}
          alt='Sunset in the mountains'
        />
      </div>

      <div className='px-6 py-4 '>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{courseId}</p>
        <p className='text-gray-700 text-base'>{year}</p>
      </div>
    </div>
  );
}

export default CourseCard;
