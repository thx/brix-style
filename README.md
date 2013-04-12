# Brix Style

## 目录说明

### 样式模块

样式文件都在 less 目录下，顾名思义，我们采用 LESS 作为样式编写语言，好处是方便命名空间处理，变量，
以及更灵活的使用方式。

```bash
less
├── brix-all.less       # 全套（包括表单）
├── brix.less           # 入口文件（不含表单）
├── base.less           # 样式重置，继承自 KISSY Reset
├── buttons.less        # 按钮
├── form.less           # 表单
├── grid.less           # 栅格
├── icons.less          # 图标字体（iconfont）
├── mixins.less         # 提供给开发者的 mixin 辅助函数
├── type.less           # 字体设置
├── utilities.less      # 工具类
└── variables.less      # 变量
```

### 演示文档

用于测试这些样式的文件，全部都在 demo 目录下，并非一一对应。

### 打包代码

build 目录下即为 Brix Style 所提供的两个文件。如果只需要使用基础样式，不要表单部分，使用
brix.css 文件即可。其余情况，用 brix-all.css 吧。

Brix Style 与母项目 Brix 一样，使用 grunt 作为开发辅助工具，在项目目录下执行如下命令，
即可自行打包文件：

```bash
npm install
grunt less
```