import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

import AgGridComponents from 'components/grid/AgGridComponents';

import { BOARD_LIST_REQUEST, BOARD_VIEW_REQUEST } from 'reducers/board';

const BoardList = React.memo((props) => {
  const [ show, setShow ] = useState(false);
  const { boardList, boardViewContent } = useSelector((state => state.board));
  const dispatch = useDispatch();
  useEffect(() => {
    if (boardList === null) {
      onLoadData();
    }
  }, [boardList]);
  const onLoadData = useCallback(() => {
    dispatch({
      type : BOARD_LIST_REQUEST
    });
  });
  const modalOpen = useCallback(() => {
    setShow(true);
  });
  const modalClose = useCallback(() => {
    setShow(false);
  });
  const gridOption = {
    columnDefs : [
      { 
        field : 'wrId', 
        headerName: '번호', 
        width:100, 
        headerClass : 'labelCenter' 
      },
      { 
        field : 'wrSubject', 
        headerName: '제목', 
        cellRenderer: 'link',
        cellRendererParams: {
          clicked: function(field) {
            modalOpen()
          }
        }, 
        width:175 
      },
      { 
        field : 'wrName', 
        headerName: '작성자', 
        width:130 
      },
      { 
        field : 'wrDateTime',
        headerName: '작성일시', 
        width:130 
      },
    ],
    rowData : boardList,
    defaultColDef : {
      editable: false,
      autoHeight: true,
      sortable: true,
      resizable: true,
    },
    exportSet : {
      used : false
    },
    frameworkComponents : {
      link : Links
    }
  };
  return (
    <>
      <AgGridComponents 
        columnDefs={gridOption.columnDefs}
        defaultColDef={gridOption.defaultColDef}
        rowData={gridOption.rowData}
        reflash={onLoadData}
        frameworkComponents={gridOption.frameworkComponents}
      />
      <Modal 
        show={show} 
        onHide={modalClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{boardViewContent !== null && boardViewContent.wrSubject}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{boardViewContent !== null && boardViewContent.wrContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={modalClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
});
const Links = (props) => {
  const { clicked, value, data } = props;
  const dispatch = useDispatch();
  const viewContents = useCallback(() => {
    dispatch({
      type : BOARD_VIEW_REQUEST,
      data : data.wrId
    });
    clicked();
  });
  const clickHandler = useCallback(() => {
    viewContents();
  });
  return (
    <a className='boardViewLink' onClick={clickHandler}>{value}</a>
  )
};
export default BoardList;