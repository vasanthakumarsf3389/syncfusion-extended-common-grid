/* eslint-disable */
import {customerData} from './data';
import { DataManager, Query, DataUtil, UrlAdaptor } from '@syncfusion/ej2-data';
import { L10n, loadCldr, setCulture } from '@syncfusion/ej2-base';
import * as enUSLocalization from '@syncfusion/ej2-locale/src/en-US.json';
import * as enAllData from '@syncfusion/ej2-cldr-data/main/en/all.json';
import * as deDELocalization from '@syncfusion/ej2-locale/src/de.json';
import * as deAllData from '@syncfusion/ej2-cldr-data/main/de/all.json';
import * as frFRLocalization from '@syncfusion/ej2-locale/src/fr.json';
import * as frAllData from '@syncfusion/ej2-cldr-data/main/fr/all.json';
import * as csLocalization from '@syncfusion/ej2-locale/src/cs.json';
import * as csAllData from '@syncfusion/ej2-cldr-data/main/cs/all.json';
import numberingSystemData from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

export const cultureMenuItems = [
  {
    items: [
      {
        text: 'en-US',
      },
      {
        text: 'cs',
      },
      {
        text: 'de',
      },
      {
        text: 'fr',
      },
    ],
    text: 'Culture',
  },
];

export function setLoadCulture(culture) {
  if (culture === 'de' || culture === 'fr' || culture === 'en-US' || culture === 'cs') {
    setCulture(culture);
  }
  if (culture === 'de') {
    L10n.load(deDELocalization);
    loadCldr(deAllData, numberingSystemData);
  } else if (culture === 'fr') {
    L10n.load(frFRLocalization);
    loadCldr(frAllData, numberingSystemData);
  } else if (culture === 'en-US') {
    loadCldr(enAllData, numberingSystemData);
  } else if (culture === 'cs') {
    L10n.load(csLocalization);
    loadCldr(csAllData, numberingSystemData);
  }
}


export const customerIDRules = { required: true, minLength: 3 };
export const orderIDRules = { required: true, number: true };
export const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };
//column definition based on the role
export const adminGridColumns = [
    {
        field: 'OrderID',
        headerText: 'Order ID',
        validationRules: orderIDRules,
        width: '140',
        textAlign: 'Right',
        isPrimaryKey: true,
        showInColumnChooser: false,
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
        format: "yMd",
        width: '160',
        textAlign: 'Right',
    },
    {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: '150'
    },
    {
        field: 'ShipName',
        headerText: 'Ship Name',
        width: '150',
    },
];

export const user1Columns = [
    {
        field: 'OrderID',
        headerText: 'Order ID',
        width: '140',
        textAlign: 'Right',
        validationRules: orderIDRules,
        isPrimaryKey: true,
        showInColumnChooser: false,
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
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: '150'
    },
];

export const user2Columns = [
    {
        field: 'OrderID',
        headerText: 'Order ID',
        width: '140',
        validationRules: orderIDRules,
        textAlign: 'Right',
        isPrimaryKey: true,
        showInColumnChooser: false,
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
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        editType: 'datetimepickeredit',
        format: 'yMd',
        textAlign: 'Right',
        width: '160',
    },
    {
        field: 'ShipCountry',
        headerText: 'Ship Country',
        width: '150'
    },
];

export const user3Columns = [
    {
        field: 'OrderID',
        headerText: 'Order ID',
        width: '140',
        textAlign: 'Right',
        validationRules: orderIDRules,
        isPrimaryKey: true,
        showInColumnChooser: false,
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
        format: "yMd",
        width: '160',
        textAlign: 'Right',
    },
    {
        field: 'ShippedDate',
        headerText: 'Shipped Date',
        editType: 'datetimepickeredit',
        format: 'yMd',
        textAlign: 'Right',
        width: '160',
    },
];
export const user3ChildGrid = {
  dataSource: customerData,
  queryString: 'CustomerID',
  columns: [
      { field: 'CustomerID', headerText: 'Customer ID', textAlign: 'Right', width: 75 },
      { field: 'ContactName', headerText: 'Contact Name', width: 100 },
      { field: 'Address', headerText: 'Address', width: 120 },
      { field: 'Country', headerText: 'Country', width: 100 }
  ]
};

export const filterSettings = { type: 'Excel' };


export const toolbar = ['Add',
    'Edit',
    'Delete',
    'Update',
    'Cancel',
    'ColumnChooser',
    'ExcelExport',
    'PdfExport',
    'CsvExport',
    { text: 'Xml', tooltipText: 'Xml', prefixIcon: 'e-expand', id: 'xml' }];


export function jsonToXml(json) {
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

export function downloadXml(json, filename = 'data.xml') {
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

// Grid properties initialize//
// toolbar click
export function toolbarClick(args, gridInstance) {
    if (gridInstance && args.item.id === gridInstance.element.id + '_excelexport') {
        gridInstance.excelExport();
    }
    if (gridInstance && args.item.id === gridInstance.element.id + '_pdfexport') {
        gridInstance.pdfExport()
    }
    if (gridInstance && args.item.id === gridInstance.element.id + '_csvexport') {
        gridInstance.csvExport();
    }
    if (gridInstance && args.item.id === 'xml') {
        downloadXml(gridInstance.dataSource);
    }
}
export const user2aggregates = [
    {
        columns: [
            {
                type: 'Sum',
                field: 'Freight',
                format: 'C2',
                footerTemplate: 'Total: ${Sum}',
            },
        ]
    }
];
// DropDownList change actions
export function dropChange(value, gridInstance) {
    // role based load the grid
    if (value == 'Admin') {
        if (gridInstance && gridInstance.element.classList.contains('disablegrid')) {
            gridInstance.element.classList.remove('disablegrid');
            gridInstance.element.parentElement.classList.remove('wrapper');
        }
        gridInstance.setProperties({
            editSettings: {
                allowEditing: true,
                allowAdding: true,
                allowDeleting: true,
            },
            columns: adminGridColumns,
            childGrid: undefined,
            aggregates: []
        });
    } else if (value == 'User1') {

        gridInstance.element.classList.add('disablegrid');
        gridInstance.element.parentElement.classList.add('wrapper');
        gridInstance.setProperties({
            editSettings: {
                allowEditing: false,
                allowAdding: false,
                allowDeleting: false,
            },
            columns: user1Columns,
            childGrid: undefined,
            aggregates: []
        });
    } else if (value == 'User2') {
        if (gridInstance && gridInstance.element.classList.contains('disablegrid')) {
            gridInstance.element.classList.remove('disablegrid');
            gridInstance.element.parentElement.classList.remove('wrapper');
        }
        gridInstance.setProperties({
            editSettings: {
                allowEditing: true,
                allowAdding: false,
                allowDeleting: false,
            },
            columns: user2Columns,
            childGrid: undefined,
            aggregates: [
                {
                    columns: [
                        {
                            type: 'Sum',
                            field: 'Freight',
                            format: 'C2',
                            footerTemplate: 'Total: ${Sum}',
                        },
                    ]
                }
            ]
        });
    } else {
        if (gridInstance && gridInstance.element.classList.contains('disablegrid')) {
            gridInstance.element.classList.remove('disablegrid');
            gridInstance.element.parentElement.classList.remove('wrapper');
        }
        gridInstance.setProperties({
            editSettings: {
                allowEditing: false,
                allowAdding: false,
                allowDeleting: false,
            },
            columns: user3Columns,
            childGrid: user3ChildGrid,
            aggregates: []
        });
    }
}