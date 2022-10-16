import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const paperStyle = { padding: 20, height: '90vh', width: 400, margin: "auto" }
    const avatarStyle = { backgroundColor: '#3ac6a2' }
    const btnStyle = { margin: '8px 0' }
    const linkStyle = { textDecoration: 'none', margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
   
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('Please enter valid email')
            .required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

        console.log(props)
    }
    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
      };
      
    
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                              <FormControl sx={{mt:2,ml:0,  minWidth: 200 }} size="small">
                                <InputLabel>Role</InputLabel>
                                <Select
                                    
                                    id="roleId"
                                    value={role}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"lecturer"}>Lecturer</MenuItem>
                                    <MenuItem value={"student"}>Student</MenuItem>
                                    <MenuItem value={"admin"}>Admin</MenuItem>
                                </Select>
                            </FormControl>
                            <Field as={TextField} label='Username' name='username' placeholder="Enter username" value={name} onChange={(e) => {setName(e.target.value)}}
                                helperText={<ErrorMessage name="username" />}
                                fullWidth required />
                            <Field as={TextField} label='Password' name='password' placeholder="Enter Passsword" type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}
                                helperText={<ErrorMessage name="password" />}
                                fullWidth required />
                            <Field as={FormControlLabel}
                                control={
                                    <Checkbox
                                        name="remember"
                                        color="primary"

                                    />
                                }
                                label="Remember me"
                            />
                            <Button type="submit" color="primary" variant="contained" disabled={props.isSubmitting} style={btnStyle} fullWidth>{props.isSubmitting ? "Loading..." : "Sign in"}</Button>
                            <Typography>
                                <Link href="#" onClick={() => handleChange("event", 1)} style={linkStyle}>
                                    Forget Password
                                </Link>
                            </Typography>
                        </Form>
                    )}
                </Formik>
                <Typography><h8> Do you have an account ?</h8>
                    <Link href="#" onClick={() => handleChange("event", 1)} style={linkStyle}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
export default Login