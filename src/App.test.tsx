// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

/* eslint-disable @typescript-eslint/no-namespace */
import React from 'react';


import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { GridComponent } from "@syncfusion/ej2-react-grids";
import App from './App';


describe("Grid", () => {
  it("should render", (done: Function) => {
    const src = [{ id: 1, name: "Test" }];
    const colDirectives: any = [
      {
        field: "id",
        headerText: "ID",
        width: "100",
        format: "",
        textAlign: "Left",
      },
    ];
    const { getComputedStyle } = global.window;
    window.crypto = {
      subtle: {
        decrypt: jest.fn(),
        deriveBits: jest.fn(),
        deriveKey: jest.fn(),
        digest: jest.fn(),
        encrypt: jest.fn(),
        exportKey: jest.fn(),
        generateKey: jest.fn(),
        importKey: jest.fn(),
        sign: jest.fn(),
        unwrapKey: jest.fn(),
        verify: jest.fn(),
        wrapKey: jest.fn(),
      },
      getRandomValues: jest.fn(),
      randomUUID: jest.fn(),
    };
    window.getComputedStyle = (eletm, select) =>
      getComputedStyle(eletm, select);
    const { container } = render(
      <div>
        <App />
      </div>,
    );


    const gridElem = container.getElementsByClassName("e-grid");
    const gridInst: GridComponent = ((gridElem)[0] as any).ej2_instances[0];
    gridInst.dataBound = function(args) {
      console.log(gridInst.getAllDataRows());
      expect(gridInst.getRows()[0].querySelector('td')?.innerHTML).toBe("John Doe1");
      done();
    }
    expect(gridInst.dataSource).toHaveLength(3);
    gridInst.dataBind();
  }, 7000);
});