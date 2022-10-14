import React from 'react';

const ShowMarks = () => {
  const marks = [
    {
      course: 'Information System Modelling',
      marks: 87,
    },
    {
      course: 'Operation Management',
      marks: 90,
    },
    {
      course: 'Data Stuctures & Algorithms',
      marks: 56,
    },
  ];

  return (
    <div className=' p-20'>
      <h2>Student Name</h2>
      <table class='table'>
        <thead class='thead-dark'>
          <tr>
            <th scope='col'>Course Name</th>
            <th scope='col'>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((student) => {
            return (
              <tr>
                <td>{student.course}</td>
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
