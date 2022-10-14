import React from 'react';
import SigninOutContainer from './Containers';
import ShowMarks from './pages/ShowMarks';
import Enroll from './Screens/Enroll';
import ShowCourses from './Screens/ShowCourses';
import AddMarks from './Components/AddMarks/AddMarks';

function App() {
  return (
    <div className=''>
      {/* <h1 className=" font-bold text-2xl text-center text-lms-dark-blue">LMS - Web Application</h1>
      <button type="button" class="btn btn-primary">Primary</button> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SigninOutContainer/> */}
      <ShowCourses />
      {/* <Enroll /> */}
      <ShowMarks />
      <AddMarks />
    </div>
  );
}

export default App;
