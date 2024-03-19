import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Registration.css";
import axios from "axios"; 


function Registration() {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const { name,email, password } = formData;
   

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5002/api/auth/register",
        { name,email, password },
        config
      );

      console.log(res.data); 
       window.location.href = "/login";
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="custom-card">
          <Card.Body>
            <h2 className="fw-bold">REGISTRATION</h2>
            <Form className="custom-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="custom-label">Name</Form.Label>
                <Form.Control
                  type="name"
                  className="custom-control"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="custom-label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="custom-control"
                  placeholder="Enter email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="custom-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  className="custom-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="btn btn-outline-primary btn-lg px-5 custom-button"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Registration;
