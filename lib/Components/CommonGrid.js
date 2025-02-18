"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonGridToolbar = exports.CommonGridDetailRow = exports.CommonGridColumnChooser = exports.CommonGridPdfExport = exports.CommonGridExcelExport = exports.CommonGridFilter = exports.CommonGridAggregate = exports.CommonGridEdit = exports.CommonGridSort = exports.CommonGridPage = exports.CommonGridInject = exports.CommonGridColumnDirective = exports.CommonGridColumnsDirective = exports.CommonGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
var react_1 = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
exports.CommonGrid = (0, react_1.forwardRef)(function (props, ref) { return ((0, jsx_runtime_1.jsx)(ej2_react_grids_1.GridComponent, __assign({ width: props.width || '100%', height: props.height || '45vh', allowPdfExport: props.allowPdfExport || true, allowExcelExport: props.allowExcelExport || true, showColumnChooser: props.showColumnChooser || true, allowFiltering: props.allowFiltering || true, filterSettings: props.filterSettings || { type: 'Excel' }, editSettings: props.editSettings || {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
    }, toolbar: props.toolbar || ['Add', 'Edit', 'Delete', 'Update', 'Cancel'], allowPaging: props.allowPaging || true, pageSettings: props.pageSettings || { pageSize: 50 }, allowSorting: props.allowSorting || true }, props, { ref: ref }))); });
exports.CommonGridColumnsDirective = ej2_react_grids_1.ColumnsDirective;
exports.CommonGridColumnDirective = ej2_react_grids_1.ColumnDirective;
exports.CommonGridInject = ej2_react_grids_1.Inject;
exports.CommonGridPage = ej2_react_grids_1.Page;
exports.CommonGridSort = ej2_react_grids_1.Sort;
exports.CommonGridEdit = ej2_react_grids_1.Edit;
exports.CommonGridAggregate = ej2_react_grids_1.Aggregate;
exports.CommonGridFilter = ej2_react_grids_1.Filter;
exports.CommonGridExcelExport = ej2_react_grids_1.ExcelExport;
exports.CommonGridPdfExport = ej2_react_grids_1.PdfExport;
exports.CommonGridColumnChooser = ej2_react_grids_1.ColumnChooser;
exports.CommonGridDetailRow = ej2_react_grids_1.DetailRow;
exports.CommonGridToolbar = ej2_react_grids_1.Toolbar;
