import React from "react";
import SigninOutContainer from "./Containers";
import Enroll from "./Screens/Enroll";
import ShowCourses from "./Screens/ShowCourses";



function App() {
  return (
    <div className="">
      {/* <h1 className=" font-bold text-2xl text-center text-lms-dark-blue">LMS - Web Application</h1>
      <button type="button" class="btn btn-primary">Primary</button> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <SigninOutContainer/> */}
      <ShowCourses />
      <Enroll />
    </div>
  );
}

export default App;
