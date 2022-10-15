import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from 'react';

const AddMarks = () => {

  const [userId, setUserId] = useState(0);
  const [subjectIdList, setSubjectIdList] = useState([]);
  const [subjectId, setSubjectId] = useState("");
  const [marks, setMarks] = useState(0);

  useEffect(() => {
    const getSubId = async () => {
      let data = await axios.get('http://localhost:3006/course/getCourses')
      .then((response) => {
        setSubjectIdList(response.data);
      })
      .catch((error) => console.log(error));
    };
    getSubId();
  }, []);



  const handleOnSubmit = () => {
    const postMarks = async () => {
      let data = await axios.post('http://localhost:3006/marks/new',
      {
        "marks" : 10,
        "courseId" : "INTE 21212",
        "userId" : 4
      })
      .then((response) => {
        setSubjectIdList(response.data);
      })
      .catch((error) => console.log(error));
    };
    postMarks();
  }


  return (

    <div className='flex justify-center bg-gray-50'>
      <div className='mb-10 mt-10 p-10 bg-white rounded xl:w-5/12 lg:w-6/12 shadow-lg'>
        <h2>Add Marks</h2>
        <Form action='' onSubmit={handleOnSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Student Number</Form.Label>
            <Form.Control type='text' placeholder='Student Number' onChange={(e) =>setUserId(e.target.value) } />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Subject</Form.Label>
            <Form.Select>
              {
                subjectIdList.map((subid,key) => {
                  return <option key={key}>{subid.courseId}</option>
                })
              }
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Marks</Form.Label>
            <Form.Control type='text' placeholder='Add Marks' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddMarks;
