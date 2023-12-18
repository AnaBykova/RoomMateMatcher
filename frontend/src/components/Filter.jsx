import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "react-bootstrap";

const Filter = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button variant="primary" onClick={() => loginWithRedirect()}>
        Filter
      </Button>
      
    )
  )
}

export default Filter