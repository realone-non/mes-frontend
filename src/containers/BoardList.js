import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AgGridComponents from 'components/grid/AgGridComponents';

import { BOARD_LIST_REQUEST } from 'reducers/board';

const BoardList = React.memo(() => {
  const { boardList } = useSelector((state => state.board));
  const dispatch = useDispatch();
  const onLoadData = useCallback(() => {
    dispatch({
      type : BOARD_LIST_REQUEST
    });
  });
  useEffect(() => {
    if (boardList === null) {
      onLoadData();
    }
  }, [boardList]);

  const gridOption = {
    columnDefs : [
      { field : 'wrId', width:100, headerClass : 'labelCenter' },
      { field : 'wrSubject', width:130 },
      { field : 'wrName', width:130 },
      { field : 'wrDateTime', width:130 },
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
    }
  }

  return (
    <AgGridComponents 
      columnDefs={gridOption.columnDefs}
      defaultColDef={gridOption.defaultColDef}
      rowData={gridOption.rowData}
      exportFiles={gridOption.exportSet}
      reflash={onLoadData}
    />
  )
});

export default BoardList;