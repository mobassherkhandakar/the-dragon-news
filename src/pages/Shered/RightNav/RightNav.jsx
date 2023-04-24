import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightNav = () => {
  return (
    <>
      <h4>Login with</h4>
      <div>
        <Button className="mb-2 text-center w-100" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="text-center w-100" variant="outline-primary">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="py-4"><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item className="py-4"><FaTwitter/> Twitter </ListGroup.Item>
          <ListGroup.Item className="py-4"><FaInstagram/> Instragram</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default RightNav;
