import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {
    Button
  } from "reactstrap";


const LogoutButton = () => {
    const{logout} = useAuth0();

    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    return(
        <Button
            id="qsLoginBtn"
            color="primary"
            className="btn-margin"
            onClick={() => logoutWithRedirect()}
        >
        Log out
        </Button>
    )
}

export default LogoutButton