import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useState } from "react";


const Signup = () => {

    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, SetEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const paperStyle = { padding: 20, height: '90vh', width: 400, margin: "auto" }
    const avatarStyle = { backgroundColor: '#3ac6a2' }
    const phnStyle = { marginTop: 5 }
    const headerStyle = { margin: 0 }
    const btnStyle = { margin: '8px 0' }
    //const marginArround ={height:'3vh',width:80}
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        address: '',
        accept: false,
        password: ''

    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email('Please enter valid email')
            .required("Required"),
        phone: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        remember: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        console.log(props)
    }
    const marginTop = { marginTop: 8 }
  

  const handleChange = (event) => {
    setRole(event.target.value);
  };
   

  const handleOnSubmit= () => {
    const registerUser = async () => {
        let dataste = await axios.post('http://localhost:3006/user/register',
        {  
            "name" : name,
            "email" : email,
            "mobileNumebr" : phone,
            "address" : address,
            "password" : password,
            "birthday" : "",
            "gender" : gender,
            "role" : role
          
        })
        .then((response) => {
          
        })
        .catch((error) => console.log(error));
      };
      registerUser();
  }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><AddCircleOutlineIcon /></Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant="caption" gutterBottom>Please fill this form to create an account</Typography>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form onSubmit={handleOnSubmit}>
                        <FormControl sx={{mt:2,ml:0,  minWidth: 200 }} size="small">
                                <InputLabel>Role</InputLabel>
                                <Select
                                    
                                    id="roleId"
                                    value={role}
                                    label="Age"
                                    onChange={(e) => {setRole(e.target.value)}}
                                >
                                    <MenuItem value={"lecturer"}>Lecturer</MenuItem>
                                    <MenuItem value={"student"}>Student</MenuItem>
                                    <MenuItem value={"admin"}>Admin</MenuItem>
                                </Select>
                            </FormControl>
                            <Field as={TextField} label='Name' name='name' placeholder="Enter your Name"
                                helperText={<ErrorMessage name="name" />} fullWidth required  onChange={(e) => {setName(e.target.value)}}/>

                            <Field as={TextField} label='Email' name='email' placeholder="Enter your Email"
                                helperText={<ErrorMessage name="email" />} fullWidth required  onChange={(e) => {SetEmail(e.target.value)}}/>

                            <FormControl style={marginTop}>
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    style={{ display: 'initial' }}
                                    helperText={<ErrorMessage name="radioBtn" />}
                                    onChange={(e) => {setGender(e.target.value)}}
                                >
                                    <Field as={FormControlLabel} value="female" control={<Radio />} name='radioBtn' label="Female" />
                                    <Field as={FormControlLabel} value="male" control={<Radio />} name='radioBtn' label="Male" />
                                </RadioGroup>

                            </FormControl>


                            <Field as={TextField} label='Phone' placeholder="Enter your Mobile Number" name='phone'
                                helperText={<ErrorMessage name="phone" style={phnStyle} />} fullWidth required  onChange={(e) => {setPhone(e.target.value)}}/>


                            <Field as={TextField} label='Address' placeholder="Enter your Address" name='address'
                                helperText={<ErrorMessage name="address" />} fullWidth required onChange={(e) => {setAddress(e.target.value)}}/>

                            
                            <Field as={TextField} label='Password' placeholder="Enter Passsword" type='password'
                                helperText={<ErrorMessage name="password" />} name='password' fullWidth required  onChange={(e) => {setPassword(e.target.value)}}/>

                            <FormGroup>
                                <Field as={FormControlLabel} control={<Checkbox defaultChecked name='accept' />} label="I accept the Terms and Condition" helperText={<ErrorMessage name="accept" />} name="accept" />
                                <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} style={btnStyle} fullWidth>{props.isSubmitting ? "Loading..." : "Sign up"}</Button>
                            </FormGroup>
                            
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Signup