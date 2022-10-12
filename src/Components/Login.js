import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const Login = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '80vh', width: 400, margin: "auto" }
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
                            <Field as={TextField} label='Username' name='username' placeholder="Enter username"
                                helperText={<ErrorMessage name="username" />}
                                fullWidth required />
                            <Field as={TextField} label='Password' name='password' placeholder="Enter Passsword" type='password'
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