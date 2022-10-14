import React, { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from '../../Components/CourseCard';
import RoundedInput from '../../Components/RoundedInput';
import Enroll from '../Enroll';
import axios from '../../axios';

function ShowCourses() {


  const [open, setOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  function handleClick() {
    setOpen(true);
  }

  function CloseModel() {
    setOpen(false);
  }


   useEffect (() =>{
    const getCourses = async () => {
      try {
        let awaiVar = await axios.get('http://localhost:3006/course/getCourses') 
        .then(function (response) {
          console.log("Done")
          console.log(response.data);
          // console.log(response.data);
          // setCourses(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (err) {
        console.log(err);
      }
  }
  getCourses();
});

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

        {
          courses.map((Acourse,key) => {
            <CourseCard key={key} name={""} year='2019/2020' onClickHandler={handleClick}/>
          })
        }
       
        
      </div>

      {open && <Enroll closeModel={CloseModel} />}
    </div>
  );
}

export default ShowCourses;
