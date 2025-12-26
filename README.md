
## 项目概述

Exam2X 是一个基于 LLM 的智能试卷解析系统展示网站。这是一个纯前端项目，用于展示产品功能、工作流程和使用指南。

## 开发命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run dev` | 启动开发服务器（默认端口 4321） |
| `npm run build` | 构建生产版本到 `./dist/` |
| `npm run preview` | 预览构建后的网站 |

## 技术栈

- **框架**: Astro 5.16.6
- **样式**: Tailwind CSS 3.4.19（通过 @astrojs/tailwind 集成）
- **图标**: lucide-astro
- **主题**: 支持深色模式（class-based），支持手动切换

## 项目结构

```
src/
├── layouts/
│   └── Layout.astro          # 主布局，包含主题切换逻辑和 CSS 变量
├── pages/
│   └── index.astro           # 首页，组合所有组件，包含导航栏和交互脚本
├── components/
│   ├── Hero.astro            # 主视觉区域
│   ├── ProblemSolution.astro # 问题/解决方案对比
│   ├── Workflow.astro        # 工作流程/原理说明
│   ├── Features.astro        # 功能特性网格
│   ├── Guide.astro           # 使用指南
│   ├── FAQ.astro             # 常见问题
│   └── Footer.astro          # 页脚
public/                        # 静态资源
```

## 架构要点

### 主题系统
- 主题偏好存储在 localStorage 和 cookie 中
- Layout.astro 在服务端读取 cookie 初始主题
- index.astro 中的脚本处理客户端主题切换和保存

### 组件组织
- 每个 `.astro` 组件都是自包含的，包含结构、样式和脚本
- 所有组件共享 Tailwind 的设计系统（neutral 色系）
- 使用 lucide-astro 图标，统一导入到需要的组件中

### 设计系统
- 主色调: neutral（黑白灰）
- 强调色: violet/blue（用于渐变和点缀）
- 圆角: rounded-lg / rounded-xl
- 过渡: transition-colors / transition-all duration-200

## Tailwind 配置

- `content` 扫描 `src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`
- 深色模式使用 `class` 策略
- 主题扩展在 `tailwind.config.mjs` 中定义

## 常见修改

### 添加新页面组件
1. 在 `src/components/` 创建新的 `.astro` 组件
2. 在 `src/pages/index.astro` 中导入并添加到 `<main>` 区域
3. 在导航栏添加对应链接（如需要）

### 修改主题颜色
- 修改 `tailwind.config.mjs` 中的 theme 扩展
- 或在组件中直接使用 Tailwind 的任意值语法（如 `bg-[#自定义颜色]`）

### 修改 CSS 变量
- 在 `src/layouts/Layout.astro` 的 `<style is:global>` 块中修改 `:root` 和 `.dark` 变量
