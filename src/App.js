/* eslint-disable */

// import * as React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Inject } from '@syncfusion/ej2-react-grids';
// import { getValue } from '@syncfusion/ej2-base';
// import { orderDetails } from './data';
// import { SampleBase } from './sample-base';

// export class App extends SampleBase {

//   editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };

//   colTemp(args) {
//     return <button className="tempcell">{args[args.column.field]}</button>;
//   }

//   queryCellInfo(args) {
//     if (args.column.field === 'CustomerName') {
//       // debugger;
//       var child = args.cell.querySelector('.tempcell');
//       console.log(args.cell);
//       console.log(child);
//       // args.cell.querySelector('.tempcell').calssList.add('custom');
//     }
//   }

//   grideditTemplate(args) {
//     return (
//       // <input type="text" value={getValue('ShipCity', args)}/>
//       <input type="text" value={getValue('OrderID', args)} />
//     );
//   }

//   render() {
//     return (
//       <div className="control-pane">
//         <div className="control-section">
//           <GridComponent
//             dataSource={orderDetails.slice(0, 2)}
//             editSettings={this.editSettings}
//             queryCellInfo={this.queryCellInfo.bind(this)}
//             height="350"
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field="OrderID"
//                 headerText="Order ID"
//                 width="120"
//                 editTemplate={this.grideditTemplate.bind(this)}
//                 textAlign="Right"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="CustomerName"
//                 headerText="Customer Name"
//                 template={this.colTemp.bind(this)}
//                 width="150"
//               ></ColumnDirective>
//             </ColumnsDirective>
//             <Inject services={[Edit]} />
//           </GridComponent>
//         </div>
//       </div>
//     );
//   }
// }



// // complex data group with edit

// import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
// function App () {
//     var gdataSource = [
//         {
//           project: {
//             id: 'b27585828a675f5acfef052dd',
//             name: 'Leave',
//             number: '1000000',
//             description:
//               'This project is used for personnel leave only.Please do not use this project unless personnel is going on leave.',
//           },
//           role: {
//             id: 'f1720daf89ee3de12e77dd69c',
//           },
//         },
//         {
//           project: {
//             id: 'c0d3c1454e0eec3d774d0bfe8',
//             name: 'Project C',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: '2589b2560b7338f055c0c9be3',
//           },
//         },
//         {
//           project: {
//             id: 'c0d3c1454e0eec3d774d0bfe8',
//             name: 'Project C',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: '309068c34805da0a0cec63c6d',
//           },
//         },
//         {
//           project: {
//             id: 'a6c827cce3fb0eee9dfa2395e',
//             name: 'Project A',
//             number: null,
//             description: 'Building the coolest structure ever',
//           },
//           role: {
//             id: 'd8094793b815df82db2c92728',
//           },
//         },
//       ];

//     const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true };
//     const groupOptions = { columns: ['project.name'], showGroupedColumn: false };
//     let gridInstance;
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent dataSource={gdataSource} ref={grid => gridInstance = grid} toolbar={toolbarOptions} editSettings={editSettings} allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="320">
//                     <ColumnsDirective>
//                         <ColumnDirective field='role.id' headerText='Role Id' width='140' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
//                         <ColumnDirective field='project.name' headerText='project.name' width='150'></ColumnDirective>
//                         <ColumnDirective field='project.description' headerText='Project Description' width='140' textAlign='Right'></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Group, Sort, Edit, Toolbar]}/>
//                 </GridComponent>
//             </div>
//         </div>);
// }


// // caption template function issue

// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Page, Group, Sort, Edit, Toolbar,
//   Inject,
// } from '@syncfusion/ej2-react-grids';
// import { orderDetails } from './data';
// function App () {
//   const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//   const editSettings = { allowEditing: true };
//   const groupOptions = {
//     columns: ['CustomerID'],// , 'ShipCity'
//     showDropArea: false,
//     // captionTemplate:
//     //   '<span class="groupItems" style="color:blue"> ${field} -${key} - ${count} Items</span>',
//     // captionTemplate: (args) => {
//     //   return args.field + ' - ' + args.items[0].key;
//     // },
//   };
//   return (
//     <GridComponent
//       dataSource={orderDetails.slice(0, 5)}
//       allowGrouping={true}
//       groupSettings={groupOptions}
//       toolbar={toolbarOptions}
//       pageSettings={{ pageCount: 5 }}
//       editSettings={editSettings}
//       allowSorting={true}
//       height={500}
//       // style={{ paddingTop: '80px' }}
//     >
//       <ColumnsDirective>
//         <ColumnDirective
//           field="OrderID"
//           headerText="Order ID"
//           width="120"
//           textAlign="Right"
//         />
//         <ColumnDirective
//           field="CustomerID"
//           headerText="Customer ID"
//           width="150"
//         />
//         <ColumnDirective field="ShipCity" headerText="Ship City" width="150" />
//         <ColumnDirective field="ShipName" headerText="Ship Name" width="150" />
//       </ColumnsDirective>
//       <Inject services={[Page, Group, Sort, Edit, Toolbar]} />
//     </GridComponent>
//   );
// }


// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Edit, Toolbar, Group, Sort, Inject } from '@syncfusion/ej2-react-grids';
// import { orderDataSource } from './data';

// import { DialogComponent } from '@syncfusion/ej2-react-popups';

// function App () {
//   let refresh = false;
//   const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true };
//     const editparams = { params: { popupHeight: '300px' } };
//     const validationRule = { required: true };
//     const orderidRules = { required: true, number: true };
//     const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
//     const groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
//     let gridInstance;
//     const visible = false;
//     const animationSettings = { effect: 'None' };
//     let alertDialogInstance;
//     const alertButtons = [{
//             click: () => {
//                 alertDialogInstance.hide();
//             },
//             buttonModel: { content: 'OK', isPrimary: true }
//         }];
//     function dataBound() {
//         if (refresh) {
//             gridInstance.groupColumn('ShipCountry');
//             refresh = false;
//         }
//     }
//     function load() {
//         refresh = this.refreshing;
//     }
//     function columnDragStart(args) {
//         if (args.column.field === 'OrderDate') {
//             alertDialogInstance.show();
//         }
//     }
//     function created() {
//         gridInstance.on('columnDragStart', columnDragStart, this);
//     }
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent dataSource={orderDataSource} allowPaging={true} ref={grid => gridInstance = grid} toolbar={toolbarOptions} pageSettings={{ pageCount: 5 }} editSettings={editSettings} allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="320" dataBound={dataBound.bind(this)} load={load} created={created}>
//                     <ColumnsDirective>
//                         <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
//                         <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRule}></ColumnDirective>
//                         <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
//                         <ColumnDirective field='OrderDate' headerText='Order Date' allowGrouping={false} editType='datetimepickeredit' format={format} width='160'></ColumnDirective>
//                         <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams}></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Page, Group, Sort, Edit, Toolbar]}/>
//                 </GridComponent>
//                 <DialogComponent id="alertDialog" header='Grouping' visible={visible} animationSettings={animationSettings} width='300px' content='Grouping is disabled for this column' ref={alertdialog => alertDialogInstance = alertdialog} target='.control-section' buttons={alertButtons}></DialogComponent>
//                 <div className="e-dsalign">Source:
//                     <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
//                 </div>
//             </div>
//         </div>);
// }





// import { GridComponent, ColumnsDirective, ColumnDirective, Inject, VirtualScroll } from '@syncfusion/ej2-react-grids';
// import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
// import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
// import { getTradeData } from './data';
// function App() {
//     let grid;
//     let isDataBound = true;
//     let updateButton;
//     let clearButton;
//     let feedDelayInput;
//     let timerID;
//     let initial = true;
//     const load = function (args) {
//         this.on('data-ready', () => {
//             if (initial) {
//                 document.getElementById('update1')?.click();
//                 initial = false;
//                 feedDelayInput.element.addEventListener('keypress', (e) => {
//                     if (e && e.key === 'Enter' && feedDelayInput.element.parentElement.classList.contains('e-input-focus')) {
//                         feedDelayInput.value = parseInt(feedDelayInput.element.value);
//                         feedDelayInput.focusOut();
//                         updateButton.element.click();
//                     }
//                 });
//             }
//         });
//         this.on('destroy', function () {
//             if (timerID) {
//                 clearInterval(timerID);
//                 timerID = undefined;
//             }
//         });
//     };
//     const queryCellInfo = (args) => {
//         if (args.column?.field === 'NetIncome') {
//             if (args.data['Net'] < 0) {
//                 args.cell?.classList.remove('e-increase');
//                 args.cell?.classList.add('e-decrease');
//             }
//             else if (args.data['Net'] > 0) {
//                 args.cell?.classList.remove('e-decrease');
//                 args.cell?.classList.add('e-increase');
//             }
//         }
//         else if (args.column?.field === 'Change') {
//             if (args.data['Change'] < 0) {
//                 updateCellDetails(args.cell, 'below-0');
//             }
//             else {
//                 updateCellDetails(args.cell, 'above-0');
//             }
//         }
//         else if (args.column?.field === 'Net') {
//             if (args.data['Net'] < 0) {
//                 updateCellDetails(args.cell, 'below-0');
//             }
//             else {
//                 updateCellDetails(args.cell, 'above-0');
//             }
//         }
//         else if (isDataBound) {
//             if (args.column?.field === 'Rating') {
//                 args.cell.innerHTML = '';
//                 const span = document.createElement('span');
//                 const span2 = document.createElement('span');
//                 if (args.data['Change'] === 0) {
//                     span.classList.add('e-icons');
//                     span.classList.add('e-intermediate-state-2');
//                     span.classList.add('neutral');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('neutral');
//                     span2.innerText = 'Neutral';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Change'] < -2 && args.data['Net'] < 0) {
//                     span.classList.add('e-negc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-down-double');
//                     span.classList.add('below-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('below-0');
//                     span2.innerText = 'Strongly Sell';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Net'] < 0) {
//                     span.classList.add('e-negc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-down');
//                     span.classList.add('below-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('below-0');
//                     span2.innerText = 'Sell';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else if (args.data['Change'] > 5 && args.data['Net'] > 10) {
//                     span.classList.add('e-posc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-up-double');
//                     span.classList.add('above-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('above-0');
//                     span2.innerText = 'Strongly Buy';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//                 else {
//                     span.classList.add('e-posc');
//                     span.classList.add('e-icons');
//                     span.classList.add('e-chevron-up');
//                     span.classList.add('above-0');
//                     span.classList.add('ic');
//                     span.classList.add('side-space');
//                     span2.classList.add('above-0');
//                     span2.innerText = 'Buy';
//                     args.cell?.appendChild(span);
//                     args.cell?.appendChild(span2);
//                 }
//             }
//         }
//         isDataBound = true;
//     };
//     const updateCellDetails = (cell, className) => {
//         const div = document.createElement('div');
//         const span1 = document.createElement('span');
//         span1.classList.add('rowcell-left');
//         div.classList.add(className);
//         span1.innerHTML = cell.innerHTML;
//         cell.innerHTML = '';
//         div.appendChild(span1);
//         cell.appendChild(div);
//     };
//     const updateCellValues = () => {
//         let oldValue;
//         let newValue;
//         for (let i = 0; grid && i < grid?.currentViewData.length; i++) {
//             if (grid?.currentViewData[i] === undefined) {
//                 return;
//             }
//             let num = Math.floor(Math.random() * 99) + 1;
//             num *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
//             oldValue = grid?.currentViewData[i]['Net'];
//             if (i % 2 === 0) {
//                 num = num * 0.25;
//             }
//             else if (i % 3 === 0) {
//                 num = num * 0.83;
//             }
//             else if (i % 5 === 0) {
//                 num = num * 0.79;
//             }
//             else if (i % 4 === 0) {
//                 num = num * 0.42;
//             }
//             else {
//                 num = num * 0.51;
//             }
//             isDataBound = true;
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Net', parseFloat(num.toFixed(2)));
//             isDataBound = true;
//             newValue = parseFloat((grid?.currentViewData[i]['Net'] - oldValue).toString().substring(0, 2));
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Change', parseFloat(newValue.toFixed(2)));
//             isDataBound = true;
//             const ratingValue = grid?.currentViewData[i]['Net'] < 0 ? 'Sell' : 'Buy';
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'Rating', ratingValue);
//             const val = num + newValue;
//             grid?.setCellValue(grid?.currentViewData[i]['id'], 'NetIncome', val);
//         }
//     };
//     const data = getTradeData;
//     const updateClick = () => {
//         if (!timerID) {
//             updateButton.disabled = true;
//             feedDelayInput.enabled = false;
//             clearButton.disabled = false;
//             timerID = setInterval(updateCellValues, feedDelayInput.value);
//         }
//     };
//     const clearClick = () => {
//         if (timerID) {
//             updateButton.disabled = false;
//             feedDelayInput.enabled = true;
//             clearButton.disabled = true;
//             clearInterval(timerID);
//             timerID = undefined;
//         }
//     };
//     return (<div className='control-pane'>
//             <div className='control-section row'>
//                 <div style={{ marginBottom: '10px' }}>
//                     <h4 style={{ display: 'inline-block', fontSize: '14px', paddingLeft: '5px' }}>
//                         Feed Delay(ms):
//                     </h4>
//                     <NumericTextBoxComponent format="N0" value={1000} min={10} max={5000} step={1} width={'150px'} style={{ marginLeft: '7px' }} ref={(scope) => {
//             feedDelayInput = scope;
//         }}/>
//                     <ButtonComponent id="update1" ref={(scope) => {
//             updateButton = scope;
//         }} onClick={updateClick} style={{ marginLeft: '10px' }}>
//                         Start Data Update
//                     </ButtonComponent>
//                     <ButtonComponent id="clear" ref={(scope) => {
//             clearButton = scope;
//         }} onClick={clearClick} style={{ marginLeft: '10px' }}>
//                         Stop Data Update
//                     </ButtonComponent>
//                 </div>
//                 <GridComponent id="livestream" dataSource={data} enableVirtualization={true} enableVirtualMaskRow={false} enableHover={false} rowHeight={38} height={500} ref={(g) => {
//             grid = g;
//         }} allowSelection={false} queryCellInfo={queryCellInfo} load={load}>
//                     <ColumnsDirective>
//                         <ColumnDirective field="id" headerText="ID" width="140" isPrimaryKey={true} visible={false}/>
//                         <ColumnDirective field="CountryCode" headerText="Ticker" width="70"/>
//                         <ColumnDirective field="Change" headerText="Change % 1D" width="100" format="N0" textAlign="Right"/>
//                         <ColumnDirective field="Net" headerText="Net" width="100" format="C2" type="number" textAlign="Right"/>
//                         <ColumnDirective field="Rating" width="150" headerText="Technical Rating 1D"/>
//                         <ColumnDirective field="NetIncome" headerText="Net Income" width="150" format="C2" type="number" textAlign="Right"/>
//                         <ColumnDirective field="Sector" width="160" headerText="Sector"/>
//                         <ColumnDirective field="EmployeeCount" width="130" headerText="Employee Count" textAlign="Right"/>
//                     </ColumnsDirective>
//                     <Inject services={[VirtualScroll]}/>
//                 </GridComponent>
//             </div>

//         </div>);
// }


// memory leak

import {
  GridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll, VirtualScroll, Grid, RowDD, Toolbar, Group, Edit, Page, Filter, Sort, ColumnChooser, Search, Print, Reorder, Resize, ContextMenu, CommandColumn, Selection, DetailRow,
  ColumnMenu,
  ExcelExport,
  Aggregate,
  Freeze,
  LazyLoadGroup,
} from '@syncfusion/ej2-react-grids';
import { templateCompiler } from '@syncfusion/ej2-grids';
import { Ajax, getValue } from "@syncfusion/ej2-base";
import {NumericTextBoxComponent} from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { useEffect, useRef, useState, useCallback, useMemo, FC, Fragment, MouseEvent, useContext, forwardRef } from 'react';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { data, datasource, virtualData, orderDataSource, customerData } from './data';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import DynamicGrid from './DynamicGrid';
// import './index.css'
let lazyLoadData = [];
var customerid = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
  'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
  'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
var product = ['Chai', 'Chang', 'Aniseed Syrup', 'Chef Anton\'s Cajun Seasoning', 'Chef Anton\'s Gumbo Mix', 'Grandma\'s Boysenberry Spread',
  'Gudbrandsdalsost', 'Outback Lager', 'Flotemysost', 'Mozzarella di Giovanni', 'Röd Kaviar', 'Longlife Tofu', 'Rhönbräu Klosterbier', 'Lakkalikööri', 'Original Frankfurter grüne Soße'];
var customername = ['Maria', 'Ana Trujillo', 'Antonio Moreno', 'Thomas Hardy', 'Christina Berglund', 'Hanna Moos', 'Frédérique Citeaux', 'Martín Sommer', 'Laurence Lebihan', 'Elizabeth Lincoln',
  'Victoria Ashworth', 'Patricio Simpson', 'Francisco Chang', 'Yang Wang', 'Pedro Afonso', 'Elizabeth Brown', 'Sven Ottlieb', 'Janine Labrune', 'Ann Devon', 'Roland Mendel', 'Aria Cruz', 'Diego Roel',
  'Anabela Domingues', 'Helvetius Nagy', 'Palle Ibsen', 'Mary Saveley', 'Paul Henriot', 'Rita Müller', 'Pirkko Koskitalo', 'Paula Parente', 'Karl Jablonski', 'Matti Karttunen', 'Zbyszek Piestrzeniewicz'];
var customeraddress = ['507 - 20th Ave. E.\r\nApt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
  '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.', '59 rue de l\'Abbaye', 'Luisenstr. 48', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House\r\nMiner Rd.', 'Edgeham Hollow\r\nWinchester Way',
  '7 Houndstooth Rd.', '2817 Milton Dr.', 'Kirchgasse 6', 'Sierras de Granada 9993', 'Mehrheimerstr. 369', 'Rua da Panificadora, 12', '2817 Milton Dr.', 'Mehrheimerstr. 369'];
var quantityperunit = ['10 boxes x 20 bags', '24 - 12 oz bottles', '12 - 550 ml bottles', '48 - 6 oz jars', '36 boxes', '12 - 8 oz jars', '12 - 1 lb pkgs.', '12 - 12 oz jars', '18 - 500 g pkgs.', '12 - 200 ml jars',
  '1 kg pkg.', '10 - 500 g pkgs.', '2 kg box', '40 - 100 g pkgs.', '24 - 250 ml bottles', '32 - 500 g boxes', '20 - 1 kg tins', '16 kg pkg.', '10 boxes x 12 pieces', '30 gift boxes', '24 pkgs. x 4 pieces', '24 - 500 g pkgs.', '12 - 250 g pkgs.',
  '12 - 355 ml cans', '20 - 450 g glasses', '100 - 250 g bags'];

var OrderID = 10248;

for (var i = 0; i < 20000; i++) {
  lazyLoadData.push({
      'OrderID': OrderID + i,
      'CustomerID': customerid[Math.floor(Math.random() * customerid.length)],
      'CustomerName': customername[Math.floor(Math.random() * customername.length)],
      'CustomerAddress': customeraddress[Math.floor(Math.random() * customeraddress.length)],
      'ProductName': product[Math.floor(Math.random() * product.length)],
      'ProductID': i,
      'Quantity': quantityperunit[Math.floor(Math.random() * quantityperunit.length)]
  });
}


// function App() {
//   var date1;
//   var date2;
//   var date3;
//   var flag = true;
//   var grid;
//   var toolbarOptions = ['Search', 'ColumnChooser'];
//   const dataBound = () => {
//     if (this.flag && this.date1) {
//       this.date2 = new Date().getTime();
//       (document.getElementById('performanceTime')).innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
//       this.flag = false;
//     }
//   }

//   const created = () => {
//     this.date1 = new Date().getTime();
//   }

//   const actionBegin = (args) => {
//     if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
//       args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType == 'columnstate'
//       || args.requestType === 'paging' || args.requestType === 'ungrouping') {
//       this.date3 = new Date().getTime();
//     }
//   }

//   const actionComplete = (args) => {
//     if (args.requestType === 'sorting' || args.requestType === 'filtering' || args.requestType === 'searching' ||
//       args.requestType === 'grouping' || args.requestType === 'reorder' || args.requestType === 'columnstate'
//       || args.requestType === 'paging' || args.requestType === 'ungrouping') {
//       if (this.date3) {
//         const dateAction = new Date().getTime();
//         (document.getElementById('performanceTime1')).innerHTML = 'Action Time Taken: ' + (dateAction - this.date3) + 'ms';
//       }
//     }
//   }

//   function renderGrid() {
//     if ((document.getElementById('grid')).classList.contains('e-grid')) {
//         let gridObj =(document.querySelector('#grid')).ej2_instances[0];
//         gridObj.dataSource = lazyLoadData;
//         gridObj.dataBind();
//     }
//     else {
//         Grid.Inject(Group, Edit, Page, Filter, Sort, Toolbar, ColumnChooser, Search, Print, Reorder)
//         let gridObj = new GridComponent({
//             dataSource: lazyLoadData,
//             height: 505,
//             width: 'auto',
//             allowPaging: true,
//             editSettings: { allowEditing: true, allowDeleting: true, mode: 'Normal', newRowPosition: 'Top' },
//             toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Print', 'Search', 'ColumnChooser'],
//             pageSettings: { pageSize: 100 },
//             allowFiltering: true,
//             allowSorting: true,
//             filterSettings: { type: 'Excel' },
//             allowGrouping: true,
//             allowReordering: true,
//             columns: [
//               { field: 'OrderID', headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right', width: 120 },
//                 { field: 'ProductName', headerText: 'Product Name', width: 160 },
//                 { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
//                 { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
//                 { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
//             ]
//         });
//         gridObj.appendTo(document.querySelector('#grid'));
//     }
// }

//   function destroyGrid() {
//       let gridObj = (document.querySelector('#grid')).ej2_instances;
//       if (gridObj && gridObj.length > 0 && !gridObj[0].isDestroyed) {
//           gridObj[0].destroy();
//       }
//   }

//     return (
//       <div className='control-pane'>
//         <div className='control-section'>
//         <span id="performanceTime">Initial Load Time Taken: 0 ms</span>
//         <span>   ----- </span>
//         <span id="performanceTime1"> Grid Action Taken Time : 0 ms</span>
//         <button onClick={renderGrid}>renderGrid</button>
//         <button onClick={destroyGrid}>destroyGrid</button>
//         <div id="grid"></div>
//           {/* <GridComponent dataSource={lazyLoadData} enableVirtualization={true} height={400} ref={g => this.grid = g} dataBound={this.dataBound.bind(this)}
//             created={this.created.bind(this)} actionBegin={this.actionBegin.bind(this)} actionComplete={this.actionComplete.bind(this)} allowFiltering={true}
//             allowSorting={true} allowGrouping={true} allowReordering={true} showColumnChooser={true} pageSettings={{ pageSize: 100 }} toolbar={this.toolbarOptions} >
//             <ColumnsDirective>
//               <ColumnDirective field='OrderID' headerText='Order ID' textAlign="Right" width='120' ></ColumnDirective>
//               <ColumnDirective field='ProductName' headerText='Product Name' width='160' ></ColumnDirective>
//               <ColumnDirective field='ProductID' headerText='Product ID' textAlign="Right" width='120' ></ColumnDirective>
//               <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' ></ColumnDirective>
//               <ColumnDirective field='CustomerName' headerText='Customer Name' width='160' ></ColumnDirective>
//             </ColumnsDirective>
//             <Inject services={[Page, Toolbar, Group, Sort, Filter, ColumnChooser, VirtualScroll, Reorder]} />
//           </GridComponent> */}
//         </div>
//       </div>
//     )
// };

// export default App;




// // 540683-grid-resize

// function Localbinding() {
//   let grid;
//   const [allowResize, setResize] = React.useState(true);
//   const [update, setUpdate] = React.useState(false);

//   const contextMenuCommand = [
//     {
//       title: 'View Options',
//       buttonOption: {
//         iconCss: 'e-icons e-more-horizontal-1',
//       },
//     },
//   ];

//   const dataBound = () => {
//     if (grid) {
//       grid.autoFitColumns(['CustomerName']);
//     }
//   };

//   const destroy = () => {
//     grid.destroy();
//     // grid.refresh();
//     // grid.freezeRefresh();
//     setResize((allowResize) => !allowResize);
//     setUpdate((prev) => !prev);
//   }

//   function destroyed(args) {
//     debugger;
//     console.log('destroyed grid=>' + grid);
//   }
//   function actionBegin(args) {
//     console.log(args);
//   }

//   return (
//     <div className="control-pane">
//       <div className="control-section">
//         {/* <button onClick={() => setUpdate((prev) => !prev)}>
//           {update ? 'Hide' : 'Show'} Grid
//         </button>
//         <button onClick={destroy}>destroy</button> 
//         {update && ( */}
//           <GridComponent
//             dataSource={data}
//             allowPaging={true}
//             allowSorting={true}
//             allowFiltering={true}
//             allowResizing={true}
//             destroyed={destroyed}
//             // actionBegin={actionBegin}
//             pageSettings={{ pageCount: 5 }}
//             sortSettings = {{ columns: [{ field: 'CustomerName', direction: 'Ascending' }] }}
//             filterSettings={{type: 'Menu'}}
//             dataBound={dataBound}
//             ref={(g) => (grid = g)}
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field=""
//                 type="checkbox"
//                 headerText=""
//                 width="35"
//                 minWidth="35"
//                 textAlign="Center"
//               />
//               <ColumnDirective
//                 field="OrderID"
//                 headerText="Order ID"
//                 width="120"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="CustomerName"
//                 headerText="Customer Name"
//                 width="150"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="OrderDate"
//                 headerText="Order Date"
//                 width="130"
//                 format="yMd"
//                 textAlign="Right"
//               />
//               <ColumnDirective
//                 field="Freight"
//                 headerText="Freight"
//                 width="120"
//                 format="C2"
//                 textAlign="Right"
//               />
//               <ColumnDirective
//                 field="ShippedDate"
//                 headerText="Shipped Date"
//                 width="130"
//                 format="yMd"
//                 textAlign="Right"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="ShipCountry"
//                 headerText="Ship Country"
//                 width="150"
//               ></ColumnDirective>

//               <ColumnDirective
//                 field="ctxMenu"
//                 headerText=""
//                 width="auto"
//                 minWidth="75"
//                 headerTextAlign="right"
//                 // commands={contextMenuCommand}
//               />
//             </ColumnsDirective>
//             <Inject services={[Page, Resize, ContextMenu, CommandColumn]} />
//           </GridComponent>
//         {/* )} */}
//       </div>
//     </div>
//   );
// }
// // export default Localbinding;

// function Localbinding1() {
//   let grid;
//   const [allowResize, setResize] = React.useState(true);
//   const [update, setUpdate] = React.useState(false);

//   const contextMenuCommand = [
//     {
//       title: 'View Options',
//       buttonOption: {
//         iconCss: 'e-icons e-more-horizontal-1',
//       },
//     },
//   ];

//   const dataBound = () => {
//     if (grid) {
//       grid.autoFitColumns(['CustomerName']);
//     }
//   };

//   const destroy = () => {
//     grid.destroy();
//     // grid.refresh();
//     // grid.freezeRefresh();
//     setResize((allowResize) => !allowResize);
//     setUpdate((prev) => !prev);
//   }

//   function destroyed(args) {
//     debugger;
//     console.log('destroyed grid=>' + grid);
//   }
//   function actionBegin(args) {
//     console.log(args);
//   }

//   return (
//     <div className="control-pane">
//       <div className="control-section">
//         {/* <button onClick={() => setUpdate((prev) => !prev)}>
//           {update ? 'Hide' : 'Show'} Grid
//         </button>
//         <button onClick={destroy}>destroy</button>
//         {update && ( */}
//           <GridComponent
//             dataSource={data}
//             allowPaging={true}
//             allowSorting={true}
//             allowFiltering={true}
//             allowResizing={false}
//             destroyed={destroyed}
//             // actionBegin={actionBegin}
//             pageSettings={{ pageCount: 5 }}
//             sortSettings = {{ columns: [{ field: 'CustomerName', direction: 'Ascending' }] }}
//             filterSettings={{type: 'Menu'}}
//             dataBound={dataBound}
//             ref={(g) => (grid = g)}
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field=""
//                 type="checkbox"
//                 headerText=""
//                 width="35"
//                 minWidth="35"
//                 textAlign="Center"
//               />
//               <ColumnDirective
//                 field="OrderID"
//                 headerText="Order ID"
//                 width="120"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="CustomerName"
//                 headerText="Customer Name"
//                 width="150"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="OrderDate"
//                 headerText="Order Date"
//                 width="130"
//                 format="yMd"
//                 textAlign="Right"
//               />
//               <ColumnDirective
//                 field="Freight"
//                 headerText="Freight"
//                 width="120"
//                 format="C2"
//                 textAlign="Right"
//               />
//               <ColumnDirective
//                 field="ShippedDate"
//                 headerText="Shipped Date"
//                 width="130"
//                 format="yMd"
//                 textAlign="Right"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="ShipCountry"
//                 headerText="Ship Country"
//                 width="150"
//               ></ColumnDirective>

//               <ColumnDirective
//                 field="ctxMenu"
//                 headerText=""
//                 width="auto"
//                 minWidth="75"
//                 headerTextAlign="right"
//                 // commands={contextMenuCommand}
//               />
//             </ColumnsDirective>
//             <Inject services={[Page, Resize, ContextMenu, CommandColumn]} />
//           </GridComponent>
//         {/* )} */}
//       </div>
//     </div>
//   );
// }
// // export default Localbinding1;

// function App() {
//     return (
//         // <>
//         // <nav style={{marginTop: '100px'}}>
//         //   <ul>
//         //     <li>
//         //       <Link to="/">Grid1</Link>
//         //     </li>
//         //     <li>
//         //       <Link to="/grid2">Grid2</Link>
//         //     </li>	
//         //   </ul>
//         // </nav>
  
//         // <Routes>
//         //   <Route path="/" element={<Localbinding/>} />
//         //   <Route path="/grid2" element={<Localbinding1 />} />
//         // </Routes>
//         // </>
//         <BrowserRouter>  
// 			  	<nav style={{marginTop: '100px'}}>
//             		<ul>
//               			<li>
//                 			<Link to="/">Grid1</Link>
//               			</li>
//               			<li>
//                 			<Link to="/grid2">Grid2</Link>
//               			</li>	
//             		</ul>
//           		</nav>
	
//           		<Routes>
//             		<Route path="/" element={<Localbinding />} />
//             		<Route path="/grid2" element={<Localbinding1 />} />
//           		</Routes>
//         	</BrowserRouter> 
//     );
// }
// export default App;


// // 525816-template-checkboxonly-focus

// function App() {
//   // custom code start
//   const SAMPLE_CSS = `
//   .image {
//       position: absolute;
//       background-repeat: no-repeat;
//       background-image: url('https://ej2.syncfusion.com/react/demos/src/grid/images/spinner.gif');
//       background-position: center;
//       width: 16px;
//       height: 28px;
//   }

//   .e-bigger .image {
//       height: 36px;
//   }
  
//   #popup {
//       position: absolute;
//       background-color: transparent;
//       display: none;
//       z-index: 100;
//   }
//   .div-button{
//       margin: 5px 5px 5px 0;
//   }

//   #performanceTime {
//       float: right;
//       margin-top: 3px;
//   }

//   .e-bigger #performanceTime{
//       margin-top: 8px;
//   }`;
//   let grid;
//   let date1;
//   let date2;
//   let flag = true;
//   let data = [];
//   const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
//   const editSettings = { allowEditing: true, allowDeleting: true, newRowPosition: 'Top' };
//   const validationSno = { required: true, digits: true };
//   const validationRule = { required: true };
//   function onclick() {
//       if (!data.length) {
//           show();
//           datasource();
//           date1 = new Date().getTime();
//           grid.dataSource = data = virtualData;
//           grid.editSettings.allowAdding = true;
//       }
//       else {
//           flag = true;
//           show();
//           date1 = new Date().getTime();
//           grid.refresh();
//       }
//   }
//   function show() {
//       document.getElementById('popup').style.display = 'inline-block';
//   }
//   function hide() {
//       if (flag && date1) {
//           date2 = new Date().getTime();
//           document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) + 'ms';
//           flag = false;
//       }
//       document.getElementById('popup').style.display = 'none';
//   }
//   const selectionSettings = {
//       checkboxOnly: true,
//   };
//   return (<div className='control-pane'>
//           <div className='control-section'>
//               <style>
//                   {SAMPLE_CSS}
//               </style>
//               <div className='div-button'>
//                   <ButtonComponent cssClass={'e-info'} onClick={onclick.bind(this)}>Load 100K Data</ButtonComponent>
//                   <span id="popup">
//                       <span id="gif" className="image"></span>
//                   </span>
//                   <span id="performanceTime">Time Taken: 0 ms</span>
//               </div>
//               <GridComponent dataSource={[]} enableVirtualization={true} enableColumnVirtualization={true} height={300} ref={g => grid = g} dataBound={hide.bind(this)} toolbar={toolbarOptions}
//               selectionSettings={selectionSettings}
//               editSettings={editSettings}>
//                   <ColumnsDirective>
//                       <ColumnDirective field='SNo' headerText='S.No' width='140' validationRules={validationSno} isPrimaryKey={true}></ColumnDirective>
//                   <ColumnDirective field='FIELD1' headerText='Player Name' template={() => (

//                       <div>

//                           <a href="https://google.com/">

//                               Template link

//                           </a>

//                       </div>

//                   )} width='130'></ColumnDirective>
//                       <ColumnDirective field='FIELD2' headerText='Year' width='100'></ColumnDirective>
//                       <ColumnDirective field='FIELD3' headerText='Sports' width='160' validationRules={validationRule} editType='dropdownedit'></ColumnDirective>
//                       <ColumnDirective field='FIELD4' headerText='Country' width='160' editType='dropdownedit'></ColumnDirective>
//                       <ColumnDirective field='FIELD5' headerText='LGID' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD6' headerText='GP' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD7' headerText='GS' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD8' headerText='Minutes' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD9' headerText='Points' width='130'></ColumnDirective>
//                       <ColumnDirective field='FIELD10' headerText='OREB' width='140'></ColumnDirective>
//                       <ColumnDirective field='FIELD11' headerText='DREB' width='140'></ColumnDirective>
//                       <ColumnDirective field='FIELD12' headerText='REB' width='130'></ColumnDirective>
//                       <ColumnDirective field='FIELD13' headerText='Assists' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD14' headerText='Steals' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD15' headerText='Blocks' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD16' headerText='Turnovers' width='140'></ColumnDirective>
//                       <ColumnDirective field='FIELD17' headerText='PF' width='100'></ColumnDirective>
//                       <ColumnDirective field='FIELD18' headerText='FGA' width='150'></ColumnDirective>
//                       <ColumnDirective field='FIELD19' headerText='FGM' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD20' headerText='FTA' width='150'></ColumnDirective>
//                       <ColumnDirective field='FIELD21' headerText='FTM' width='140'></ColumnDirective>
//                       <ColumnDirective field='FIELD22' headerText='Three Attempted' width='170'></ColumnDirective>
//                       <ColumnDirective field='FIELD23' headerText='Three Made' width='150'></ColumnDirective>
//                       <ColumnDirective field='FIELD24' headerText='Post GP' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD25' headerText='Post GS' width='120'></ColumnDirective>
//                       <ColumnDirective field='FIELD26' headerText='Post Minutes' width='150'></ColumnDirective>
//                       <ColumnDirective field='FIELD27' headerText='Post Points' width='140'></ColumnDirective>
//                       <ColumnDirective field='FIELD28' headerText='Post OREB' width='160'></ColumnDirective>
//                       <ColumnDirective field='FIELD29' headerText='Post DREB' width='160'></ColumnDirective>
//                       <ColumnDirective field='FIELD30' headerText='Post REB' width='160' editType='numericedit' validationRules={validationRule}></ColumnDirective>
//                   </ColumnsDirective>
//                   <Inject services={[VirtualScroll, Toolbar, Edit]}/>
//               </GridComponent>
//           </div>
//       </div>);
// }
// export default App;




// //539098-persistence-with-templlate
// // eslint-disable-next-line
// import SharedGrid from './Grid';
// const App = (props) => {
//     const gridId = 'my-clients-grid';
//     const gridStId = `${gridId}-persistence`;
//     const gridInstanceRef = useRef(null);
//     const what = localStorage.getItem(gridStId);
//     const [usePersistence, setUsePersistence] = useState(
//       what === true || what === 'true'
//     );
//     const [loaded, setLoaded] = useState(false);
  
//     useEffect(() => {
//       if (usePersistence === null) return;
//       if (!loaded) return;
  
//       if (usePersistence) {
//         if (usePersistence === null) return;
//       if (!loaded) return;
//         window.localStorage.setItem(gridStId, true);
//       } else {
//         window.localStorage.setItem(gridStId, false);
//         // localStorage.removeItem(`grid${gridId}`);
//       }
//       if (gridInstanceRef.current) {
//         gridInstanceRef.current.hardRefresh();
//       }
  
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [usePersistence]);
  
//     useEffect(() => {
//       setLoaded(true);
//     }, []);
  
//     const customerTemplate = (props) => {
//       return (
//         <div>
//           <span className="e-icons e-header"></span>Customer ID
//         </div>
//       );
//     };
//     const headerTemplate = customerTemplate;
  
//     const gridTemplate = (props) => {
//       return (
//         <div>
//           <a rel="nofollow" href="https://en.wikipedia.org/wiki/\${ShipCountry}">
//             <span className="e-icons e-column">Custom Template - {props.ShipRegion}</span>
//           </a>
//         </div>
//       );
//     };
//     const columnTemplate = gridTemplate;
  
//     var headerColumns = [];
//     useMemo(() => {
//       if (window.localStorage['gridmy-clients-grid']) {
//         var persistedColumns = JSON.parse(window.localStorage['gridmy-clients-grid']).columns;
//         persistedColumns.forEach((persistColumn) => {
//           if (persistColumn.field === 'ShipRegion') {
//             persistColumn.template = columnTemplate;
//           }
//           headerColumns.push(persistColumn);
//         });
//       } else {
//         headerColumns = [
//           {
//             field: 'OrderID',
//             headerText: 'Order ID',
//             width: '120',
//             textAlign: 'Right',
//           },
//           {
//             field: 'CustomerName',
//             headerText: 'Customer Name',
//           },
//           {
//             field: 'ShipRegion',
//             headerText: 'Ship Region',
//             width: '150',
//             template: columnTemplate,
//             // template: `<div>
//             //     <a rel="nofollow" href="https://en.wikipedia.org/wiki/\${ShipCountry}">
//             //     <span className="e-icons e-column">Custom Template - \${ShipRegion}</span>
//             //     </a>
//             // </div>`
//           },
//           {
//             field: 'OrderDate',
//             headerText: 'Order Date',
//             width: '130',
//             format: 'yMd',
//             textAlign: 'Right',
//           },
//           {
//             field: 'Freight',
//             headerText: 'Freight',
//             width: '120',
//             format: 'C2',
//             textAlign: 'Right',
//           },
//           {
//             field: 'ShippedDate',
//             headerText: 'Shipped Date',
//             width: '130',
//             format: 'yMd',
//             textAlign: 'Right',
//           },
//           {
//             field: 'ShipCountry',
//             headerText: 'Ship Country',
//             width: '150',
//           },
//         ];
//       }
//     }, [columnTemplate, gridTemplate, headerColumns])
    
  
//     const disablePersistance = () => {
//       setUsePersistence(false);
//       window.localStorage.removeItem(`grid${gridId}`);
//     };
  
//     const enablePersistance = () => {
//       setUsePersistence(true);
//       // if use column template
//       var persistedGridSettings = JSON.parse((gridInstanceRef.current.gridInstance).getPersistData());
//           var gridColumns = Object.assign([], (gridInstanceRef.current.gridInstance).getColumns());
//           (persistedGridSettings).columns.forEach((persistedColumn) => {
//               const column = gridColumns.find((col) => col.field === persistedColumn.field);
//               if (column) {
//                   persistedColumn.template = (column).template;
//                   persistedColumn.headerTemplate = (column).headerTemplate;
//                   persistedColumn.headerText = (column).headerText;
//               }
//           });
//           window.localStorage.setItem(`grid${gridId}`, JSON.stringify(persistedGridSettings));
//     };
//     function dataBound(args) {
//       console.log('databound')
//     }
  
//     return (
//       <div>
//         <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
//           <div
//             id="top-header"
//             className="MarsResearch"
//             style={{ display: 'flex', justifyContent: 'space-between' }}
//           >
//             <div id="target1" className="control-section dialog-target1">
//               <div id="customization">
//                 <div className="animate"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="control-pane">
//           <div className="control-section" style={{ marginTop: '120px' }}>
//             {usePersistence && (
//               <button type="button" onClick={disablePersistance}>
//                 Disable Persistance
//               </button>
//             )}
//             {!usePersistence && (
//               <button type="button" onClick={enablePersistance}>
//                 Enable Persistance
//               </button>
//             )}
//             <SharedGrid
//               gridId={gridId}
//               enablePersistance={usePersistence}
//               ref={gridInstanceRef}
//               headerColumns={headerColumns}//window.localStorage['gridmy-clients-grid'] ? JSON.parse(window.localStorage['gridmy-clients-grid']).columns : 
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default App;



// 550870-checkbox-filter-page
// function App() {
//   let pdtBatchGrid;
//   // let selectedRowId = -1;
//   const [selectedRowId, setSelectedRowId] = useState(-1);
//   // const [verifiedIndexes, setVerifiedIndexes] = useState([]);
//   const [setData, setSetData] = useState([]);
//   // const [isDisableState, setDisableState] = useState(false);
//   let isDisableState = false;

//   useMemo(() => {
//     debugger;
//     if (isDisableState && pdtBatchGrid) {
//       pdtBatchGrid.headerModule.headerPanel.querySelector('.e-checkbox-wrapper').classList.remove('e-checkbox-disabled');
//     }
//     // if (!setData.length) {
//     //   setSetData(yourDataSource);
//     // }
//   }, [isDisableState, pdtBatchGrid])

//   useEffect(() => {
//     debugger;
//     if (!setData.length) {
//       setSetData(yourDataSource);
//     }
//   }, [yourDataSource])

//   const handleCheckboxChange = (args) => {
//     const selectedRowId = args.selectedRowIndexes.length > 0 ? setData[args.selectedRowIndexes[0]].row_id : null;
//     setSelectedRowId(selectedRowId);
//     pdtBatchGrid.setProperties({selectedRowIndex: selectedRowId}, true);
//     if (isDisableState) {
//       pdtBatchGrid.headerModule.headerPanel.querySelector('.e-checkbox-wrapper').classList.add('e-checkbox-disabled');
//     } else {
//       pdtBatchGrid.headerModule.headerPanel.querySelector('.e-checkbox-wrapper').classList.remove('e-checkbox-disabled');
//     }
//   };

//   const handleVerifyItem = (data) => {
//     if (data.index !== selectedRowId) {
//       return;
//     }
//     let tempData = setData.map((row, index) =>
//       index === data.row_id ? { ...row, isBatchVerified: true } : row
//     )
//     setSetData(tempData);
//     if (selectedRowId !== -1) {
//       // setVerifiedIndexes(verifiedIndexes.push(selectedRowId));
//       setSelectedRowId(-1);
//       pdtBatchGrid.setProperties({selectedRowIndex: -1}, true);
//       // selectedRowId = -1;
//       removeDisable();
//       // setDisableState(false);
//       isDisableState = false;
//     }
//   };

//   const removeDisable = () => {
//     pdtBatchGrid.pagerModule.pagerObj.containerModule.element.classList.remove('e-disabled');// enabled pager container style
//     pdtBatchGrid.pagerModule.pagerObj.pagerdropdownModule.pagerDropDownDiv.classList.remove('e-disabled');// enabled pager dropdown style
//     pdtBatchGrid.pagerModule.pagerObj.pagerdropdownModule.pagerDropDownDiv.querySelector('.e-input-group.e-control-wrapper.e-ddl').classList.remove('e-disabled');// enabled pager dropdown with disable symbol
//     pdtBatchGrid.pagerModule.pagerObj.pagerMessageModule.pageCountMsgElem.parentElement.classList.remove('e-disabled');// enabled pager message style
//     pdtBatchGrid.headerModule.headerPanel.classList.remove('e-disabled');
//     pdtBatchGrid.headerModule.headerPanel.querySelector('.e-checkbox-wrapper').classList.remove('e-checkbox-disabled');
//     pdtBatchGrid.headerModule.headerTable.querySelector('.e-filterbar').classList.remove('e-disabled');// enabled filterbar row style
//     const inputElems = pdtBatchGrid.headerModule.headerTable.querySelectorAll('.e-filterbar input');
//     inputElems.forEach((input, index) => {
//       input.removeAttribute('disabled');
//       input.parentElement.classList.remove('e-disabled');// enabled filterbar input with disable symbol
//     });
//   }

//   const addDisable = () => {
//     pdtBatchGrid.pagerModule.pagerObj.containerModule.element.classList.add('e-disabled');// diabled pager container style
//     pdtBatchGrid.pagerModule.pagerObj.pagerdropdownModule.pagerDropDownDiv.classList.add('e-disabled');// diabled pager dropdown style
//     pdtBatchGrid.pagerModule.pagerObj.pagerdropdownModule.pagerDropDownDiv.querySelector('.e-input-group.e-control-wrapper.e-ddl').classList.add('e-disabled');// diabled pager dropdown with disable symbol
//     pdtBatchGrid.pagerModule.pagerObj.pagerMessageModule.pageCountMsgElem.parentElement.classList.add('e-disabled');// diabled pager message style
//     pdtBatchGrid.headerModule.headerPanel.classList.add('e-disabled');
//     pdtBatchGrid.headerModule.headerPanel.querySelector('.e-checkbox-wrapper').classList.add('e-checkbox-disabled');
//     pdtBatchGrid.headerModule.headerTable.querySelector('.e-filterbar').classList.add('e-disabled');// diabled filterbar row style
//     const inputElems = pdtBatchGrid.headerModule.headerTable.querySelectorAll('.e-filterbar input');
//     inputElems.forEach((input, index) => {
//       input.setAttribute('disabled', true);
//       input.parentElement.classList.add('e-disabled');// diabled filterbar input with disable symbol
//     });
//   }

//   const qtyTemplate = ((props) => {
//     return (
//       <div className="primary-pdts-input-cont ">
//         <NumericTextBoxComponent
//           value={props.qty}
//           step={0.01}
//           showSpinButton={false}
//           min={0}
//           disabled={true}
//         />
//       </div>
//     )
//   })
//   const rowSelecting = (args) => {
//     debugger;
//     // if (!args.isInteracted) {
//     //   args.cancel = true;
//     // }
//     // if (selectedRowId) {
//     //   args.cancel = true;
//     // }
//   }
//   const rowSelected = (args) => {
//     debugger;
//     if (args.data) {
//       setSelectedRowId(args.data.row_id);
//       pdtBatchGrid.setProperties({selectedRowIndex: args.data.row_id}, true);
//       // selectedRowId = args.data.row_id;
//       if (pdtBatchGrid) {
//         const currentViewData = pdtBatchGrid.getCurrentViewRecords();
//         // setTempData(currentViewData);
//         const selectedIndexes = pdtBatchGrid.getSelectedRowIndexes();
//         setData.forEach((row, index) => {
//           const rowElement = pdtBatchGrid.getRowByIndex(row.row_id);
//           if (rowElement) {
//             if (selectedIndexes.includes(row.row_id)) {
//               rowElement.classList.remove('e-disabled');// enabled row style
//             } else {
//               rowElement.classList.add('e-disabled');// diabled row style
//               rowElement.querySelector('.e-checkbox-wrapper').classList.add('e-checkbox-disabled');// diabled checkbox style
//             }
//           }
//         });
//         addDisable();
//         // setDisableState(true);
//         isDisableState = true;
//       }
//     }
//   }
//   const rowDeselecting = (args) => {
//     debugger;
//     // if (!args.isInteracted) {
//     //   args.cancel = true;
//     // }
//     // if (args.data.row_id !== selectedRowId) {
//     //   args.cancel = true;
//     // }
//   }
//   const rowDeselected = (args) => {
//     debugger;
//     if (selectedRowId !== -1) {
//       setSelectedRowId(-1);
//       pdtBatchGrid.setProperties({selectedRowIndex: -1}, true);
//       // selectedRowId = -1;
//       removeDisable();
//       // setDisableState(true);
//       isDisableState = true;
//     }
//   }

//   return (
//     <GridComponent
//       dataSource={setData}
//       allowSelection={true}
//       ref={(pbg) => (pdtBatchGrid = pbg)}
//       allowFiltering={true}
//       allowPaging={true}
//       pageSettings={{ pageSize: 5, pageSizes: ['5', '10', '15', '20', '25'] }}
//       selectionSettings={{
//         type: 'Multiple',
//         checkboxMode: 'ResetOnRowClick',
//         checkboxOnly: true,
//       }}
//       checkBoxChange={(args) => { handleCheckboxChange(args) }}
//       actionBegin={(args) => {
//         if (args.requestType === 'paging' && selectedRowId !== -1) {
//           args.cancel = true;
//         }
//       }}
//       actionComplete={(args) => {
//         debugger;
//       }}
//       rowSelecting={rowSelecting.bind(this)}
//       rowSelected={rowSelected.bind(this)}
//       rowDeselecting={rowDeselecting.bind(this)}
//       rowDeselected={rowDeselected.bind(this)}
//     >

//       <ColumnsDirective>
//         <ColumnDirective type='checkbox' width='20' />
//         <ColumnDirective
//           field='product_name'
//           headerText="Product Name"
//           width='60'
//           textAlign="left"
//           filterTemplate={() => {
//             return <></>
//           }}
//           headerTextAlign={"Center"}
//         />
//         <ColumnDirective
//           field='expiry_date'
//           headerText="Expiry Date"
//           width='30'
//           textAlign="right"
//           headerTextAlign={"Center"}
//         />
//         <ColumnDirective
//           field='qty'
//           headerText="Existing Quantity"
//           width='20'
//           format="##.00"
//           textAlign="right"
//           headerTextAlign={"Center"}
//         />
//         <ColumnDirective
//           field='uom_name'
//           headerText="UOM"
//           width='20'
//           textAlign="left"
//           headerTextAlign={"Center"}
//         />
//         <ColumnDirective
//           field='qty_to_adjust'
//           headerText="Quantity To Adjust"
//           width='30'
//           format="##.00"
//           headerTextAlign={"Center"}
//           template={qtyTemplate}
//           filterTemplate={() => {
//             return <></>
//           }}
//         />
//         <ColumnDirective
//           headerText="Actions"
//           width='30'
//           textAlign="center"
//           headerTextAlign={"Center"}
//           template={(data) => {
//             return (<div className="grid-btn-display_flex_row" >
//               <div className="stock_btns" >
//                 {data.isBatchVerified ? <div className="batch-verfd-text-SA">Verified</div> :
//                   <div className="batch-verfd-text-SA" onClick={() => handleVerifyItem(data)} >Verify Batch</div>
//                 }
//               </div>
//             </div>)
//           }}
//           filterTemplate={() => {
//             return <></>
//           }}
//         />
//       </ColumnsDirective>
//       <Inject services={[Selection, Page, Filter]} />
//     </GridComponent>
//   );
// }
// const yourDataSource = [
//   {
//     "row_id": 0,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "CREJ-67223-FPO20212471-5823-1",
//     "expiry_date": "19-Dec-2023",
//     "qty": "0.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false
//   },
//   {
//     "row_id": 1,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "WREJ-67235-FPO20212471-5823-1",
//     "expiry_date": "19-Dec-2023",
//     "qty": "5.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false,
//   },
//   {
//     "row_id": 2,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "WREJ-67260-FPO20212471-5823-1",
//     "expiry_date": "20-Dec-2023",
//     "qty": "3.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false,
//   },
//   {
//     "row_id": 3,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "WREJ-67299-FPO20212471-5823-1",
//     "expiry_date": "26-Dec-2023",
//     "qty": "3.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false,
//   },
//   {
//     "row_id": 4,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "FPO20212471-5823-1",
//     "expiry_date": "31-Dec-2099",
//     "qty": "6.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false,
//   },
//   {
//     "row_id": 5,
//     "product_id": 13116,
//     "product_name": "Onion White",
//     "batch_no": "FPO20212573-5823-1",
//     "expiry_date": "31-Dec-2099",
//     "qty": "0.00",
//     "uom_name": "Kg",
//     "mapping_org_id": 54342,
//     "uom_ws_id": "198",
//     "qty_to_adjust": "",
//     "isBatchVerified": false,
//   }
// ].map(row => ({ ...row, selectable: true }));


//540683 - script error on grid.ts - resetindentwidth widthservice
// function App() {
//   let grid;

//   const [show, setShow] = React.useState(true);

//   const contextMenuCommand = [
//     {
//       title: 'View Options',
//       buttonOption: {
//         iconCss: 'e-icons e-more-horizontal-1',
//       },
//     },
//   ];

//   const dataBound = () => {
//     if (grid) {
//       grid.autoFitColumns(['CustomerName']);
//     }
//   };

//   return (
//     <div className="control-pane">
//       <div className="control-section">
//         <button
//           style={{ marginBottom: '20px' }}
//           onClick={() => setShow((prev) => !prev)}
//         >
//           {show ? 'Hide' : 'Show'} Grid
//         </button>

//         <GridComponent
//           id="grid1"
//           dataSource={data}
//           allowPaging={true}
//           allowResizing={true}
//           height={200}
//           pageSettings={{ pageCount: 5 }}
//           dataBound={dataBound}
//           ref={(g) => (grid = g)}
//         >
//           <ColumnsDirective>
//             <ColumnDirective
//               field=""
//               type="checkbox"
//               headerText=""
//               width="35"
//               minWidth="35"
//               textAlign="Center"
//             />
//             <ColumnDirective
//               field="OrderID"
//               headerText="Order ID"
//               width="120"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="CustomerName"
//               headerText="Customer Name"
//               width="150"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="ctxMenu"
//               headerText=""
//               width="auto"
//               minWidth="75"
//               headerTextAlign="right"
//               commands={contextMenuCommand}
//             />
//           </ColumnsDirective>
//           <Inject services={[Page, Resize, ContextMenu, CommandColumn]} />
//         </GridComponent>
//         <br />
//         {show && (
//           <GridComponent
//             id="grid2"
//             dataSource={data}
//             allowPaging={true}
//             allowResizing={true}
//             height={200}
//             pageSettings={{ pageCount: 5 }}
//             dataBound={dataBound}
//             ref={(g) => (grid = g)}
//           >
//             <ColumnsDirective>
//               <ColumnDirective
//                 field=""
//                 type="checkbox"
//                 headerText=""
//                 width="35"
//                 minWidth="35"
//                 textAlign="Center"
//               />
//               <ColumnDirective
//                 field="OrderID"
//                 headerText="Order ID"
//                 width="120"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="CustomerName"
//                 headerText="Customer Name"
//                 width="150"
//               ></ColumnDirective>
//               <ColumnDirective
//                 field="ctxMenu"
//                 headerText=""
//                 width="auto"
//                 minWidth="75"
//                 headerTextAlign="right"
//                 commands={contextMenuCommand}
//               />
//             </ColumnsDirective>
//             <Inject services={[Page, Resize, ContextMenu, CommandColumn]} />
//           </GridComponent>
//         )}
//       </div>
//     </div>
//   );
// }


//186986 - group selection
// let refresh;
// function App() {
//   const toolbarOptions = ['Edit', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true };
//     const editparams = { params: { popupHeight: '300px' } };
//     const validationRule = { required: true };
//     const orderidRules = { required: true, number: true };
//     const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
//     const groupOptions = { showGroupedColumn: false, columns: ['ShipCountry'] };
//     let gridInstance;
//     const visible = false;
//     const animationSettings = { effect: 'None' };
//     let alertDialogInstance;
//     const alertButtons = [{
//             click: () => {
//                 alertDialogInstance.hide();
//             },
//             buttonModel: { content: 'OK', isPrimary: true }
//         }];
//     function dataBound() {
//         console.log('databound');
//         if (refresh) {
//             gridInstance.groupColumn('ShipCountry');
//             refresh = false;
//         }
//     }
//     function rowSelecting(args) {
//         console.log('rowselecting', args);
//     }
//     function rowDeselecting(args) {
//         // args.cancel = true;
//         console.log('rowdeselecting', args);
//     }
//     function load() {
//         refresh = this.refreshing;
//     }
//     function columnDragStart(args) {
//         if (args.column.field === 'OrderDate') {
//             alertDialogInstance.show();
//         }
//     }
//     function created() {
//         gridInstance.on('columnDragStart', columnDragStart, this);
//     }
//     function recordClick(args) {
//         console.log('record click => ', args);
//     }
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 <GridComponent dataSource={orderDataSource} allowPaging={true} ref={grid => gridInstance = grid} toolbar={toolbarOptions} pageSettings={{ pageCount: 5 }} editSettings={editSettings}
//                 selectionSettings={{type: 'Multiple', persistSelection: true}}
//                 allowGrouping={true} groupSettings={groupOptions} allowSorting={true} height="320" dataBound={dataBound.bind(this)} recordClick={recordClick.bind(this)} rowSelecting={rowSelecting.bind(this)} rowDeselecting={rowDeselecting.bind(this)} load={load} created={created}>
//                     <ColumnsDirective>
//                         <ColumnDirective headerText='cb' type="CheckBox" visible={false} width="50"/>
//                         <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
//                         <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' validationRules={validationRule}></ColumnDirective>
//                         <ColumnDirective field='Freight' headerText='Freight' width='140' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
//                         <ColumnDirective field='OrderDate' headerText='Order Date' allowGrouping={false} editType='datetimepickeredit' format={format} width='160'></ColumnDirective>
//                         <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams}></ColumnDirective>
//                     </ColumnsDirective>
//                     <Inject services={[Page, Group, Sort, Edit, Toolbar]}/>
//                 </GridComponent>
//                 <DialogComponent id="alertDialog" header='Grouping' visible={visible} animationSettings={animationSettings} width='300px' content='Grouping is disabled for this column' ref={alertdialog => alertDialogInstance = alertdialog} target='.control-section' buttons={alertButtons}></DialogComponent>
//                 <div className="e-dsalign">Source:
//                     <a href="https://en.wikipedia.org/wiki/List_of_prolific_inventors" target='_blank'>Wikipedia: List of Prolific inventors</a>
//                 </div>
//             </div>
//         </div>);
// }

// // 555094-master grid re-render with script error.
// function App() {
//   const key = null;
//     const detail = [];
//     let grid = React.useRef();
//     let detailGrid;
//     const [masterGridData, setMasterGridData] = useState([]);
//     const [detailGridData, setDetailGridData] = useState([]);
//     const names = ['HUNGO', 'CHOPS', 'BLONP', 'ANTON', 'ALFKI'];
//     const master = customerData.filter((e) => names.indexOf(e.CustomerID) !== -1);
//     ;
//     useEffect(() => {
//       setTimeout(() => {
//         console.log('use effect time out');
//         setMasterGridData(master.slice(0, 10));
//       }, 100);
//       // setDetailGridData(data)
//     }, [])
//     function rowselect(args) {
//       if (args.data) {
//         setTimeout(() => {
//             let selRecord = args.data;
//             let selecteMessage = document.getElementsByClassName('e-statustext')[0];
//             let message = selecteMessage.querySelector('b');
//             message.textContent = selRecord.ContactName;
//             let data1;
//             // detailGrid.dataSource = data.filter((record) => record.CustomerName === selRecord.ContactName).slice(0, 5);
//             data1 = data.filter((record) => record.CustomerName === selRecord.ContactName).slice(0, 5);
//             setDetailGridData(data1);
//         }, 100);
//       }
//     }
//     function dataBound(args) {
//         console.log('master databound');
//     }
//     function UpdatePaidStatus(props) {
//       if (grid !== null) {
//         const rowData = grid?.getRowInfo(props?.target).rowData;
//         console.log('checked checkbox row data => ', rowData);
//       }
//       console.log('checkbox clicked');
//     }
//     const ActionTemplate = useCallback((args) => {
//       // console.log('ispaid => ', args.isPaid);
//         return (
//           <div className="custom-control custom-checkbox">
//             <input
//               id={args?.OrderID}
//               className="customCheck"
//               htmlFor="isPaid"
//               type="checkbox"
//               defaultChecked={args.isPaid}
//               onClick={UpdatePaidStatus}
//             />
//             <label
//               className="comparative-chkbx font-16"
//               htmlFor={args?.OrderID}
//             ></label>
//           </div>
//         );
//     });
//     const setGridRef = (gridInstance) => {
//       if (gridInstance) {
//         grid = gridInstance;
//       }
//     };
//     function gridTemplate(props) {
//       return (
//         <table className="detailtable" style={{ width: "100%" }}>
//           <colgroup>
//             <col style={{ width: "35%" }} />
//             <col style={{ width: "35%" }} />
//             <col style={{ width: "30%" }} />
//           </colgroup>
//           <tbody>
//             <tr>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Code :</p>
//                   <p className="font-weight-bold color1">{props.agency_Code}</p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Name :</p>
//                   <p className="font-weight-bold color1">{props.agency_Name}</p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Email :</p>
//                   <p className="font-weight-bold color1">{props.agency_Email}</p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>ADDRESS1 :</p>
//                   <p className="font-weight-bold color1">
//                     {props.agency_Address1}
//                   </p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>ADDRESS2 :</p>
//                   <p className="font-weight-bold color1">
//                     {props.agency_Address2}
//                   </p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>ADDRESS2 :</p>
//                   <p className="font-weight-bold color1">{props.agency_City}</p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>STATE :</p>
//                   <p className="font-weight-bold color1">{props.agency_State}</p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Zip :</p>
//                   <p className="font-weight-bold color1">{props.agency_Zip}</p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Previous Balance : </p>
//                   <p className="font-weight-bold color1">
//                     ${props.previous_Balance}
//                   </p>
//                 </div>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Date :</p>
//                   <p className="font-weight-bold color1">
//                     {new Date(props.agency_Statement_Date).toLocaleDateString(
//                       "en-us"
//                     )}
//                   </p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>Start Period :</p>
//                   <p className="font-weight-bold color1">
//                     {new Date(
//                       props.agency_Statement_Start_Period
//                     ).toLocaleDateString("en-us")}
//                   </p>
//                 </div>
//               </td>
//               <td>
//                 <div className="col-3 textFormat">
//                   <p>End Period : </p>
//                   <p className="font-weight-bold color1">
//                     {new Date(
//                       props.agency_Statement_End_Period
//                     ).toLocaleDateString("en-us")}
//                   </p>
//                 </div>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       );
//     }
//     const detailTemplate = gridTemplate;
//     // function rowselect(args) {
//     //   if (args?.target?.id !== "check") {
//     //     setTimeout(() => {
//     //       let selRecord = args.data;
//     //       let selecteMessage = document.getElementsByClassName("agencyName")[0];
//     //       let message = selecteMessage.querySelector("b");
//     //       message.textContent = selRecord?.agency_Name;
  
//     //       let see;
//     //       let d = GetTransactionsGrid();
//     //       d.then((result) => {
//     //         //if (transactionDetailGrid && transactionDetailGrid.dataSource) {
//     //         see = result?.filter(
//     //           (record) =>
//     //             record.commissionS_AGENT_CODE === selRecord?.agency_Code &&
//     //             new Date(record.commissionS_STATEMENT_DATE).toLocaleString(
//     //               "en-us"
//     //             ) ===
//     //               new Date(selRecord?.agency_Statement_Date).toLocaleString(
//     //                 "en-us"
//     //               )
//     //         );
//     //         // }
//     //         //console.log(see);
//     //         setTransactionGridData(see);
//     //       }).catch((error) => {
//     //         console.error("Error fetching data:", error);
//     //       });
//     //     }, 100);
//     //   } else {
//     //     setTimeout(() => {
//     //       let selRecord = args.data;
//     //       let selecteMessage = document.getElementsByClassName("agencyName")[0];
//     //       let message = selecteMessage.querySelector("b");
//     //       message.textContent = selRecord?.agency_Name;
//     //       let see;
//     //       let d = GetTransactionsGrid();
//     //       d.then((result) => {
//     //         //console.log("transac", result);
  
//     //         // if (transactionDetailGrid && transactionDetailGrid.dataSource) {
  
//     //         see = result?.filter(
//     //           (record) =>
//     //             record.commissionS_AGENT_CODE === selRecord?.agency_Code &&
//     //             new Date(record.commissionS_STATEMENT_DATE).toLocaleString(
//     //               "en-us"
//     //             ) ===
//     //               new Date(selRecord?.agency_Statement_Date).toLocaleString(
//     //                 "en-us"
//     //               )
//     //         );
//     //         //}
//     //         setTransactionGridData(see);
//     //       }).catch((error) => {
//     //         console.error("Error fetching data:", error);
//     //       });
//     //     }, 200);
//     //   }
//     // }
//     const editOptions = {
//       allowAdding: true,
//       allowEditing: false,
//       mode: "Dialog",
//       // template: FormTemplate,
//     };
//     const toolbarOptions2 = ["Add", "Search"];
//     const FilterOptions = {
//       type: "Menu",
//     };
//     const rowDataBound = useCallback((args) => {
//       if (args.row) {
//         if (getValue("verified", args.data)) {
//           args.row.classList.add("manual");
//           args.row.classList.add("check");
//           args.row.classList.add("color");
//           args.row.classList.add("change");
//         }
//       }
//       args.row.addEventListener("mouseover", (e) => {});
//     }, []);
//     const masterGridColumns = [
//         {
//           headerText: "ContactName",
//           field: "ContactName",
//           type: "string",
//           textAlign: "left",
//           allowEditing: false,
//         },
//         {
//           headerText: "CompanyName",
//           field: "CompanyName",
//           type: "string",
//           textAlign: "left",
//           allowEditing: false,
//         },
//         {
//           headerText: "Address",
//           field: "Address",
//           type: "string",
//           textAlign: "left",
//           allowEditing: false,
//         },
//         {
//           headerText: "Mark Paid",
//           field: "isPaid",
//           width: "100",
//           type: "boolean",
//           allowFiltering: false,
//           textAlign: "left",
//           template: ActionTemplate,
//         },
//         {
//           headerText: "Country",
//           field: "Country",
//           width: "100",
//           allowFiltering: false,
//           textAlign: "middle",
//         },
//       ];
//     const masterGridProps = {
//         key: "statements",
//         id: "gridcomp",
//         ref: setGridRef,
//         dataSource: masterGridData,
//         // dataSource: master.slice(0, 10),
//         allowPaging: true,
//         // allowAdding: true,
//         pageSettings: { pageCount: '5', pageSize: '5' },
//         detailTemplate: detailTemplate,
//         // actionBegin: actionBegin,
//         dataBound: dataBound.bind(this),
//         // actionComplete: actionComplete,
//         // allowEditing: true,
//         allowFiltering: true,
//         // filterSettings: FilterOptions,
//         // toolbar: toolbarOptions,
//         // toolbarClick: toolbarClick,
//         rowSelected: rowselect.bind(this),
//       };
//     const detailGridColumns = [
//       {
//         field: "verified",
//         headerText: "Commission Type",
//         displayAsCheckBox: true,
//         visible: false,
//         editType: "booleanedit",
//         textAlign: "left",
//         width: "130",
//       },
//         {
//           field: "OrderID",
//           headerText: "Code",
//           textAlign: "left",
//           width: "130",
//           allowAdding: false,
//         },
//         {
//           field: "Freight",
//           headerText: "Commission %",
//           textAlign: "left",
//           type: "number",
//           width: "140",
//         },
//         {
//           field: "ShipName",
//           headerText: "Type",
//           type: "string",
//           textAlign: "left",
//           width: "100",
//         },
//         {
//           field: "ShipCountry",
//           headerText: "Policy",
//           type: "string",
//           textAlign: "left",
//           width: "120",
//         },
//         {
//           field: "ShipAddress",
//           headerText: "Ins. Name",
//           type: "string",
//           textAlign: "left",
//           width: "120",
//         }
//       ];
//     const detailGridProps = {
//         key: "transactions",
//         id: "gridcomp2",
//         ref: (grid) => (detailGrid = grid),
//         // dataSource: detail,
//         dataSource: detailGridData,
//         allowSelection: false,
//         allowSorting: true,
//         allowPaging: true,
//         pageSettings: { pageCount: '5', pageSize: '5' },
//         allowEditing: false,
//         allowAdding: true,
//         allowFiltering: true,
//         editSettings: editOptions,
//         // actionBegin: actionBegin2,
//         // actionComplete: actionComplete2,
//         allowScrolling: true,
//         rowDataBound: rowDataBound,
//         filterSettings: FilterOptions,
//         width: "100%",
//         toolbar: toolbarOptions2,
//       };
    
//     return (<div className='control-pane'>
//             <div className='control-section'>
//                 {/* <GridComponent dataSource={master.slice(0, 10)} selectedRowIndex={2} rowSelected={rowselect.bind(this)} dataBound={dataBound.bind(this)}>
//                     <ColumnsDirective>
//                         <ColumnDirective field='ContactName' headerText='Customer Name' width='150'></ColumnDirective>
//                         <ColumnDirective field='CompanyName' headerText='Company Name' width='150'></ColumnDirective>
//                         <ColumnDirective field='Address' headerText='Address' width='150'/>
//                         <ColumnDirective field='isPaid' headerText='Mark Paid' width='130' template={ActionTemplate}/>
//                         <ColumnDirective field='Country' headerText='Country' width='130'/>
//                     </ColumnsDirective>
//                     <Inject services={[Selection]}/>
//                 </GridComponent>

//                 <div className='e-statustext'> Showing orders of Customer:  <b></b></div>

//                 <GridComponent dataSource={detail} allowSelection={false} ref={grid => detailGrid = grid}>
//                     <ColumnsDirective>
//                         <ColumnDirective field='OrderID' headerText='Order ID' width='100'></ColumnDirective>
//                         <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' type='number'/>
//                         <ColumnDirective field='ShipName' headerText='Ship Name' width='150'></ColumnDirective>
//                         <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
//                         <ColumnDirective field='ShipAddress' headerText='Ship Address' width='150'></ColumnDirective>
//                     </ColumnsDirective>
//                 </GridComponent> */}
//                 <div key="grid1">
//                   <DynamicGrid
//                     ind={"stgrid"}
//                     columns={masterGridColumns}
//                     gridProps={masterGridProps}
//                   />
//                 </div>
//                 <div className='e-statustext'> Showing orders of Customer:  <b></b></div>
//                 <div key="grid2">
//                   <DynamicGrid
//                     ind={"transcgrid"}
//                     columns={detailGridColumns}
//                     gridProps={detailGridProps}
//                   />
//                 </div>
//             </div>
//         </div>);
// }


// // 547583-initial grouping
// export class OrderService {
//   ajax = new Ajax({
//     mode: true,
//     onFailure: (e) => false,
//     type: 'GET',
//   });
//   // BASE_URL =
//   //   'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/';
//   // BASE_URL = 'https://ej2services.syncfusion.com/js/development/api/Orders';
//   BASE_URL = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders/"

//   execute(state) {
//     return this.getData(state);
//   }

//   getData(state) {
//     const skip = state.skip !== undefined ? '$skip=' + state.skip : undefined;
//     const take = state.take ? '$top=' + state.take : undefined;
//     const pageQuery = skip && take ? skip + '&' + take : undefined;
//     const groupQuery = state.orderby ? '$orderby='+ state.orderby : undefined;
//     const filterQuery = state.filter ? `` : undefined;
//     this.ajax.url = `${this.BASE_URL}?${state.requiresCounts ? '$count=true&' : ''}${filterQuery ? filterQuery + '&' : ''}${groupQuery ? groupQuery + '&' : ''}${pageQuery ? pageQuery : ''}`;


//     return this.ajax.send().then((response) => {
//       const data = JSON.parse(response);
//       if (data['@odata.count']) {
//         return {
//           count: parseInt( data['@odata.count'], 10),
//           result: getValue('value', data),
//         };
//       } else {
//         return {
//           result: getValue('value', data),
//         };
//       }
//     });
//   }
// }
// function App() {
//   let gridInstance;
//   let isInitialLoad;
//   let data;
//   // let data = new DataManager({
//   //   url: "https://services.odata.org/V4/Northwind/Northwind.svc/Orders/",
//   //   adaptor: new ODataV4Adaptor()
//   // });
//   const orderService = new OrderService();

//   const dataBound = () => {
//     console.log('databounded!');
//     if (
//       gridInstance &&
//       gridInstance.dataSource instanceof Array &&
//       !gridInstance.dataSource.length
//     ) {
//       const state = {
//         action: { requestType: 'infiniteScroll' },
//         skip: 0,
//         group: [],
//         groups: [],
//         sorted: [],
//         // take: gridInstance.pageSettings.pageSize * 3,
//         requiresCounts: true
//       };
//       let groupSettings = gridInstance.groupSettings;
//       if (groupSettings.columns.length) {
//         groupSettings.columns.forEach(column => {
//           state.groups.push(column);
//           state.sorted.push({name: column, direction: 'ascending'});
//         });
//         state.group.push(groupSettings.columns[groupSettings.columns.length - 1]);
//       }
//       dataStateChange(state);
//     }
//   };

//   const dataStateChange = (state) => {
//     if (state.action && (state.action.requestType === 'infiniteScroll' || state.action.requestType === 'grouping' || state.action.requestType === 'ungrouping' || !Object.keys(state.action).length)) {
//       orderService.execute(state).then((gridData) => {
//         if (gridInstance) {
//           // if (!Object.keys(state.action).length) {
//           //   gridInstance.dataBind();
//           //   return;
//           // }
//           // gridInstance.setProperties({dataSource: gridData}, false);
//           gridInstance.dataSource = gridData;
//           if (!isInitialLoad && gridInstance.groupSettings.columns.length) {
//             console.log(isInitialLoad ? true : false);
//             // gridInstance.refresh();
//             isInitialLoad = true;
//           } else if (!isInitialLoad && !gridInstance.groupSettings.columns.length) {
//             console.log(isInitialLoad ? true : false);
//             isInitialLoad = true;
//           }
//         }
//       });
//     }
//   };

//   return (
//     <div className="control-pane">
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="control-section">
//         <GridComponent
//           id="Grid"
//           dataSource={data}
//           ref={(grid) => (gridInstance = grid)}
//           // enableInfiniteScrolling={true}
//           height={400}
//           // pageSettings={{ pageSize: 50 }}
//           dataBound={dataBound}
//           dataStateChange={dataStateChange}
//           allowGrouping={true}
//           groupSettings={{ columns: ['CustomerID', 'ShipCountry'] }}
//         >
//           <ColumnsDirective>
//             <ColumnDirective
//               field="OrderID"
//               headerText="Order ID"
//               width="120"
//               textAlign="Right"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="CustomerID"
//               headerText="Customer ID"
//               width="160"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="EmployeeID"
//               headerText="Employee ID"
//               width="120"
//               textAlign="Right"
//             />
//             <ColumnDirective
//               field="ShipCountry"
//               headerText="Ship Country"
//               width="150"
//             ></ColumnDirective>
//           </ColumnsDirective>
//           <Inject services={[InfiniteScroll, Group, Page]} />
//         </GridComponent>
//       </div>
//     </div>
//   );
// }

// // 564898
// function App() {
//   const [ data, setData ] = useState([]);
//     const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
//     const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top' };
//     const editparams = { params: { popupHeight: '300px' } };
//     const validationRule = { required: true };
//     const orderidRules = { required: true, number: true };
//     const pageSettings = { pageCount: 5 };
//     const format = { type: 'dateTime', format: 'M/d/y hh:mm a' };
//     const gridDatasource = [
//         {
//           id: 1,
//           name: 'Admin',
//           date: 'Today',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "France",
//           reason: 'Reason 1',
//         },
//         {
//           id: 2,
//           name: 'User',
//           date: '17th Jan',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "Germany",
//           reason: 'Reason 1',
//         },
//         {
//           id: 3,
//           name: 'Guest',
//           date: '16th Jan',
//           status: 'Completed',
//           assignedTo: 'John Doe',
//           ShipCountry: "Brazil",
//           reason: 'Reason 1',
//         },
//       ];
//     let gridInstance;
//     let dropDownInstance;

//     const getAllDataForChapter = async () => {
//       debugger;
//       const response = await fetch("https://services.odata.org/V4/Northwind/Northwind.svc/Orders");
//        const movies = await response.json();
//        setData(movies.value);
//     };
  
//     useEffect(() => {
//       getAllDataForChapter();
//     }, []);
//     const droplist = [
//         { text: 'Top', value: 'Top' },
//         { text: 'Bottom', value: 'Bottom' }
//     ];
//     const status = [
//       { status: 'Not Started', id: '1' },
//       { status: 'Ready to Start', id: '2' },
//       { status: 'In Progress', id: '3' },
//       { status: 'Completed', id: '4' },
//       { status: 'Rejected', id: '5' },
//       { status: 'Approved', id: '6' },
//     ];
//     const statusParams = {
//       params: {
//         actionComplete: () => false,
//         dataSource: new DataManager(status),
//         fields: { text: 'status', value: 'status' },
//         query: new Query(),
//       },
//     };

//     const dependencyTemplate = (props) => {
//       console.log('props', props);
//       return (
//         <div>{props?.ShipCountry}</div>
//       );
//     };

//     function actionBegin(args) {
//         if (args.requestType === 'save') {
//             if (gridInstance.pageSettings.currentPage !== 1 && gridInstance.editSettings.newRowPosition === 'Top') {
//                 args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - gridInstance.pageSettings.pageSize;
//             }
//             else if (gridInstance.editSettings.newRowPosition === 'Bottom') {
//                 args.index = (gridInstance.pageSettings.currentPage * gridInstance.pageSettings.pageSize) - 1;
//             }
//         }
//     }
//     function ddChange() {
//         gridInstance.editSettings.newRowPosition = dropDownInstance.value;
//     }
//     const template = (args) => {
//       debugger;
//       console.log('args', args);
//       return (
//         <div className="menu-bar justify-between" key={args['_id']} style={{ display: 'flex', gap: '19.5px' }}>
//           <div className="client-name cursor-pointer">{args.CustomerID}</div>
//         </div>
//       );
//     };
//     const statusTemplate = (args) => {
//       let color = '';
//       if (args.status === 'In Progress') color = '#E26325';
//       else if (args.status === 'Not Started') color = '#333842';
//       else if (args.status === 'Ready to Start') color = '#EE8321';
//       else if (args.status === 'Completed') color = '#217713';
//       else if (args.status === 'Rejected') color = '#217713';
//       else if (args.status === 'Approved') color = '#3B7789';
//       return (<div style={{ color: color, borderRadius: '4px', height: '26px' }}>{args.status}</div>
//       );
//     };

//     const dependencyParams = {
//       params: {
//         dataSource: new DataManager({
//           adaptor: new ODataV4Adaptor(),
//           crossDomain: true,
//           url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
//         }),
//         fields: { text: 'ShipCountry', value: 'ShipCountry' },
//         query: new Query(),
        
//       },
//     };

//     return (<div className='control-pane'>
//       <div className='control-section'>
//         <div className='col-md-9'>
//           <GridComponent dataSource={data} ref={grid => gridInstance = grid} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings} actionBegin={actionBegin.bind(this)}>
//           <ColumnsDirective>
//           <ColumnDirective field="OrderID" isPrimaryKey={true} headerText="OrderID"/>
//                 <ColumnDirective field="CustomerID" headerText="Customer Name" template={template} />
//                 <ColumnDirective field="status" headerText="Status" editType="dropdownedit" edit={statusParams}
//                 // template={statusTemplate}
//                 />
//                 <ColumnDirective field="ShipCountry" headerText="ShipCountry" editType="dropdownedit"
//                 edit={dependencyParams}
//                 // template={dependencyTemplate}
//                 />
//                 <ColumnDirective field="ShipCity" headerText="Ship City" />
//               </ColumnsDirective>
//             <Inject services={[Page, Toolbar, Edit]}/>
//           </GridComponent>
//         </div>
//       </div>
//     </div>);
// }

// 601093 - groupbyformat custom binding
// function App() {
//   let grid;
//   React.useEffect(() => {
//     console.log('react effect => ', grid.dataSource);
//     if (!grid.dataSource.length && !(grid.dataSource instanceof DataManager) && !grid.dataSource.result) {
//       rendereComplete();
//     }
//   }, []);
//   const data = new DataManager({
//     // url: 'https://services.syncfusion.com/react/production/api/Orders',
//     // adaptor: new WebApiAdaptor(),
//     url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
//     adaptor: new ODataV4Adaptor(),
//     // offline: true,
//   })
//   const BASE_URL =
//     'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
//   function rendereComplete() {
//     let state = { skip: 0, take: 10 };
//     dataStateChange(state);
//   }
//   function dataStateChange(state) {
//     debugger;
//     var query = grid.getDataModule().generateQuery();
//     execute(state, query).then((gridData) => {
//       grid.dataSource = gridData;
//     });
//   }
//   const ajax = new Ajax({
//     type: 'GET',
//     mode: true,
//     onFailure: (e) => {
//       return false;
//     },
//   });
//   function execute(state, query) {
//     return getData(state, query);
//   }
//   function getData(state) {
//     const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
//     let sortQuery = '';
//     if ((state.sorted || []).length) {
//       sortQuery =
//         `&$orderby=` +
//         state.sorted
//           .map((obj) => {
//             return obj.direction === 'descending'
//               ? `${obj.name} desc`
//               : obj.name;
//           })
//           .reverse()
//           .join(',');
//     }
//     let query = new Query();
//     function applyGrouping(query, group) {
//       // Check if sorting data is available
//       if (group.length > 0) {
//         // Iterate through each group info
//         group.forEach((column) => {
//           // perform group operation using the column on the query
//           if (column === 'Freight') {
//             query.group(column, grid.getDataModule().formatGroupColumn.bind(grid.getDataModule()));
//           } else {
//             query.group(column);
//           }
//         });
//       }
//     }
//     if (state.group) {
//       // eslint-disable-next-line
//       state.group.length ? applyGrouping(query, state.group) :
//         // initial grouping
//         state.group.columns.length ? applyGrouping(query, state.group.columns) : null
//     }
//     ajax.url = `${BASE_URL}?${pageQuery}${sortQuery}&$count=true`;
//     return ajax.send().then((response) => {
//       let data = JSON.parse(response);
//       // return data['value'];
//       let result = new DataManager(data['value']).executeLocal(query);
//       return {
//         result: result,
//         // result: data['value'],
//         count: parseInt(data['@odata.count'], 10),
//       };
//     });
//   }
//   function clickfn(e) {
//     debugger;
//     var query = new Query().group('Freight').take(8);
//     var gquery = grid.getDataModule().groupQuery(query);
//     const columns = grid.groupSettings.columns;
//     const i = 3;
//     const column = grid.getColumnByField(columns[parseInt(i.toString(), 10)]);
//     var generatequery = grid
//       .getQuery()
//       .group(
//         columns[parseInt(i.toString(), 10)],
//         grid.getDataModule().formatGroupColumn.bind(grid.getDataModule()),
//         'N0'
//       );

//     const data = new DataManager({
//       // url: 'https://services.syncfusion.com/react/production/api/Orders',
//       // adaptor: new WebApiAdaptor(),
//       url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/',
//       adaptor: new ODataV4Adaptor(),
//       offline: true,
//     })
//       .executeQuery(new Query(generatequery))
//       .then((e) => {
//         debugger;
//         console.log(e);
//       });
//   }
//   return (
//     <div className="control-pane">
//       <div className="control-section">
//         <button onClick={clickfn}>Getdata</button>
//         <GridComponent
//           // dataSource={data}
//           ref={(g) => (grid = g)}
//           allowPaging={true}
//           allowSorting={true}
//           pageSettings={{ pageCount: 4, pageSize: 10 }}
//           allowGrouping={true}
//           dataStateChange={dataStateChange.bind(this)}
//         >
//           <ColumnsDirective>
//             <ColumnDirective
//               field="OrderID"
//               headerText="Order ID"
//               width="120"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="CustomerID"
//               headerText="Customer Name"
//               width="150"
//             ></ColumnDirective>
//             <ColumnDirective
//               field="ShipName"
//               headerText="Ship Name"
//               width="120"
//             />
//             <ColumnDirective
//               field="Freight"
//               format="N0"
//               headerText="Freight"
//               width="120"
//               enableGroupByFormat={true}
//             />
//             <ColumnDirective
//               field="ShipCity"
//               headerText="Ship City"
//               width="150"
//             ></ColumnDirective>
//           </ColumnsDirective>
//           <Inject services={[Page, Group, Sort]} />
//         </GridComponent>
//       </div>
//     </div>
//   );
// }





// var BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
// export class OrderService {
//   ajax = new Ajax({
//     mode: true,
//     onFailure: (e) => false,
//     type: 'GET',
//   });

//   customDatamanagerHandling(state, grid) {
//     var gridData = new DataManager({
//       url: BASE_URL,
//       adaptor: new ODataV4Adaptor(),
//       crossDomain: true,
//     });
//     if (
//       state.action &&
//       (state.action.requestType == 'filterchoicerequest' ||
//         state.action.requestType == 'filtersearchbegin' ||
//         state.action.requestType == 'stringfilterrequest')
//     ) {
//       var query = new Query();
//       query.take(state.take);
//       if (state.where && state.where.length) {
//         query.where(
//           state.where[0].field,
//           state.where[0].operator,
//           state.where[0].value,
//           state.where[0].ignoreCase
//         );
//       }
//       // state.dataSource(new DataManager(gridData).executeQuery(query));
//     } else {
//       var currentPageData = gridData;
//       var query = new Query();

//       // search query
//       if (state.search) {
//         query.search(
//           state.search[0].key,
//           state.search[0].fields,
//           state.search[0].operator,
//           state.search[0].ignoreCase
//         );
//       }

//       // filter query
//       if (state.where) {
//         var gridqueries = grid.getDataModule().generateQuery().queries;
//         var wherequery;
//         for (var i = 0; i < gridqueries.length; i++) {
//           if (gridqueries[i].fn == 'onWhere') {
//             wherequery = gridqueries[i].e;
//           }
//         }
//         query.where(wherequery);
//       }

//       // sort query
//       if (state.sorted && state.sorted.length) {
//         for (var i = 0; i < state.sorted.length; i++) {
//           query.sortBy(state.sorted[i].name, state.sorted[i].direction);
//         }
//       }

//       // aggregate
//       if (state.aggregates && state.aggregates.length) {
//         for (var i = 0; i < state.aggregates.length; i++) {
//           query.aggregate(
//             state.aggregates[i]['type'],
//             state.aggregates[i]['field']
//           );
//         }
//       }
//       // page query
//       if (state.take > -1 && state.skip > -1) {
//         var pageIndex = state.skip / state.take + 1;
//         var pageSize = state.take;
//         query.page(pageIndex, pageSize);
//       }
//       if (state.requiresCounts) {
//         query.isCountRequired = state.requiresCounts;
//       }

//       // bind the data to grid
//       return currentPageData.executeQuery(query).then((e) => {
//         if (e.count) {
//           return {
//             count: e.count,
//             result: e.result,
//           };
//         } else {
//           return {
//             result: e.result,
//           };
//         }
//         // gridInstance.totalDataRecordsCount = e.count;
//         // gridInstance.dataSource = e.result;
//       });
//       // gridInstance.dataSource = new DataManager(currentPageData).executeQuery(query);
//     }
//   }
//   execute(state, grid) {
//     return this.getData(state);
//     // return this.customDatamanagerHandling(state, grid);
//   }
//   applyGrouping(query, group){
//     if (group && group.length) {
//       group.forEach(column => {
//         query.group(column);
//       })
//     }
//   }
//   getData(state) {
//     const skip = state.skip !== undefined ? '$skip=' + state.skip : undefined;
//     const take = state.take ? '$top=' + state.take : undefined;
//     const pageQuery = skip && take ? skip + '&' + take : undefined;
//     let sortQuery = undefined;
//     if ((state.sorted || []).length) {
//       sortQuery =
//         `$orderby=` +
//         state.sorted
//           .map((obj) => {
//             return obj.direction === 'descending'
//               ? `${obj.name} desc`
//               : obj.name;
//           })
//           .reverse()
//           .join(',');
//     }
//     const filterQuery = state.filter ? `` : undefined;
//     this.ajax.url = `${BASE_URL}?${state.requiresCounts ? '$count=true&' : ''}${
//       filterQuery ? filterQuery + '&' : ''
//     }${sortQuery ? sortQuery + '&' : ''}${pageQuery ? pageQuery : ''}`;
//     console.log('API call')
//     return this.ajax.send().then((response) => {
//       const data = JSON.parse(response);
//       console.log('response => ', data);
//       let query = new Query();
//       this.applyGrouping(query, state.groups);
//       console.log('query => ', query);
//       let result = new DataManager(getValue('value', data)).executeLocal(query);
//       // if (state.isInitial) {
//       //   result = getValue('value', data);
//       // }
//       result = getValue('value', data);
//       console.log('result => ', result);
//       if (data['@odata.count']) {
//         return {
//           count: parseInt(data['@odata.count'], 10),
//           result: result,
//         };
//       } else {
//         return {
//           result: result,
//         };
//       }
//     });
//   }
// }

// const MemoGrid = forwardRef(({dataStateChange, actionBegin, created, dataBound}, gridInstance) => {
//   const toolbarOptions = ['ColumnChooser'];
//   return (<GridComponent
//     id="Grid"
//     // dataSource={data}
//     dataSource={[]}
//     ref={gridInstance}
//     enableInfiniteScrolling={true}
//     // allowPaging={true}
//     height={400}
//     pageSettings={{ pageSize: 12 }}
//     load={() => {}}
//     dataBound={dataBound}
//     dataStateChange={dataStateChange}
//     allowGrouping={true}
//     allowReordering={true}
//     showColumnChooser={true}
//     toolbar={toolbarOptions}
//     groupSettings={{
//       columns: ['CustomerID', 'ShipCountry'],
//       // columns: ['CustomerID'],
//       showGroupedColumn: true,
//       disablePageWiseAggregates: false
//     }}
//     actionBegin={actionBegin}
//     created={created}
//   >
//   <ColumnsDirective>
//     <ColumnDirective
//       field="OrderID"
//       headerText="Order ID"
//       width="120"
//       textAlign="Right"
//     ></ColumnDirective>
//     <ColumnDirective
//       field="CustomerID"
//       headerText="Customer ID"
//       width="160"
//     ></ColumnDirective>
//     <ColumnDirective
//       field="EmployeeID"
//       headerText="Employee ID"
//       width="120"
//       textAlign="Right"
//     />
//     <ColumnDirective
//       field="ShipCountry"
//       headerText="Ship Country"
//       width="150"
//     ></ColumnDirective>
//   </ColumnsDirective>
//   <Inject
//     services={[
//       InfiniteScroll,
//       Group,
//       Page,
//       Toolbar,
//       ColumnChooser,
//       Reorder,
//     ]}
//   />
//   </GridComponent>)
// });
// function App() {
//   let gridInstance = useRef(null);
//   useEffect(() => {
//     if (
//       gridInstance &&
//       gridInstance.dataSource instanceof Array &&
//       !gridInstance.dataSource.length
//     ) {
//       // console.log('infinite refresh');
//       // const state = {
//       //   action: { requestType: 'infiniteScroll' },
//       //   skip: 0,
//       //   group: [],
//       //   groups: [],
//       //   sorted: [],
//       //   take: gridInstance.pageSettings.pageSize * 3, // for infinite scroll
//       //   // take: gridInstance.pageSettings.pageSize, // for paging
//       //   requiresCounts: true,
//       // };
//       // let groupSettings = gridInstance.groupSettings;
//       // if (groupSettings.columns.length) {
//       //   groupSettings.columns.forEach((column) => {
//       //     state.groups.push(column);
//       //     state.sorted.push({ name: column, direction: 'ascending' });
//       //   });
//       //   state.group.push(
//       //     groupSettings.columns[groupSettings.columns.length - 1]
//       //   );
//       // }
//       const state = gridInstance.getDataModule().getStateEventArgument(gridInstance.getDataModule().generateQuery().requiresCount());
//       state.isInitial = true;
//       dataStateChange(state);
//     }
//   }, [])
//   // let isInitialLoad;
//   let data;
//   // let data = new DataManager({
//   //   url: BASE_URL,
//   //   adaptor: new ODataV4Adaptor,
//   //   crossDomain: true
//   // });
//   const orderService = new OrderService();

//   const dataBound = () => {
//     console.log('databounded!');
//     console.log(gridInstance.totalDataRecordsCount);
    
//   };

//   const dataStateChange = (state) => {
//     console.log('dataStateChange!', state, gridInstance.dataSource);
//     // gridInstance.setProperties({ groupSettings: { disablePageWiseAggregates: false } }, true);
//     // if (state.action.requestType) {
//       setCount((prev) => prev + 1);
//       orderService.execute(state).then((gridData) => {
//         if (gridInstance) {
//           gridInstance.dataSource = gridData;
//         }
//       });
//     // } else {
//     //   const def = new Deferred();
//     //   gridInstance.getDataModule().setState({});
//     //   def.resolve(gridInstance.dataSource);
//     // }
//   };
//   const actionBegin = (args) => {
//     console.log(args.requestType, gridInstance.groupSettings.disablePageWiseAggregates);
//     if (args.requestType === 'refresh') {
//       gridInstance.setProperties({ groupSettings: { disablePageWiseAggregates: false } }, true);
//     }
//   }
//   const created = () => {
//     gridInstance.enableInfiniteAggrgate = function () {
//       debugger;
//       if (this.enableInfiniteScrolling && this.groupSettings.columns.length && !this.groupSettings.disablePageWiseAggregates
//           && !this.groupSettings.enableLazyLoading && this.aggregateModule) {
//           this.setProperties({ groupSettings: { disablePageWiseAggregates: true } }, true);
//       }
//     };
//   }

//   const setRef = (grid) => {
//     console.log('grid ref', grid);
//     gridInstance = grid;
//   };
//   const [count, setCount] = useState(0);
//   const Grid = useMemo(() => <MemoGrid ref={setRef} created={created} actionBegin={actionBegin} dataStateChange={dataStateChange} dataBound={dataBound} />, [])
//   return (
//     <div className="control-pane">
//       <br />
//       <br />
//       <br />
//       <br />
//       <div className="control-section" style={{ marginTop: '60px' }}>
//         <button
//           onClick={(e) => {
//             let columns = gridInstance.columns.slice();
//             columns.push({ field: 'ShipCity', width: '160' });
//             gridInstance.columns = columns;
//             // gridInstance.changeDataSource(data, columns);
//             // console.log(gridInstance.columns);
//           }}
//         >
//           add new column
//         </button>
//         <p>Updated count: {count}</p>
//         {Grid}
//       </div>
//     </div>
//   );
// }

// export default App;






// import { createRoot } from 'react-dom/client';
import './index.css';
// import React, { useEffect, useState, useMemo } from 'react';
// import { useEffect, useRef, useState } from 'react';
import {
  SidebarComponent,
  TreeViewComponent,
  ToolbarComponent,
  ItemsDirective,
  ItemDirective,
  MenuComponent,
} from '@syncfusion/ej2-react-navigations';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { data as dataSource } from './data';
import {
  adminGridColumns as columns,
  filterSettings,
  editSettings,
  toolbar,
  toolbarClick,
  dropChange,
  setLoadCulture,
  cultureMenuItems,
  user3ChildGrid as childGrid,
  user2aggregates as aggregates
} from './gridConfigData';
import { CommonGrid } from './Components/CommonGrid';

const App = () => {
  const [culture, setCultureState] = useState('en-US');
  useEffect(() => {
    setLoadCulture(culture);
  }, [culture]);

  const sidebarobj = useRef(null);
  const gridInstance = useRef(null);
  const [user, setUser] = useState('Admin');
  useEffect(() => {
    dropChange(user, gridInstance.current);
  }, [user]);

  const select = (args) => {
    console.log(args.item.text);
    setCultureState(args.item.text);
  };
  //Toolbar component template element specification
  let folderEle =
    '<div class= "e-folder"><div class= "e-folder-name">App</div></div>';
  let userNameEle = `<div><div class= "e-user-name">${user}</div></div>`;
  let imageEle =
    '<div class= "image-container"><img height="20px" src="https://ej2.syncfusion.com/react/demos/src/sidebar/images/user.svg" alt="John"></img></div>';
  //open / close the sidebar
  const toolbarCliked = (args) => {
    if (args.item.tooltipText == 'Menu') {
      sidebarobj.current.toggle();
    }
  };
  return (
    <div className="control-section" id="sidebar-wrapper">
      {/* main content declaration */}
      <div>
        <ToolbarComponent
          cssClass="defaultToolbar"
          id="defaultToolbar"
          clicked={toolbarCliked.bind(this)}
        >
          <ItemsDirective>
            <ItemDirective
              prefixIcon="e-tbar-menu-icon tb-icons"
              tooltipText="Menu"
            ></ItemDirective>
            <ItemDirective template={folderEle}></ItemDirective>
            <ItemDirective
              align="Right"
              template={() => {
                return (
                  <MenuComponent
                    items={cultureMenuItems}
                    select={select}
                  ></MenuComponent>
                );
              }}
            ></ItemDirective>
            <ItemDirective align="Right" template={userNameEle}></ItemDirective>
            <ItemDirective
              cssClass="e-custom"
              align="Right"
              template={imageEle}
            ></ItemDirective>
          </ItemsDirective>
        </ToolbarComponent>
      </div>
      <div className="maincontent" style={{ paddingLeft: '7px' }}>
        <CommonGrid
          ref={gridInstance}
          {...{
            dataSource,
            toolbar,
            editSettings,
            filterSettings,
            toolbarClick,
            columns,
            childGrid: user === 'User3' ? childGrid : undefined,
            aggregates: user === 'User2' ? aggregates : undefined
          }}
        />
      </div>
      {/* end of main content declaration */}
      {/* sidebar element declaration */}
      <SidebarComponent
        id="defaultSidebar"
        ref={sidebarobj}
        className="default-sidebar"
        width="10%"
        target=".maincontent"
        position="Left"
      >
        <ListViewComponent
          dataSource={[
            { id: 'Admin', text: 'Admin Grid' },
            { id: 'User1', text: 'User1 Grid' },
            { id: 'User2', text: 'User2 Grid' },
            { id: 'User3', text: 'User3 Grid' },
          ]}
          select={(e) => {
            console.log('Selected: ', e.data.id);
            setUser(e.data.id);
          }}
        />
      </SidebarComponent>
    </div>
  );
};
export default App;