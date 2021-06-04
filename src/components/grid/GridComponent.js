import { useEffect, useRef } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';

import '../../../node_modules/realgrid/dist/realgrid-style.css';

const GridComponent = (props) => {
  const { fields, columns, rows, style } = props;
  const gridDom = useRef();
  const dataProvider = new LocalDataProvider(false);
  let gridView;

  useEffect(() => {
    gridView = new GridView(gridDom.current);
  }, [gridDom])

  useEffect(() => {
    gridView.setDataSource(dataProvider);
    gridView.setColumns(columns);
    dataProvider.setFields(fields);
    dataProvider.setRows(rows);
    gridView.onCellButtonClicked = (grid, index, col) => {
      console.log(col)
    }
  }, []);
  
  const exportExcel = () => {
    gridView.exportGrid({
      type:'excel',
      target: "local",
      fileName: "gridExportSample.xlsx", 
      progressMessage: "엑셀 Export중입니다.",
    })
  };
  return (
    <div>
      <div id='realgrid' ref={gridDom} style={style}></div>
      <button onClick={exportExcel}>엑셀 내보내기</button>
    </div>
  );
};

export default GridComponent;