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
        dataSource,
        toolbar,
        editSettings,
        filterSettings,
        toolbarClick,
        columns,
        childGrid,
        aggregates
    } = props;
    // https://helpej2.syncfusion.com/react/documentation/grid/performance#optimizing-react-component-rendering-by-mitigating-unnecessary-re-renders-during-state-updates
    const MemoGrid = useMemo(() => { // To avoid unneccessary re-rendering due to react state updates.
        return (
            <GridComponent dataSource={dataSource} columns={columns} allowPaging={true}
                pageSettings={{ pageSize: 50 }} // You can adjust the page size here
                height={'45vh'} width={'100%'} toolbar={toolbar} allowSorting={true} editSettings={editSettings}
                allowFiltering={true} showColumnChooser={true} filterSettings={filterSettings} allowExcelExport={true} allowPdfExport={true} toolbarClick={(args) => toolbarClick(args, gridInstance.current)} ref={gridInstance} childGrid={childGrid} aggregates={aggregates}>

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