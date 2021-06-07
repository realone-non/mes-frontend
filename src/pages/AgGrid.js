import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';

import WorkList from 'containers/WorkList';
import BoardList from 'containers/BoardList';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

const textStyle = {
  textAlign:'center',
  height:'90px',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

const Buttons = (props) => {
  const { clicked, value } = props;
  const clickHandler = () => {
    clicked(value);
  }
  return (
    <Button onClick={clickHandler}>자세히보기</Button>
  )
};
const AgGrid = () => {
  const [ gridAPI, setGridAPI ] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gridOption = {
    columnDefs: [
      {
        field: "athlete",
        cellRenderer: "button",
        cellRendererParams: {
          clicked: function(field) {
            handleShow()
          }
        },
        cellStyle: textStyle,
      },
      {
        field: "age",
        cellStyle: textStyle
      },
      {
        field: "country",
        cellStyle: textStyle
      },
      {
        field: "year",
        cellStyle: textStyle
      },
      {
        field: "date",
        cellStyle: textStyle
      },
      {
        field: "sport",
        cellStyle: textStyle
      },
      { 
        field: "gold", 
        cellStyle: textStyle 
      },
      { 
        field: "silver", 
        cellStyle: textStyle 
      },
      { 
        field: "bronze", 
        cellStyle: textStyle 
      },
      { 
        field: "total", 
        cellStyle: textStyle 
      }
    ],
    rowData : [
      {
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "bronze": 0,
        "total": 8
      },
      {
        "athlete": "test1",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 0,
        "bronze": 2,
        "total": 8
      },
      {
        "athlete": "test2",
        "age": 27,
        "country": "United States",
        "year": 2012,
        "date": "12/08/2012",
        "sport": "Swimming",
        "gold": 4,
        "silver": 2,
        "bronze": 0,
        "total": 6
      },
    ],
    frameworkComponents : {
      button : Buttons
    },
    defaultColDef : {
      editable: true,
      autoHeight: true,
    }
  };
  const onGridReady = (params) => {
    setGridAPI(params.api)
  }
  const onExportCSV = () => {
    gridAPI.exportDataAsCsv();
  }

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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AgGrid;