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
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
// Assuming CommonGrid is declared in the same file or imported

interface CommonGridProps
  extends GridModel,
    React.RefAttributes<GridComponent> {
  children?: React.ReactNode;
}
export const CommonGrid: React.FC<CommonGridProps> = forwardRef(
  (props, ref) => {
    // Checking the ref is a MutableRefObject
    const resolvedRef = ref as React.MutableRefObject<GridComponent | null>;

    return (
      <GridComponent
        width={props.width || '100%'}
        height={props.height || '45vh'}
        allowPdfExport={props.allowPdfExport ?? true}
        allowExcelExport={props.allowExcelExport ?? true}
        toolbar={props.toolbar || [
          'ExcelExport', 'PdfExport', 'CsvExport', 
          { text: 'Xml', tooltipText: 'Xml', prefixIcon: 'e-expand', id: 'xml' }
        ]}
        allowPaging={props.allowPaging ?? true}
        pageSettings={props.pageSettings || { pageSize: 50 }}
        allowSorting={props.allowSorting ?? true}
        toolbarClick={props.toolbarClick || ((args: ClickEventArgs) => {
          if (resolvedRef.current) {
            toolbarClick(args, resolvedRef.current);
          }
        })}
        {...props}
        ref={ref}
      />
    );
  }
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

export function jsonToXml(json: Record<string, any>): string {
  let xml = '';

  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      if (typeof value === 'object' && !Array.isArray(value)) {
        xml += `<${key}>` + jsonToXml(value) + `</${key}>`;
      } else if (Array.isArray(value)) {
        for (const item of value) {
          xml += `<${key}>` + jsonToXml(item) + `</${key}>`;
        }
      } else {
        xml += `<${key}>${value}</${key}>`;
      }
    }
  }
  return xml;
}

export function downloadXml(json: Record<string, any>, filename: string = 'data.xml'): void {
  const xml = jsonToXml(json);

  // Create a Blob from the XML string
  const blob = new Blob([xml], { type: 'application/xml' });

  // Create an <a> tag with the download attribute
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Trigger the download by simulating a click
  link.click();
}



// Toolbar click event handler
export function toolbarClick(args: ClickEventArgs, gridInstance: GridComponent): void {
  if (gridInstance && args.item.id === gridInstance.element.id + '_excelexport') {
    gridInstance.excelExport();
  }
  if (gridInstance && args.item.id === gridInstance.element.id + '_pdfexport') {
    gridInstance.pdfExport();
  }
  if (gridInstance && args.item.id === gridInstance.element.id + '_csvexport') {
    gridInstance.csvExport();
  }
  if (gridInstance && args.item.id === 'xml') {
    downloadXml(gridInstance.dataSource);
  }
}
