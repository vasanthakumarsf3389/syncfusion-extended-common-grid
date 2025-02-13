/* eslint-disable */
import React, { memo, useRef, useState } from "react";
import {
  Filter,
  GridComponent,
  Inject,
  Page,
  Edit,
  Toolbar,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  Search,
  CommandColumn,
  DetailRow,
  Selection,
  Group,
  LazyLoadGroup,
  Aggregate,
} from "@syncfusion/ej2-react-grids";

function DynamicGrid({ columns, gridProps, ind }) {
  const [indexCount, setIndexCount] = useState(40);
  let columnsRef = useRef(null);
  return (
    <div key={ind}>
      <div>
        <GridComponent key={ind} {...gridProps} >
          <ColumnsDirective
            key={() => {
              setIndexCount((prev) => prev + 1);
              return ind + (indexCount + 1);
            }}
          >
            {columns.map((column, index) => (
              <ColumnDirective
                key={index}
                // index={index}
                field={column.field}
                headerText={column.headerText}
                type={column.type}
                textAlign={column.textAlign}
                width={column.width}
                format={column.format}
                template={column.template}
                visible={column.visible}
                editType={column.editType}
                editTemplate={column.editTemplate}
                validationRules={column.validationRules}
                commands={column.commands}
                edit={column.edit}
                allowGrouping={column.allowGrouping}
                allowEditing={column.allowEditing}
                allowFiltering={column.allowFiltering}
                autoFit={column.autoFit}
                allowColumnSelection={column.allowColumnSelection}
              />
            ))}
          </ColumnsDirective>

          <Inject
            services={[
              Page,
              Sort,
              Filter,
              Edit,
              Toolbar,
              Resize,
              Search,
              CommandColumn,
              DetailRow,
              Selection,
              Group,
              LazyLoadGroup,
            ]}
          />
        </GridComponent>
      </div>
    </div>
  );
}

export default memo(DynamicGrid);