"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var App_1 = __importDefault(require("./App"));
describe("Grid", function () {
    it("should render", function (done) {
        var src = [{ id: 1, name: "Test" }];
        var colDirectives = [
            {
                field: "id",
                headerText: "ID",
                width: "100",
                format: "",
                textAlign: "Left",
            },
        ];
        var getComputedStyle = global.window.getComputedStyle;
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
        window.getComputedStyle = function (eletm, select) {
            return getComputedStyle(eletm, select);
        };
        var container = (0, react_1.render)((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) })).container;
        var gridElem = container.getElementsByClassName("e-grid");
        var gridInst = (gridElem)[0].ej2_instances[0];
        gridInst.dataBound = function (args) {
            var _a;
            console.log(gridInst.getAllDataRows());
            expect((_a = gridInst.getRows()[0].querySelector('td')) === null || _a === void 0 ? void 0 : _a.innerHTML).toBe("John Doe1");
            done();
        };
        expect(gridInst.dataSource).toHaveLength(3);
        gridInst.dataBind();
    }, 7000);
});
