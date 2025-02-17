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
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
var react_1 = require("react");
var CommonGrid_1 = require("./Components/CommonGrid");
var data_1 = require("./data");
function Default() {
    var gridInstance = (0, react_1.useRef)(null);
    var customerIDRules = { required: true, minLength: 3 };
    var orderIDRules = { required: true, number: true };
    var columns = [
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(CommonGrid_1.CommonGrid, __assign({ ref: gridInstance, dataSource: data_1.data, allowPaging: true, pageSettings: { pageCount: 5 }, allowSorting: true, toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'], editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
            } }, { children: [(0, jsx_runtime_1.jsx)(CommonGrid_1.CommonGridColumnsDirective, { children: columns.map(function (column, index) { return ((0, jsx_runtime_1.jsx)(CommonGrid_1.CommonGridColumnDirective, __assign({}, column), index)); }) }), (0, jsx_runtime_1.jsx)(CommonGrid_1.CommonGridInject, { services: [
                        CommonGrid_1.CommonGridPage,
                        CommonGrid_1.CommonGridSort,
                        CommonGrid_1.CommonGridEdit,
                        CommonGrid_1.CommonGridAggregate,
                        CommonGrid_1.CommonGridFilter,
                        CommonGrid_1.CommonGridExcelExport,
                        CommonGrid_1.CommonGridPdfExport,
                        CommonGrid_1.CommonGridColumnChooser,
                        CommonGrid_1.CommonGridDetailRow,
                        CommonGrid_1.CommonGridToolbar,
                    ] })] })) }));
}
exports.default = Default;
