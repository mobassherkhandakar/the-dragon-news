import React from 'react';
import Header from '../pages/Shered/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shered/LeftNav/LeftNav';
import RightNav from '../pages/Shered/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
const NewsLayout = () => {
  return (
    <div>
      <Header/>
      <Container>
      <Row>
        <Col lg={9}>
          <Outlet/>
        </Col>
        <Col lg={3}>
          <RightNav/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default NewsLayout;