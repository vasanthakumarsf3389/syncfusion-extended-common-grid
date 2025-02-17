
/* eslint-disable */
import React, { useRef } from 'react';
import {
  CommonGrid,
  CommonGridColumnsDirective,
  CommonGridColumnDirective,
  CommonGridPage,
  CommonGridSort,
  CommonGridEdit,
  CommonGridToolbar,
  CommonGridColumnModel,
  CommonGridRef,
  CommonGridInject,
  CommonGridAggregate,
  CommonGridFilter,
  CommonGridExcelExport,
  CommonGridPdfExport,
  CommonGridColumnChooser,
  CommonGridDetailRow,
} from './Components/CommonGrid';
import { data as dataSource } from './data';

function Default() {
  const gridInstance = useRef<CommonGridRef | null>(null);

  const customerIDRules = { required: true, minLength: 3 };
  const orderIDRules = { required: true, number: true };

  const columns: CommonGridColumnModel[] = [
    {
      field: 'OrderID',
      headerText: 'Order ID',
      validationRules: orderIDRules,
      width: '140',
      textAlign: 'Right',
      isPrimaryKey: true,
    },
    {
      field: 'CustomerName',
      headerText: 'Customer Name',
      validationRules: customerIDRules,
      width: '150',
    },
    {
      field: 'Freight',
      headerText: 'Freight',
      width: '140',
      format: 'C2',
      textAlign: 'Right',
      editType: 'numericedit',
    },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      editType: 'datetimepickeredit',
      format: 'yMd',
      width: '160',
      textAlign: 'Right',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      width: '150',
    },
    {
      field: 'ShipName',
      headerText: 'Ship Name',
      width: '150',
    },
  ];

  return (
    <>
      <CommonGrid
        ref={gridInstance}
        dataSource={dataSource}
        allowPaging={true}
        pageSettings={{ pageCount: 5 }}
        allowSorting={true}
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
        editSettings={{
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }}
      >
        <CommonGridColumnsDirective>
          {columns.map((column, index) => (
            <CommonGridColumnDirective key={index} {...column} />
          ))}
        </CommonGridColumnsDirective>
        <CommonGridInject
          services={[
            CommonGridPage,
            CommonGridSort,
            CommonGridEdit,
            CommonGridAggregate,
            CommonGridFilter,
            CommonGridExcelExport,
            CommonGridPdfExport,
            CommonGridColumnChooser,
            CommonGridDetailRow,
            CommonGridToolbar,
          ]}
        />
      </CommonGrid>
    </>
  );
}

export default Default;