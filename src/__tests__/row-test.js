'use strict'

jest.dontMock('../row');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const RowComponent = require('../cell');

const testVars = {
  cells: [],
  cellClasses: [],
  uid: 0,
  key: 'testkey',
  spreadsheetId: '0',
  className: 'cellComponent'
};

describe('Row', () => {
  it('Renders a row', () => {
    var row = TestUtils.renderIntoDocument(
      <table>
        <tbody>
            <RowComponent
              cells={testVars.cells}
              cellClasses={testVars.cellClasses}
              uid={testVars.uid}
              key={testVars.key}
              spreadsheetId={testVars.spreadsheetId}
              className={testVars.className}
            />
        </tbody>
      </table> 
    );

    var rowNode = ReactDOM.findDOMNode(row);
    expect(rowNode).toBeDefined();
  });
});