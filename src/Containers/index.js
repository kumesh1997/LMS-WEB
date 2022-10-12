import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

const SigninOutContainer = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const PaperStyle = { width: 402, margin: "20px auto" }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper elevation={20} style={PaperStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign in" />
        <Tab label="Sign up" />
      </Tabs>
      <TabPanel value={value} index={0}><Login handleChange={handleChange} /></TabPanel>
      <TabPanel value={value} index={1}><Signup /></TabPanel>
    </Paper>
  )
}

export default SigninOutContainer