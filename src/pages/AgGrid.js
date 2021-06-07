import React from "react";

import WorkList from 'containers/WorkList';
import BoardList from 'containers/BoardList';

import { Container, Row, Col } from 'react-bootstrap';

const AgGrid = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <WorkList />
          </Col>
          <Col sm={12} md={6}>
            <BoardList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AgGrid;