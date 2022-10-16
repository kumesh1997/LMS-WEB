import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninOutContainer from './Containers';
import ShowMarks from './pages/ShowMarks';
import Enroll from './Screens/Enroll';
import ShowCourses from './Screens/ShowCourses';
import AddMarks from './Components/AddMarks/AddMarks';
import Navbar from './Components/navbar/Navbar';
import Announcements from './Screens/Teacher/Announcements';
import SideNavbar from "./Components/SideNavbar";
import { Grid } from '@material-ui/core';
import { useState } from 'react';

function App() {

  const [teacture, setTeacher] = useState(true);
  return (
    <div className='flex'>
      {/* <Router>
        <Routes>
        <Route path='/' element={ <ShowCourses />}/>
          <Route path='/marks' element={ <AddMarks />}/>
          <Route path='/announce' element={ <Announcements />}/>
          <Route path='/showmarks' element={ <ShowMarks />}/>
          <Route path='/enroll' element={ <Enroll />}/>
        </Routes>
      </Router> */}
     
      {/* <h1 className=" font-bold text-2xl text-center text-lms-dark-blue">LMS - Web Application</h1>
      <button type="button" class="btn btn-primary">Primary</button> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SigninOutContainer /> */}
      
      {/* <Grid  className='sidenav'>
        <SideNavbar/>
      </Grid> */}
      <Grid lg={12} className='content'>
      
      {/* <Enroll /> */}
      <Navbar teacher={teacture} />
      <ShowCourses />
      <ShowMarks />
     { teacture && <AddMarks />}
     { teacture && <Announcements />}
     
    
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
