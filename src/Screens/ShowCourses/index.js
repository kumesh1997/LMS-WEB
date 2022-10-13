import React from 'react'
import CourseCard from '../../Components/CourseCard';
import RoundedInput from '../../Components/RoundedInput';

function ShowCourses() {
  return (
    <div id='show-courses' className=' m-2'>
      <div className=' flex justify-center m-2 bg-lms-green p-2'>
        <RoundedInput placeholder='Search' extraTailwindClasses='border-black' />
      </div>
     
        <CourseCard name='DSA' year='2019/2020'/>
        <CourseCard name='DBMS' year='2020/2021'/>
        <CourseCard />
        <CourseCard />
    </div>
  )
}

export default ShowCourses;