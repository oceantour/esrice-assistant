import * as assert from 'assert';

// 你可以从 'vscode' 模块导入并使用所有 API
// 也可以导入你的扩展来测试它
// import * as myExtension from '../../extension';

import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Sample test', () => {
        assert.strictEqual(-1, [1, 2, 3].indexOf(5));
        assert.strictEqual(-1, [1, 2, 3].indexOf(0));
    });
});
