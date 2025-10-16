# 欢迎使用你的 VS Code 扩展

## 文件夹中有哪些内容

* 此文件夹包含扩展运行所需的所有文件。
* `package.json` - 这是清单文件，在其中声明你的扩展和命令。
  * 示例插件注册了一个命令并定义了其标题和命令名。凭借这些信息，VS Code 可以在命令面板中显示该命令，而无需立即加载插件。
* `src/extension.ts` - 这是实现命令的主文件。
  * 该文件导出一个函数 `activate`，当扩展第一次被激活时会调用它（在本例中通过执行命令激活）。在 `activate` 函数内部我们调用了 `registerCommand`。
  * 我们将包含命令实现的函数作为第二个参数传递给 `registerCommand`。

## 设置

* 安装推荐的扩展（amodio.tsl-problem-matcher、ms-vscode.extension-test-runner 和 dbaeumer.vscode-eslint）


## 立即开始运行

* 按 `F5` 打开一个已加载你扩展的新窗口。
* 通过命令面板运行你的命令（在 macOS 上按 `Cmd+Shift+P`，在 Windows 和 Linux 上按 `Ctrl+Shift+P`），然后输入 `Hello World`。
* 在 `src/extension.ts` 中设置断点以调试你的扩展。
* 在调试控制台中查看来自扩展的输出。

## 修改代码

* 修改 `src/extension.ts` 中的代码后，可以从调试工具栏重新启动扩展。
* 也可以重新加载 VS Code 窗口（在 macOS 上为 `Cmd+R`，在 Windows 和 Linux 上为 `Ctrl+R`）以加载更改。


## 探索 API

* 打开文件 `node_modules/@types/vscode/index.d.ts` 可查看完整的 API 定义。

## 运行测试

* 安装 [Extension Test Runner](https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner)
* 通过 **Tasks: Run Task** 命令运行 “watch” 任务。确保该任务正在运行，否则可能无法发现测试。
* 从活动栏打开测试视图并点击“Run Test”按钮，或使用热键 `Ctrl/Cmd + ; A`
* 在测试结果视图中查看测试输出。
* 修改 `src/test/extension.test.ts` 或在 `test` 文件夹中创建新的测试文件。
  * 提供的测试运行器只会考虑匹配名称模式 `**.test.ts` 的文件。
  * 你可以在 `test` 文件夹内创建子文件夹以按任意方式组织测试。

## 进一步扩展

* 通过[打包你的扩展](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)来减少扩展体积并提高启动速度。
* 在 VS Code 扩展市场上[发布你的扩展](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)。
* 通过设置[持续集成](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)来自动化构建。
