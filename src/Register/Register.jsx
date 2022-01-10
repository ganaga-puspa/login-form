import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Label,
    Input,
    FormGroup,
    Form,
    Button
  } from "reactstrap";

export default function Register() {

    const [username,setUsername]=useState("")

const onChangename = (e)=>{

    const name = (e.target .value)
    setUsername(name)
}
 console.log(username)
    return (
        <div>
            <br/>
            <div style={{margin:'20px',textAlign:'center',float:'center'}}>
                <Col lg={8} >
                <Card style={{width:'35%',padding:'20px',}}>
                 <form
                    // onSubmit={UserSubmit}
                >
                                    <FormGroup>
                                      <Row>
                                        <Col lg={12}>
                                          <Label >
                                            YourName
                                          </Label>
                                          <Input
                                        
                                            type="text"
                                            required
                                            id="name"
                                            // value={values.name}
                                            onChange={onChangename}
                                            name="name"
                                          />
                                          {/* {errors.name && touched.name && (
                                            <div
                                              style={{ color: "red" }}
                                              id="feedback"
                                            >
                                              {errors.name}
                                            </div>
                                          )} */}
                                          <br />

                                          <Label className="col-form-label pt-0">
                                            Mobile Number
                                          </Label>
                                          <Input
                                            className="form-control"
                                            type="text"
                                            required
                                            id="mNumber"
                                            // value={values.des}
                                            // onChange={onChangeDes}
                                            name="mNumber"
                                            />
                                          {/* {errors.name && touched.name && (
                                            <div
                                              style={{ color: "red" }}
                                              id="feedback"
                                            >
                                              {errors.des}
                                            </div>
                                          )} */}
                                          <br />
                                          <Label className="col-form-label pt-0">
                                            DOB
                                          </Label>
                                          <Input
                                            className="form-control"
                                            type="date"
                                            required
                                            id="doB"
                                            // value={values.doj}
                                            // onChange={onChangeDoj}
                                            name="doB"
                                          />
                                          {/* {errors.name && touched.name && (
                                            <div
                                              style={{ color: "red" }}
                                              id="feedback"
                                            >
                                              {errors.doj}
                                            </div>
                                          )} */}
                                          <br />
                                          <Label className="col-form-label pt-0">
                                            Password
                                          </Label>
                                          <Input
                                            className="form-control"
                                            type="password"
                                            required
                                            id="password"
                                            // value={values.district}
                                            // onChange={onChangeDistrict}
                                            name="password"
                                          />
                                          {/* {errors.name && touched.name && (
                                            <div
                                              style={{ color: "red" }}
                                              id="feedback"
                                            >
                                              {errors.district}
                                            </div>
                                          )} */}
                                          <br />
                                          <Label className="col-form-label pt-0">
                                            conifirm Password
                                          </Label>
                                          <Input
                                            className="form-control"
                                            type="password"
                                            required
                                            id="cpassword"
                                            // value={values.whsapp}
                                            // onChange={onChangeofficename}/
                                            name="cpassword"
                                          />
                                          {/* {errors.name && touched.name && (
                                            <div
                                              style={{ color: "red" }}
                                              id="feedback"
                                            >
                                              {errors.whsapp}
                                            </div>
                                          )} */}
                                          <br />
                                         
                                        </Col>            
                                      </Row>
                                    </FormGroup>
                                    <br />
                                    <div >
                                      <Button type="submit" color="primary">
                                        Create Account
                                      </Button>
                                    </div>
                                  </form>
                                </Card>
                </Col>
           
            </div>
             
        </div>
    )
}
