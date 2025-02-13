import * as React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Inject,
  Resize,
  Reorder,
} from '@syncfusion/ej2-react-grids';
import { orderDetails } from './data';
import { SampleBase } from './sample-base';

class Grid extends SampleBase {
  customerTemplate = (props) => {
    return (
      <div>
        <span className="e-icons e-header"></span>Customer ID
      </div>
    );
  };
  gridTemplate = (props) => {
    return (
      <div>
        <a rel="nofollow" href="https://en.wikipedia.org/wiki/\${ShipCountry}">
          <span className="e-icons e-column">what</span>
        </a>
      </div>
    );
  };
  constructor() {
    super();
    this.initialRender = true;
    this.gridProperties = {};
  }
  click() {
    // this.gridInstance.setProperties(this.gridProperties);
  }
  dataBound() {
    console.log('databound')
    // if (this.initialRender) {
    //   this.gridProperties = JSON.parse(this.gridInstance.getPersistData());
    //   this.initialRender = false;
    // }
  }
  load(args) {
    debugger;
    args.requireTemplateRef = false; 
  }
  beforeDataBound(args) {
    // args.isRequireTemplateRef =
    this.gridInstance.setProperties({ columns: this.props.headerColumns }, false); 
  }

  refresh = () => {
    // console.log('this.gridInstance', this.gridInstance);
    if (this.gridInstance) {
      this.gridInstance.refresh();
    }
  };

  hardRefresh = () => {
    if (this.gridInstance) {
      this.gridInstance.refreshColumns();
    }
  };

  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <GridComponent
            id={this.props.gridId}
            ref={(grid) => (this.gridInstance = grid)}
            dataSource={orderDetails}
            height="100%"
            enablePersistence={this.props.enablePersistance}
            // dataBound={this.dataBound.bind(this)}
            // load={this.load.bind(this)}
            // beforeDataBound={this.beforeDataBound.bind(this)}
            allowSorting={true}
            allowFiltering={true}
            filterSettings={{ type: 'Excel' }}
            allowReordering={true}
            allowResizing={true}
            // columns={this.props.headerColumns}
          >
            <ColumnsDirective>
              {this.props.headerColumns.map((headerCoulmn, index) => {
                return (
                  <ColumnDirective
                    key={index}
                    {...headerCoulmn}
                  ></ColumnDirective>
                );
              })}
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Reorder, Resize]} />
          </GridComponent>
        </div>
      </div>
    );
  }
}

const SharedGrid = React.forwardRef((props, ref) => (
  <Grid ref={ref} {...props} />
));

export default SharedGrid;