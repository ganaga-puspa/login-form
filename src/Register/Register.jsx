import React, { useState } from "react";
import Swal from "sweetalert2";

import {
  Container,
  Row,
  Col,
  Card,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";
import { withFormik } from "formik";

const FormRegister = (props) => {
  const { values, touched, errors, handleChange, handleSubmit } = props;

  const [username, setUsername] = useState("");

  const onChangename = (e) => {
    const name = e.target.value;
    setUsername(name);
  };
  console.log(username);

  return (
    <div>
      <br />
      <div
        className="center"
        style={{ margin: "20px", textAlign: "center", float: "center" }}
      >
        {/* <Col lg={4}></Col> */}
        <h3 style={{ color: "#0d6efd" }}>Registration Form</h3>
        <Col lg={12}>
          <div
            className="center"
            style={{
              margin: "auto",
              width: "50%",
              padding: "10px",
            }}
          >
            <Card
              style={{
                margin: "auto",
                width: "35%",
                padding: "10px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Row>
                    <Col lg={12}>
                      <b>
                        <Label>YourName</Label>
                      </b>
                      <Input
                        type="text"
                        // required
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        name="name"
                      />
                      {errors.name && touched.name && (
                        <div style={{ color: "red" }} id="name">
                          {errors.name}
                        </div>
                      )}
                      <br />

                      <b>
                        <Label className="col-form-label pt-0">
                          Mobile Number
                        </Label>
                      </b>
                      <Input
                        // className="form-control"
                        type="tel"
                        // required
                        id="mnumber"
                        value={values.mnumber}
                        onChange={handleChange}
                        name="mnumber"
                      />
                      {errors.name && touched.name && (
                        <div style={{ color: "red" }} id="mnumber">
                          {errors.mnumber}
                        </div>
                      )}
                      <br />
                      <b>
                        {" "}
                        <Label className="col-form-label pt-0">DOB</Label>
                      </b>

                      <Input
                        className="form-control"
                        type="date"
                        // required
                        id="doB"
                        value={values.dob}
                        onChange={handleChange}
                        name="doB"
                      />
                      {errors.name && touched.name && (
                        <div style={{ color: "red" }} id="feedback">
                          {errors.dob}
                        </div>
                      )}
                      <br />
                      <b>
                        <Label className="col-form-label pt-0">Password</Label>
                      </b>

                      <Input
                        className="form-control"
                        type="password"
                        // required
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                      />
                      {errors.name && touched.name && (
                        <div style={{ color: "red" }} id="password">
                          {errors.password}
                        </div>
                      )}
                      <br />
                      <b>
                        <Label className="col-form-label pt-0">
                          conifirm Password
                        </Label>
                      </b>

                      <Input
                        className="form-control"
                        type="password"
                        // required
                        id="cpassword"
                        value={values.cpassword}
                        onChange={handleChange}
                        name="cpassword"
                      />
                      {errors.name && touched.name && (
                        <div style={{ color: "red" }} id="cpassword">
                          {errors.cpassword}
                        </div>
                      )}
                      <br />
                    </Col>
                  </Row>
                </FormGroup>
                <br />
                <div>
                  <Button color="primary">Create Account</Button>
                </div>
                <br />
              </form>
            </Card>
          </div>
        </Col>
      </div>
    </div>
  );
};

// export default function Register() {

// }

const Register = withFormik({
  mapPropsToValues: () => ({
    name: "",
    mnumber: "",
    dob: "",
    password: "",
    cpassword: "",
  }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    // name validation
    if (!values.name) {
      errors.name = "Required";
    } else if (!/^[a-zA-Z_ ]*$/.test(values.name)) {
      errors.name = "Only characters are allowed !";
    }

    // Mobile Number validation
    if (!values.mnumber) {
      errors.mnumber = "Required";
    } else if (!/^\d{10}$/.test(values.mnumber)) {
      errors.mnumber = "Invalid Mobile number !";
    }

    // dob validation
    if (!values.dob) {
      errors.dob = "Required";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    Swal.fire({
      icon: "success",
      title: "REGISTRATION SUCCESS",
      confirmButtonText: "Save",
    });
  },

  displayName: "BasicForm",
})(FormRegister);

export default Register;
