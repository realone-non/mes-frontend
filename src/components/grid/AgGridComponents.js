import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { Button } from 'react-bootstrap';

const AgGridComponents = React.memo(( { columnDefs, defaultColDef, rowData, exportFiles, reflash } ) => {
  const [ gridAPI, setGridAPI ] = useState(null);
  const onGridReady = (params) => {
    setGridAPI(params.api)
  };
  const onExportFiles = () => {
    const confirm = window.confirm(`${exportFiles.type} 파일을 다운로드 하시겠습니까?`);
    switch(exportFiles.type) {
      case 'CSV' :
        const params = {
          fileName:'workList.csv'
        }
        if (confirm === true) gridAPI.exportDataAsCsv(params);
        break;
      case 'EXCEL' :
        if (confirm === true) gridAPI.exportDataAsExcel();
        break;
      default :
        return null;
        break;
    }
  }
  return (
    <div className='ag-theme-alpine' style={{height: 400, width: '100%',textAlign:'center'}}>
      <AgGridReact 
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        onGridReady={onGridReady}
      />
      <div>
        {
          exportFiles.used === true && 
            <FileButtns 
              type={exportFiles.type}
              func={onExportFiles}
            />
        }
        <Button 
          onClick={() => reflash()}
        >
          새로고침
        </Button>
      </div>
    </div>
  );
});

const FileButtns = ({ type, func }) => {
  if (type === 'CSV' || type === 'EXCEL') {
    return (
      <Button onClick={() => func()}>export {type}</Button>
    );
  } else {
    return null;
  }
};

export default AgGridComponents;
