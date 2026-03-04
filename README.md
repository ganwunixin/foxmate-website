# 🦊 小狐狸官方网站

这是小狐狸（FoxMate AI）的官方网站，使用 Next.js 14 + TypeScript + Tailwind CSS 构建。

## 🌟 特性

- 📱 响应式设计，支持移动端
- 🎨 可爱温馨的视觉风格
- 🔍 SEO优化
- 🎭 流畅的动画效果

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

## 📁 项目结构

```
foxmate-website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 首页
│   ├── features/          # 功能页面
│   ├── download/          # 下载页面
│   ├── about/             # 关于页面
│   ├── survey/            # 问卷调查页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React组件
│   ├── Navbar.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   ├── FadeCarousel.tsx  # 轮播组件
│   ├── FeedbackButton.tsx # 问卷调查按钮
│   └── ScrollToTop.tsx  # 回到顶部按钮
├── lib/                 # 工具库
│   ├── config.ts         # 配置文件
│   └── translations.ts   # 翻译文件
├── public/               # 静态资源
├── tailwind.config.ts    # Tailwind配置
├── next.config.js        # Next.js配置
└── package.json          # 项目依赖
```

## 🎨 设计系统

### 颜色

- **主色**: #FF6B35 (狐狸橙)
- **辅助色**: #FFA533 (浅橙)
- **背景色**: #FFF5EB (米白)

### 字体

- **标题**: Poppins
- **正文**: Nunito

## 📦 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### 部署步骤

#### 第一步：初始化Git仓库

```bash
cd foxmate-website
git init
git add .
git commit -m "Initial commit: FoxMate website"
```

#### 第二步：连接GitHub仓库

```bash
git remote add origin https://github.com/nikkoyuhengmei-max/foxmate-wb.git
git branch -M main
```

#### 第三步：推送到GitHub

```bash
git push -u origin main
```

#### 第四步：Vercel部署

1. 访问 [https://vercel.com](https://vercel.com)
2. 用GitHub账号登录
3. 点击 "Add New Project"
4. 选择 `nikkoyuhengmei-max/foxmate-wb` 仓库
5. 点击 "Deploy"
6. 等待部署完成（约1-2分钟）

### 其他平台

Next.js项目可以部署到任何支持Node.js的托管服务：
- Netlify
- Railway
- Render
- 阿里云
- 腾讯云

## 🔧 自定义配置

### 修改颜色

编辑 `tailwind.config.ts` 中的颜色配置：

```typescript
colors: {
  primary: {
    500: '#FF6B35', // 主色
    // ...
  }
}
```

### 添加新页面

在 `app` 目录下创建新文件夹和 `page.tsx` 文件：

```
app/
└── new-page/
    └── page.tsx
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**🦊 小狐狸 - 你的专注伙伴**
