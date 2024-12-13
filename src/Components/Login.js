import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useRef, useState } from "react";
import { users } from "../users";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const dosubmit = (event) => {
    event.preventDefault();
    const userSuppliedUserName = usernameRef.current.value;
    const userSuppliedPassword = passwordRef.current.value;

    console.log(`UserNmae is ${userSuppliedUserName}`);
    console.log(`Password is ${userSuppliedPassword}`);

    const returnValue = users.users.find((usernamePasswordDetails) => {
      const result =
        userSuppliedUserName === usernamePasswordDetails.username &&
        userSuppliedPassword === usernamePasswordDetails.password;
      console.log(`Result is ${result}`);
      return result;
    });

    console.log(`Return value is ${JSON.stringify(returnValue)} `);

    if (returnValue) {
      //Success
      navigate("/home");
    } else {
      // Faliure
      setErrorMessage("Username / Password is invalid ");
    }
  };

  return (
    <div>
      <Form onSubmit={dosubmit}>
        {errorMessage && (
          <Alert key="danger" variant="danger">
            {errorMessage}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            ref={usernameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
