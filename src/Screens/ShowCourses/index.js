import React, { useState } from 'react';
import { useEffect } from 'react';
import CourseCard from '../../Components/CourseCard';
import RoundedInput from '../../Components/RoundedInput';
import Enroll from '../Enroll';
import axios from '../../axios';

function ShowCourses() {


  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  function handleClick() {
    setOpen(true);
  }

  function CloseModel() {
    setOpen(false);
  }


   useEffect (() =>{
    axios.get('http://localhost:3006/course/getCourses') 
        .then(response => {
         // console.log("Done")
          //setCourses(response.data);
         console.log(response.data);
          setData(response.data)
        })
        .catch(error => 
          console.log(error))
   },[])

   const arr = data.map((data,index) => {
    return (
      <CourseCard key={index} name={data.courseName} courseId={data.courseId}/>
    )
   })
      

  return (
    <div id='show-courses' className=' m-2 bg-violet-200'>
      <div className=' flex justify-center mb-6 bg-lms-green p-2'>
        <RoundedInput placeholder='Search' extraTailwindClasses='border-black' />
      </div>
      <div className='grid grid-cols-4 gap-20'>
        {/* <CourseCard
          name='Data Stuctures & Algorithms'
          year='2019/2020'
          link='https://miro.medium.com/max/1200/1*2rKGJ6h1regwmfMcty3SLw.png'
          onClickHandler={handleClick}
        /> */}
     

{/* <CourseCard>
        {
          courses.map((Acourse,key) => {
            <CourseCard key={key} name={Acourse.courseName}/>
          })
        }
        </CourseCard> */}
        {/* {marks.map((student,key) => {
            return (
              <tr key={key}>
                <td>{student.courseName}</td>
                <td>{student.marks}</td>
              </tr>
            );
          })} */}
        {arr}
      </div>

      {open && <Enroll closeModel={CloseModel} />}
    </div>
  );
}

export default ShowCourses;
