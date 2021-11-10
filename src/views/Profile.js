import React from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const ProfileComponent = () => {
  const { user } = useAuth0();


  /* handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[0].value)
    console.log(event.target.elements.username.value)
    console.log(event.target.username.value)
    console.log(this.inputNode.value)
    
     <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>*/
  

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
    
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>  
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
        <Col>
          <img
            src= {user['https://example.com/flag']}
            alt="Flag Not Found"
            width = "180"
            height = "100"
          />  
          <p className="lead text-muted" >{user['https://example.com/country']}</p>
        </Col>
        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
    </Container>
  
  )
  };

export default withAuthenticationRequired(ProfileComponent, {
  onRedirecting: () => <Loading />,
});
