import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const AddMarks = () => {
  return (
    <div className='flex justify-center bg-violet-200'>
      <div className='mb-10 mt-10 p-10 bg-white rounded xl:w-5/12 lg:w-6/12 sm: '>
        <h2>Add Marks</h2>
        <Form action=''>
          <Form.Group className='mb-3'>
            <Form.Label>Student Name</Form.Label>
            <Form.Control type='text' placeholder='Student Number' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Subject</Form.Label>
            <Form.Select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
