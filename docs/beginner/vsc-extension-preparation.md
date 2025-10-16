# VS Code 插件开发

## 一、安装并配置相关环境

1. **工具**

    - **TypeScript**：开发插件所使用语言。
    - **pnpm**：包管理器。
    - **esbuild**：项目打包工具。

2. **环境准备**

    - **安装 node.js 和 pnpm**
        - 在 VS Code 终端中输入 npm install -g pnpm （如果未安装 pnpm）。
        - 终端输入命令 pnpm -v，检测 pnpm 是否安装成功，安装成功显示当前 pnpm 版本号。
        - 完成 pnpm 配置。
            - 自动配置：在 Windows PowerShell 终端中输入 pnpm setup 进行配置，完成之后关闭终端并重启输入 pnpm -v 查看是否完成配置（推荐使用自动配置）。
            - 手动配置：设置系统环境变量 PNPM_HOME (如 C:\Users\用户名\AppData\Local\pnpm)，并将 %PNPM_HOME% 添加到 Path 变量中。
            - 配置完成后关闭 Windows PowerShell 终端和所有 VS Code 窗口，重新打开 VS Code 进行尝试（无报错后会进行下载，脚本会安装在 C盘下的 ~\pnpm\global\5）。
    - **安装 Yeoman(yo) 和 generator-code**
        - 在 VS Code 终端中输入 npm install -g yo generator-code。
        - **问题**：安装 yo 和 generator-code 时出现无法使用脚本的错误，需要修改 PowerShell 策略。
            - **原因**：系统不允许 VS Code 使用脚本（下述为解决办法）。
            - WIN + S 搜索 PowerShell，以管理员身份打开 Windows PowerShell。
            - 命令行输入 get-ExecutionPolicy，查询结果为 Restricted 或非 RemoteSigned 时。
            - 命令行输入 set-ExecutionPolicy RemoteSigned，输入 y 修改成 RemoteSigned。
            - 再次使用 get-ExecutionPolicy，查看修改结果（无误后进行下一步）。

3. **初始化项目**

    - 在 VS Code 终端中运行命令 yo code。
    - 选择 New Extension (TypeScript)，开发插件所使用的语言。
    - 输入项目名称。
    - 输入项目标识符（默认为项目名称）。
    - 输入项目描述（默认可为空）。
    - 是否生成 git 存储库(y)。
    - 是否那种打包器(esbuild)。
    - 使用那种包管理(pnpm)。
    - ☆ 生成时终端选择，结束后可以在 package.json 中进行修改。
    - 安装完成后选择 Open with `code` 跳转至插件项目。
    - 未安装 esbuild 时 VS Code 右下角会弹窗，选择进行安装（插件 esbuild Problem Matchers）。

4. **安装 esbuild**

    - 检查是否已经安装 esbuild，终端输入 pnpm install。
    - 未安装在命令行通过 pnpm 进行安装，终端输入 pnpm add -D esbuild（在插件目录下进行安装）。
    - 创建 esbuild 配置文件。
        - 作用：告诉 esbuild 如何编译你的项目。
        - 方法：在项目的根目录下创建 esbuild.config.mjs 文件（复制 ~\Files\Codes\esbuild.config.mjs 文件）。
    - 修改 package.json 中的脚本。
        - 作用：让 pnpm 命令能够触发 esbuild 构建。
        - 方法：打开 package.json，找到 "scripts" 部分，并确保 "main" 字段指向 esbuild，修改为：
            ~~~Json
            {
                "main": "dist/extension.js",
                "scripts": {
                    "vscode:prepublish": "pnpm run build", // 发布前构建
                    "build": "node esbuild.config.mjs",     // 生产构建
                    "watch": "node esbuild.config.mjs --watch", // 开发构建（监听模式）
                    "lint": "eslint src --ext ts"           // 代码检查
                }
            }
            ~~~
    - 修改调试配置
        - 作用：让 VSCode 的调试功能使用 esbuild 的输出。
        - 方法：打开项目中的 .vscode/launch.json 文件，将 "outFiles" 修改为：
            ~~~Json
            {
                "outFiles": ["${workspaceFolder}/dist/**/*.js"] // 相同情况无需修改
            }
            ~~~

5. **验证与运行**

    - 测试 esbuild 配置是否正确。项目中终端输入 pnpm run build（显示 Build complete. 运行成功）。
    - 启动调试：在 VS Code 中运行，快捷为 F5 / Ctrl + F5。
    - 在上方搜索输入 >{插件触发名}.HelloWorld
    - 右下角弹窗 Hello World 完成。
