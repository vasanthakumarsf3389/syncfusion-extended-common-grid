/* eslint-disable */
import React, { forwardRef } from 'react';
import {
  GridComponent,
  GridModel,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Page,
  Sort,
  Edit,
  Filter,
  ExcelExport,
  PdfExport,
  ColumnChooser,
  Toolbar,
  DetailRow,
  Aggregate,
  ColumnModel,
  Grid,
} from '@syncfusion/ej2-react-grids';
// Assuming CommonGrid is declared in the same file or imported

interface CommonGridProps
  extends GridModel,
    React.RefAttributes<GridComponent> {
  children?: React.ReactNode;
}
export const CommonGrid: React.FC<CommonGridProps> = forwardRef(
  (props, ref) => (
    <GridComponent
      width={props.width || '100%'}
      height={props.height || '45vh'}
      allowPdfExport={props.allowPdfExport || true}
      allowExcelExport={props.allowExcelExport || true}
      showColumnChooser={props.showColumnChooser || true}
      allowFiltering={props.allowFiltering || true}
      filterSettings={props.filterSettings || { type: 'Excel' }}
      editSettings={
        props.editSettings || {
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true,
        }
      }
      toolbar={props.toolbar || ['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
      allowPaging={props.allowPaging || true}
      pageSettings={props.pageSettings || { pageSize: 50 }}
      allowSorting={props.allowSorting || true}
      {...props}
      ref={ref}
    />
  )
);
export const CommonGridColumnsDirective = ColumnsDirective;
export const CommonGridColumnDirective = ColumnDirective;
export const CommonGridInject = Inject;

export const CommonGridPage = Page;
export const CommonGridSort = Sort;
export const CommonGridEdit = Edit;
export const CommonGridAggregate = Aggregate;
export const CommonGridFilter = Filter;
export const CommonGridExcelExport = ExcelExport;
export const CommonGridPdfExport = PdfExport;
export const CommonGridColumnChooser = ColumnChooser;
export const CommonGridDetailRow = DetailRow;
export const CommonGridToolbar = Toolbar;

export type CommonGridRef = GridComponent;
export type CommonGridModel = GridModel;
export type CommonGridColumnModel = ColumnModel;
