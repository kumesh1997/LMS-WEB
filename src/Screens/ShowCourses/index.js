import React, { useState } from 'react'
import CourseCard from '../../Components/CourseCard';
import RoundedInput from '../../Components/RoundedInput';
import Enroll from '../Enroll';



function ShowCourses() {

  const [ open, setOpen] = useState(false);

  function handleClick(){
    setOpen(true);
  }

  function CloseModel(){
    setOpen(false);
  }

  return (
    <div id='show-courses' className=' m-2'>
      <div className=' flex justify-center m-2 bg-lms-green p-2'>
        <RoundedInput placeholder='Search' extraTailwindClasses='border-black' />
      </div>
     
        <CourseCard name='Data Stuctures & Algorithms' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Ddatabase Management Systems' year='2020/2021'onClickHandler={handleClick}/>
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Information System Modelling' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Data Stuctures & Algorithms' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Ddatabase Management Systems' year='2020/2021'onClickHandler={handleClick}/>
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Information System Modelling' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Data Stuctures & Algorithms' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Ddatabase Management Systems' year='2020/2021'onClickHandler={handleClick}/>
        <CourseCard name='Operation Mnanagement' year='2019/2020' onClickHandler={handleClick}/>
        <CourseCard name='Information System Modelling' year='2019/2020' onClickHandler={handleClick}/>

        {
          open && <Enroll closeModel={CloseModel} />
        }
    </div>
  )
}

export default ShowCourses;