import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninOutContainer from './Containers';
import ShowMarks from './pages/ShowMarks';
import Enroll from './Screens/Enroll';
import ShowCourses from './Screens/ShowCourses';
import AddMarks from './Components/AddMarks/AddMarks';
import Navbar from './Components/navbar/Navbar';
import Announcements from './Screens/Teacher/Announcements';
import SideNavbar from "./Components/SideNavbar";
import { Grid } from '@material-ui/core';
import Post from './Screens/Teacher/Post';
import Announcement from './Screens/Teacher/Announcement';

function App() {
  return (
    <div className='flex'>
      {/* <Navbar /> */}
      {/* <h1 className=" font-bold text-2xl text-center text-lms-dark-blue">LMS - Web Application</h1>
      <button type="button" class="btn btn-primary">Primary</button> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SigninOutContainer /> */}
      
      <Grid  className='sidenav'>
        <SideNavbar/>
      </Grid>
      <Grid lg={12} className='content'>
      {/* <ShowCourses /> */}
      {/* <Enroll /> */}
      {/* <Post/> */}
      <Announcement /> 
      {/* <ShowMarks /> */}
      {/* <AddMarks /> */}
      </Grid>

       
      {/* <BrowserRouter>
          <Routes>
            <Route
              component={<Announcements />}
              path="/"
            />
          </Routes>
      </BrowserRouter> */}
     
    </div>
  );
}

export default App;
