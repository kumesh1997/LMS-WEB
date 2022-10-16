import React, { Fragment,Component } from "react";
import { Button, Card, Grid, TextField, Typography} from "@mui/material";
import {Box, spacing} from "@mui/system"
import SendIcon from '@mui/icons-material/Send';
    
class Announcement extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toEmail: [],
            subject: '',
            bodyText:''
         };
    }
    receivers = [
        {
            "student_id": "1",
            "email": "sajee.thamanga@gmail.com",
        },
        {
            "student_id": "2",
            "email": "tharindukumesh09@gmail.com",
        }
    ];
    handleSubmit = async (e) => {
        e.preventDefault()
        this.receivers.map((data) => {
            this.state.toEmail.push(JSON.stringify(data.email));
        })
        // this.setState({
        //     toEmail:this.receivers
        // })
        console.log(this.state.toEmail)
        const post = {
            "toEmail": this.state.toEmail,
            "subject": this.state.subject,
            "body": this.state.bodyText,
        }
        await fetch("http://localhost:3006/teacher/send-email",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(post)
        }).then(()=>{
            this.setState({subject:''})
            this.setState({bodyText:''})
            this.setState({toEmail:[]})
        })
    }


    render() {
        return (
            <Fragment>
                <Box sx={{m:5, p:5 }}>
                    <Card sx={{boxShadow:'10px'}}>
                        <form onSubmit={this.handleSubmit}>
                                
                            <Grid
                                container
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                display='flex'
                                justifyContent='center'
                            >
                                <Typography 
                                    variant="h4" sx={{pt:10}} 
                                >
                                    Annoucement
                                </Typography>
                                <Grid
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    // item
                                    display='flex'
                                    justifyContent='center'
                                >
                                    <TextField 
                                        id="subject"
                                        label="Subject"
                                        value={this.state.subject} 
                                        onChange={(e)=>this.setState({subject:e.target.value})}
                                        sx={{m:5, width:'40%'}}
                                        size="small"
                                        required
                                    />     
                                </Grid>   
                                
                                <Grid
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    // item
                                    display='flex'
                                    justifyContent='center'
                                    >
                                    <TextField 
                                        id="bodyText"
                                        label="Body"
                                        value={this.state.bodyText} 
                                        onChange={(e)=>this.setState({bodyText:e.target.value})}
                                        variant="outlined" 
                                        multiline
                                        rows={5}
                                        sx={{m:5, width:'40%'}}
                                        required
                                    />     
                                </Grid>   
                                <Grid
                                    // item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    sx={{p:5}}
                                    display='flex'
                                    justifyContent='center'
                                >
                                    <Button 
                                        variant="contained"
                                        color="error"
                                        type="submit"
                                        endIcon={<SendIcon />}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>  

                        </form>  
                    </Card>
                </Box>
            </Fragment>
        );
    }
}

export default Announcement;