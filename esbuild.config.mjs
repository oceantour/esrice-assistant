// esbuild.config.mjs
import esbuild from 'esbuild';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const context = await esbuild.context({
  entryPoints: ['src/extension.ts'], // 入口文件
  bundle: true,                      // 打包
  platform: 'node',                  // 目标平台为 Node.js
  format: 'cjs',                     // CommonJS 格式 (VSCode 插件要求)
  outfile: 'dist/extension.js',      // 输出文件
  external: [
    'vscode', // 外部化 vscode，不打包
    ...Object.keys(pkg.dependencies || {}) // 外部化所有 dependencies 中的包
  ],
  sourcemap: true,   // 生成 sourcemap 便于调试
  minify: true,      // 压缩代码
  treeShaking: true, // 摇树优化
});

// 开发模式：监听文件变化
if (process.argv.includes('--watch')) {
  await context.watch();
  console.log('Watching...');
} else {
  // 生产模式：一次性构建
  await context.rebuild();
  await context.dispose();
  console.log('Build complete.');
}