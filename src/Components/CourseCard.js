import React from 'react'

function CourseCard({ name = "course Name", year = "Year", onClickHandler}) {
  return (
    <div id='card' className='p-2 xl:text-left lg:text-left sm:text-center border-b-2 border-gray-500 duration-1000 hover:bg-lms-gray hover:text-white' onClick={onClickHandler}>
      <div id='description-body'>
          <p id='course-name' className=' font-semibold text-blue-900 text-xl leading-3'>{name}</p>
          <p id='course-year' className=' text-sm'>({year})</p>
      </div>
    </div>
  )
}

export default CourseCard;