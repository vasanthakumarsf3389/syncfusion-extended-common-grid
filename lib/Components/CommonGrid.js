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
exports.toolbarClick = exports.downloadXml = exports.jsonToXml = exports.CommonGridToolbar = exports.CommonGridDetailRow = exports.CommonGridColumnChooser = exports.CommonGridPdfExport = exports.CommonGridExcelExport = exports.CommonGridFilter = exports.CommonGridAggregate = exports.CommonGridEdit = exports.CommonGridSort = exports.CommonGridPage = exports.CommonGridInject = exports.CommonGridColumnDirective = exports.CommonGridColumnsDirective = exports.CommonGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
var react_1 = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
exports.CommonGrid = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b, _c, _d;
    // Checking the ref is a MutableRefObject
    var resolvedRef = ref;
    return ((0, jsx_runtime_1.jsx)(ej2_react_grids_1.GridComponent, __assign({ width: props.width || '100%', height: props.height || '45vh', allowPdfExport: (_a = props.allowPdfExport) !== null && _a !== void 0 ? _a : true, allowExcelExport: (_b = props.allowExcelExport) !== null && _b !== void 0 ? _b : true, toolbar: props.toolbar || [
            'ExcelExport', 'PdfExport', 'CsvExport',
            { text: 'Xml', tooltipText: 'Xml', prefixIcon: 'e-expand', id: 'xml' }
        ], allowPaging: (_c = props.allowPaging) !== null && _c !== void 0 ? _c : true, pageSettings: props.pageSettings || { pageSize: 50 }, allowSorting: (_d = props.allowSorting) !== null && _d !== void 0 ? _d : true, toolbarClick: props.toolbarClick || (function (args) {
            if (resolvedRef.current) {
                toolbarClick(args, resolvedRef.current);
            }
        }) }, props, { ref: ref })));
});
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
function jsonToXml(json) {
    var xml = '';
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var value = json[key];
            if (typeof value === 'object' && !Array.isArray(value)) {
                xml += "<".concat(key, ">") + jsonToXml(value) + "</".concat(key, ">");
            }
            else if (Array.isArray(value)) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var item = value_1[_i];
                    xml += "<".concat(key, ">") + jsonToXml(item) + "</".concat(key, ">");
                }
            }
            else {
                xml += "<".concat(key, ">").concat(value, "</").concat(key, ">");
            }
        }
    }
    return xml;
}
exports.jsonToXml = jsonToXml;
function downloadXml(json, filename) {
    if (filename === void 0) { filename = 'data.xml'; }
    var xml = jsonToXml(json);
    // Create a Blob from the XML string
    var blob = new Blob([xml], { type: 'application/xml' });
    // Create an <a> tag with the download attribute
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    // Trigger the download by simulating a click
    link.click();
}
exports.downloadXml = downloadXml;
// Toolbar click event handler
function toolbarClick(args, gridInstance) {
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
exports.toolbarClick = toolbarClick;
