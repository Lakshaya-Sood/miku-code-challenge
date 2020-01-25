import React from "react";
import { Form, Button } from "react-bootstrap";

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onEmailChange = event => {
    console.log("event.target.value:", event.target.value);
    this.setState({ email: event.target.value });
  };
  onPasswordChange = event => {
    console.log("event.target.value:", event.target.value);
    this.setState({ password: event.target.value });
  };
  onSubmit = () => {
    //http call to server to save the credentials
    console.log("Submit button clicked", this.state);
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={this.state.email} // binding from state to View
            onChange={this.onEmailChange} // listening to onChange event
            // disabled={true}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={this.state.password} // binding from state to View
            onChange={this.onPasswordChange} // listening to onChange event
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.onSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}
export default UserRegistration;
