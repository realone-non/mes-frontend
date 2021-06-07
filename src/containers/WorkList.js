import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AgGridComponents from 'components/grid/AgGridComponents';

import { WORK_LIST_REQUEST } from 'reducers/work';

const WorkList = React.memo(() => {
  const { workList } = useSelector((state => state.work));
  const dispatch = useDispatch(); 
  const onLoadData = useCallback(() => {
    dispatch({
      type : WORK_LIST_REQUEST
    });
  });
  useEffect(() => {
    if (workList === null) {
      onLoadData();
    }
  }, [workList]);

  const gridOption = {
    columnDefs : [
      { field : 'id', width:100, headerClass : 'labelCenter' },
      { field : 'workNum', width:130 },
      { field : 'orderNum', width:130 },
      { field : 'userIdNum', width:130 },
      { field : 'workerName', width:130 },
      { field : 'workStartDate', width:150 },
      { field : 'workEndDate', width:150 },
      { field : 'etc', width:150 },
    ],
    rowData : workList,
    defaultColDef : {
      editable: false,
      autoHeight: true,
      sortable: true,
      resizable: true,
    },
    exportSet : {
      used : true,
      type : 'CSV'
    }
  };
  
  return (
    <AgGridComponents 
      columnDefs={gridOption.columnDefs}
      defaultColDef={gridOption.defaultColDef}
      rowData={gridOption.rowData}
      exportFiles={gridOption.exportSet}
      reflash={onLoadData}
    />
  );
})

export default WorkList;