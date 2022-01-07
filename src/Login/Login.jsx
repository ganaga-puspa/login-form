import React, { useState } from "react";
import { Card, Container, FormGroup, Input, Row, Label, Col, Button } from "reactstrap";
import Swal from "sweetalert2" 

export default function Login() {

    const [userName,setUsername] = useState("")
    const [userPassword,setUserpassword] = useState("")
    


    const username = (e)=>{
        setUsername(e.target.value)
    }

    const userpassword =(e) =>{
        setUserpassword(e.target.value)
    }

    const formSubmit=(e)  =>{
        e.preventDefault();

        if(userName ==="demo" && userPassword ==="1234"){
            // alert("success")
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: true,
                // timer: 1500
              })
         console.log(`name: ${userName} ,password:${userPassword}`)

        }
        else{
           
            // alert("check it")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invaild Username & Password',
                showConfirmButton: true,
              })
             
        }
        setUsername(" ")
        setUserpassword(" ")
        // console.log(`name: ${userName} ,password:${userPassword}`)
    }

  return (
    <Container>
      <br />
      <Card style={{padding:'20px'}}>
          {/* <form onSubmit={formSubmit}> */}
        <FormGroup>
          <br />
          <div style={{textAlign:'center'}}>
            <h2 >Login Form</h2>
          </div>
          <br />
          <Row>
            <Col>
              <Label>Username</Label>
              <Input type="text" id="name" name="name" onChange={username} required />
            </Col>
            <Col>
              <Label>Password</Label>

              <Input type="password" id="password" name="password" onChange={userpassword} />
            </Col>

            
          </Row>
          <br />

          <div style={{textAlign:'center'}}>
                <Button style={{backgroundColor:'#0e287e',width:'180px'}} type="submit" onClick={formSubmit} >
                    Login
                </Button>
            </div>
        </FormGroup>
        {/* </form> */}
      </Card>
    </Container>
  );
}
