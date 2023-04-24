import React from 'react';
import Header from '../pages/Shered/Header/Header';
import Footer from '../pages/Shered/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shered/LeftNav/LeftNav';
import RightNav from '../pages/Shered/RightNav/RightNav';

const Main = () => {
  return (
    <>
      <Header/>
      <Container>
      <Row>
        <Col lg={3}>
          <LeftNav/>
        </Col>
        <Col lg={6}>
          <h2>This is a main containtet</h2>
        </Col>
        <Col lg={3}>
          <RightNav/>
        </Col>
      </Row>
    </Container>
      <Footer/>
    </>
  );
};

export default Main;