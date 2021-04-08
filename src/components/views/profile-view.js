import { Form, Button, Col } from 'react-bootstrap';

export default function ProfileView(props) {
  return(
    <Form className="mt-sm-5 mt-3 pl-sm-5 pl-3 pr-sm-5 pr-3">
      <Form.Row>
        <Form.Group as={Col} controlId="regFirstName">
          <Form.Label>First name:</Form.Label>
          <Form.Control type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group as={Col} controlId="regLastName">
          <Form.Label>Last name:</Form.Label>
          <Form.Control type="text" placeholder="Surname" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="regEmail">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control type="email" placeholder="New e-mail address" />
        </Form.Group>
        <Form.Group as={Col} controlId="regPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="New password" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="regPermissions">
          <Form.Label>Permissions</Form.Label>
          <Form.Control type="text" placeholder="Member" disabled/>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button variant="primary">Apply changes!</Button>
        </Col>
      </Form.Row>
    </Form>
  );
};