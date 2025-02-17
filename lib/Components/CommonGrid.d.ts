import React from 'react';
import { GridComponent, GridModel, ColumnDirective, ColumnsDirective, Inject, Page, Sort, Edit, Filter, ExcelExport, PdfExport, ColumnChooser, Toolbar, DetailRow, Aggregate, ColumnModel } from '@syncfusion/ej2-react-grids';
interface CommonGridProps extends GridModel, React.RefAttributes<GridComponent> {
    children?: React.ReactNode;
}
export declare const CommonGrid: React.FC<CommonGridProps>;
export declare const CommonGridColumnsDirective: typeof ColumnsDirective;
export declare const CommonGridColumnDirective: typeof ColumnDirective;
export declare const CommonGridInject: typeof Inject;
export declare const CommonGridPage: typeof Page;
export declare const CommonGridSort: typeof Sort;
export declare const CommonGridEdit: typeof Edit;
export declare const CommonGridAggregate: typeof Aggregate;
export declare const CommonGridFilter: typeof Filter;
export declare const CommonGridExcelExport: typeof ExcelExport;
export declare const CommonGridPdfExport: typeof PdfExport;
export declare const CommonGridColumnChooser: typeof ColumnChooser;
export declare const CommonGridDetailRow: typeof DetailRow;
export declare const CommonGridToolbar: typeof Toolbar;
export type CommonGridRef = GridComponent;
export type CommonGridModel = GridModel;
export type CommonGridColumnModel = ColumnModel;
export {};
