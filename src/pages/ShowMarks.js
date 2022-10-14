import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axios';


const ShowMarks = () => {
  // const marks = [
  //   {
  //     course: 'Information System Modelling',
  //     marks: 87,
  //   },
  //   {
  //     course: 'Operation Management',
  //     marks: 90,
  //   },
  //   {
  //     course: 'Data Stuctures & Algorithms',
  //     marks: 56,
  //   },
  // ];

  const [marks, setMarks] = useState([]);
  const [stdName, setStdName] = useState("");

  useEffect (() =>{
    const getMarks = async () => {
      try {
        let awaiVar = await axios.get('http://localhost:3006/marks/view/1') 
        .then(function (response) {
          setStdName(response.data[0].name);
          setMarks(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      } catch (err) {
        console.log(err);
      }
  }
  getMarks();
});

  return (
    <div className=' p-20'>
      <h2>{stdName}</h2>
      <table class='table'>
        <thead class='thead-dark'>
          <tr>
            <th scope='col'>Course Name</th>
            <th scope='col'>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((student,key) => {
            return (
              <tr key={key}>
                <td>{student.courseName}</td>
                <td>{student.marks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMarks;
