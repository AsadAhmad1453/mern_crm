import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./Login.css";
import axios from "axios"; 

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
        "http://localhost:5002/api/auth/login",
        { email, password },
        config
      );

      console.log(res.data);
      window.location.href = "/home";
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="custom-card">
          <Card.Body>
            <h1 className="fw-bold">Login</h1>
            <Form className="custom-form" onSubmit={handleSubmit}>
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

export default Login;
