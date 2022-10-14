import React, { useState } from 'react';
import CourseCard from '../../Components/CourseCard';
import RoundedInput from '../../Components/RoundedInput';
import Enroll from '../Enroll';

function ShowCourses() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function CloseModel() {
    setOpen(false);
  }

  return (
    <div id='show-courses' className=' m-2 bg-violet-200'>
      <div className=' flex justify-center mb-6 bg-lms-green p-2'>
        <RoundedInput placeholder='Search' extraTailwindClasses='border-black' />
      </div>
      <div className='grid grid-cols-4 gap-20'>
        <CourseCard
          name='Data Stuctures & Algorithms'
          year='2019/2020'
          link='https://miro.medium.com/max/1200/1*2rKGJ6h1regwmfMcty3SLw.png'
          onClickHandler={handleClick}
        />
        <CourseCard
          name='Ddatabase Management Systems'
          year='2020/2021'
          link='https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png'
          onClickHandler={handleClick}
        />
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick} />
        <CourseCard
          name='Information System Modelling'
          year='2019/2020'
          onClickHandler={handleClick}
        />
        <CourseCard
          name='Data Stuctures & Algorithms'
          year='2019/2020'
          onClickHandler={handleClick}
        />
        <CourseCard
          name='Ddatabase Management Systems'
          year='2020/2021'
          onClickHandler={handleClick}
        />
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick} />
        <CourseCard
          name='Information System Modelling'
          year='2019/2020'
          onClickHandler={handleClick}
        />
        <CourseCard
          name='Data Stuctures & Algorithms'
          year='2019/2020'
          onClickHandler={handleClick}
        />
        <CourseCard
          name='Ddatabase Management Systems'
          year='2020/2021'
          onClickHandler={handleClick}
        />
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick} />
        <CourseCard
          name='Information System Modelling'
          year='2019/2020'
          onClickHandler={handleClick}
        />
      </div>

      {open && <Enroll closeModel={CloseModel} />}
    </div>
  );
}

export default ShowCourses;
