import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// You can also import your extension to test it
// import * as myExtension from '../../extension';

import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Sample test', () => {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
});
