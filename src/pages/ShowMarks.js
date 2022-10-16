import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../axios';

const ShowMarks = ({std = 1}) => {
 
  const [marks, setMarks] = useState([]);
  const [stdName, setStdName] = useState('');

  useEffect(() => {
    const getData = async () => {
      let letvar = await axios.get(`http://localhost:3006/marks/view/${std}`)
      .then((response) => {
        setStdName(response.data[0].name);
        setMarks(response.data);
      })
      .catch((error) => console.log(error));
    };
    getData();
  }, []);

  return (
    <div className='pl-64 pr-64 pt-20 pb-20 bg-gray-50 flex justify-center' id='showmarks'>
      <div className='mb-10 mt-10 p-10 bg-white rounded xl:w-5/12 lg:w-6/12 shadow-lg'>
        <h2>{stdName}</h2>
        <table class='table'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>Course Name</th>
              <th scope='col'>Marks</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((student, key) => {
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
    </div>
  );
};

export default ShowMarks;
