// 模块 'vscode' 包含 VS Code 可扩展性 API
// 在下面的代码中导入该模块并使用别名 vscode 引用它
import * as vscode from 'vscode';

// 当你的扩展被激活时调用此方法
// 扩展会在命令首次执行时被激活
export function activate(context: vscode.ExtensionContext) {

    // 使用控制台输出诊断信息 (console.log) 和错误 (console.error)
    // 这行代码只会在扩展被激活时执行一次
    console.log('Congratulations, your extension "star-shear-assistant" is now active!');

    // 该命令已在 package.json 文件中定义
    // 现在通过 registerCommand 提供该命令的实现
    // commandId 参数必须与 package.json 中的 command 字段匹配
    const disposable = vscode.commands.registerCommand('star-shear-assistant.helloWorld', () => {
        // 每次执行该命令时都会运行这里的代码
        // 向用户显示一个消息框
        vscode.window.showInformationMessage('Hello World from Star-Shear Assistant!');
    });

    context.subscriptions.push(disposable);
}

// 当你的扩展被停用时调用此方法
export function deactivate() {}
