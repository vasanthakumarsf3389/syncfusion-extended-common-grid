/* eslint-disable */
import React, { useEffect, useState, useRef, forwardRef, useMemo } from 'react';
import { DataManager, UrlAdaptor, Query } from '@syncfusion/ej2-data';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import {
    Inject, Page,
    Sort,
    Edit,
    Filter,
    ExcelExport,
    PdfExport,
    ColumnChooser,
    Toolbar,
    DetailRow,
    Aggregate
} from '@syncfusion/ej2-react-grids';
export const CommonGrid = forwardRef((props, gridInstance) => {
    const {
        children,
        dataSource,
        toolbar,
        editSettings,
        filterSettings,
        toolbarClick,
        columns,
        childGrid,
        aggregates,
        allowPaging = true,
        pageSize = 50,
        allowSorting = true,
        allowFiltering = true,
        showColumnChooser = true,
        allowExcelExport = true,
        allowPdfExport = true,
        height = '45vh',
        width = '100%',
        ...rest
    } = props;
    // https://helpej2.syncfusion.com/react/documentation/grid/performance#optimizing-react-component-rendering-by-mitigating-unnecessary-re-renders-during-state-updates
    const MemoGrid = useMemo(() => { // To avoid unneccessary re-rendering due to react state updates.
        return (
            <GridComponent dataSource={dataSource} columns={columns} allowPaging={allowPaging}
                pageSettings={{ pageSize: pageSize }} // You can adjust the page size here
                height={height} width={width} toolbar={toolbar} allowSorting={allowSorting} editSettings={editSettings}
                allowFiltering={allowFiltering} showColumnChooser={showColumnChooser} filterSettings={filterSettings} allowExcelExport={allowExcelExport} allowPdfExport={allowPdfExport} toolbarClick={(args) => toolbarClick(args, gridInstance.current)} ref={gridInstance} childGrid={childGrid} aggregates={aggregates} {...rest}>
                    {children}
                <Inject services={[Page,
                    Sort,
                    Edit,
                    Aggregate,
                    Filter,
                    ExcelExport,
                    PdfExport,
                    ColumnChooser,
                    DetailRow,
                    Toolbar,]} />
            </GridComponent>
        )
    }, [dataSource, columns, toolbar, editSettings, filterSettings, childGrid])
    return (
        <div id="GridParent">
            {MemoGrid}
        </div>
    );
})

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