import React from 'react';

function CourseCard({
  name = 'course Name',
  courseId = 'Course Id',
  year = 'year',
  link = 'link',
  onClickHandler,
}) {
  return (
    // <div id='card' className='p-2 xl:text-left lg:text-left sm:text-center border-b-2 border-gray-500 duration-1000 hover:bg-lms-gray hover:text-white' onClick={onClickHandler}>
    //   <div id='description-body'>
    //       <p id='course-name' className=' font-semibold text-blue-900 text-xl leading-3'>{name}</p>
    //       <p id='course-year' className=' text-sm'>({year})</p>
    //   </div>
    // </div>
    <div
      className='rounded overflow-hidden shadow-lg h-80 w-80 duration-500 hover:text-gray-400 bg-white mb-10'
      onClick={onClickHandler}>
      <div className='relative h-40 w-80'>
        <img
          className='absolute inset-0 w-full h-full object-cover '
          src={link}
          // alt='Sunset in the mountains'
        />
      </div>

      <div className='px-6 py-4 '>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{year}</p>
        <p className='text-gray-700 text-base'>{courseId}</p>
      </div>
    </div>
  );
}

export default CourseCard;
