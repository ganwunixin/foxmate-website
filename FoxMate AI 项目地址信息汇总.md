# FoxMate AI 项目地址信息汇总

**文档创建日期：** 2026年3月12日

---

## 一、网站相关地址

### 1. 网站主页
```
https://foxmate-website.vercel.app/
```

### 2. 功能页面
| 页面 | 地址 |
|------|------|
| 问卷调查 | https://foxmate-website.vercel.app/survey |
| 下载页面 | https://foxmate-website.vercel.app/download |
| 功能介绍 | https://foxmate-website.vercel.app/features |
| 关于我们 | https://foxmate-website.vercel.app/about |

---

## 二、API 接口地址

### 1. 数据接收 API
```
POST https://foxmate-website.vercel.app/api/activities
```
**用途：** 接收客户端上传的用户行为数据

### 2. 版本查询 API
```
GET https://foxmate-website.vercel.app/api/version
```
**用途：** 返回最新版本信息，用于软件自动更新

---

## 三、数据库信息

### 1. 数据库类型
- **提供商：** Neon Postgres（Vercel 官方推荐）
- **数据库类型：** PostgreSQL
- **服务器位置：** 美国克利夫兰（Cleveland, USA East）

### 2. 数据库连接信息
| 参数 | 值 |
|------|-----|
| 主机 | `ep-restless-base-aj5ucilo-pooler.c-3.us-east-2.aws.neon.tech` |
| 端口 | `5432` |
| 数据库名 | `neondb` |
| 用户名 | `neondb_owner` |
| 密码 | `npg_QKU5lMberS1T` |
| SSL | Required |

### 3. 数据库控制台（Neon）
```
https://console.neon.tech/
```
**用途：** 直接管理 Neon 数据库
**功能：**
- SQL Editor（执行 SQL 查询）
- Tables（查看数据表）
- Data（查看数据）
- Settings（数据库设置）
- Branches（数据库分支管理）

### 4. 数据库创建方式
- **创建平台：** Vercel Storage
- **创建流程：** Vercel 项目 → Storage → Create Database → 选择 Neon Postgres
- **数据库项目名称：** foxmate-data（或默认名称）
- **登录要求：** 创建时需要登录 Neon 账号（GitHub 或邮箱）

### 5. 连接字符串
```
postgresql://neondb_owner:npg_QKU5lMberS1T@ep-restless-base-aj5ucilo-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

### 5. 数据库创建方式
- **创建平台：** Vercel Storage
- **创建流程：** Vercel 项目 → Storage → Create Database → 选择 Neon Postgres
- **数据库项目名称：** foxmate-data（或默认名称）

---

## 四、部署平台信息

### 1. Vercel 控制台
```
https://vercel.com/dashboard
```

### 2. 项目信息
| 项目信息 | 内容 |
|---------|------|
| 项目名称 | `foxmate-website` |
| 部署域名 | `https://foxmate-website.vercel.app/` |
| Git 仓库 | `https://github.com/ganwunixin/foxmate-website.git` |
| 分支 | `main` |

### 3. Vercel Storage（数据库管理）
```
https://vercel.com/dashboard → 选择项目 → Storage
```
**用途：** 管理 Neon Postgres 数据库

### 4. Vercel 项目设置
```
https://vercel.com/dashboard → 选择项目 → Settings
```
**包含：**
- Environment Variables（环境变量）
- Domains（域名管理）
- Deployments（部署历史）
- Functions（函数配置）

---

## 五、代码仓库

### 1. GitHub 仓库
```
https://github.com/ganwunixin/foxmate-website.git
```

### 2. 本地仓库路径
```
c:\Users\60199\Desktop\小狐狸最终版 (2)\foxmate-website
```

---

## 五、部署平台

### 1. Vercel 控制台
```
https://vercel.com/dashboard
```

### 2. 项目名称
```
foxmate-website
```

---

## 六、软件下载地址

### 1. DigitalOcean Spaces（文件存储）
- **存储提供商：** DigitalOcean Spaces
- **存储区域：** San Francisco 3 (SFO3)
- **访问方式：** 公开访问（CDN）

### 2. 安装包下载
```
https://foxmate2.sfo3.cdn.digitaloceanspaces.com/FoxMate%20AI_setup.exe
```

### 3. 文件大小
```
约 50MB
```

### 4. DigitalOcean 控制台
```
https://cloud.digitalocean.com/
```
**用途：** 管理存储空间和文件

### 5. Spaces 配置信息
| 参数 | 值 |
|------|-----|
| Space 名称 | `foxmate2` |
| 区域 | `sfo3`（San Francisco 3） |
| CDN 域名 | `foxmate2.sfo3.cdn.digitaloceanspaces.com` |
| 访问权限 | Public（公开） |

---

## 七、环境变量配置

### 1. Vercel 环境变量
| 变量名 | 值 |
|--------|-----|
| `POSTGRES_URL` | `postgresql://neondb_owner:npg_QKU5lMberS1T@ep-restless-base-aj5ucilo-pooler.c-3.us-east-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require` |
| `POSTGRES_USER` | `neondb_owner` |
| `POSTGRES_HOST` | `ep-restless-base-aj5ucilo-pooler.c-3.us-east-2.aws.neon.tech` |
| `POSTGRES_PASSWORD` | `npg_QKU5lMberS1T` |
| `POSTGRES_DATABASE` | `neondb` |

### 2. 本地环境变量文件
```
c:\Users\60199\Desktop\小狐狸最终版 (2)\foxmate-website\.env.local
```

---

## 八、备份信息

### 1. 项目备份位置
```
c:\Users\60199\Desktop\小狐狸最终版 (2)\backup_v1
```

### 2. 备份内容
- backend 目录
- foxmate-website 目录
- AI Part 目录
- 配置文件（config.json, FoxMateAI.spec, README.md, .gitignore）

---

## 九、重要提示

### 1. 数据库安全
- 数据库密码已存储在 Vercel 环境变量中
- 本地 `.env.local` 文件不要提交到 GitHub
- 定期备份数据库数据

### 2. API 安全
- 所有 API 接口都使用 HTTPS 加密
- 数据上传前已进行隐私脱敏处理
- 用户 ID 使用匿名化处理

### 3. 版本管理
- 软件版本信息存储在 `version_history` 表中
- 更新软件时需要同步更新数据库中的版本信息

---

## 十、快速访问链接

| 用途 | 链接 |
|------|------|
| 网站主页 | https://foxmate-website.vercel.app/ |
| Vercel 控制台 | https://vercel.com/dashboard |
| Vercel Storage（数据库） | https://vercel.com/dashboard → 选择项目 → Storage |
| Neon 数据库控制台 | https://console.neon.tech/ |
| GitHub 仓库 | https://github.com/ganwunixin/foxmate-website.git |

---

## 十一、部署流程说明

### 1. 网站部署流程
```
本地代码 → Git 推送到 GitHub → Vercel 自动检测 → 自动部署 → 网站上线
```

### 2. 数据库创建流程
```
Vercel 项目 → Storage → Create Database → 选择 Neon Postgres → 登录 Neon 账号 → 数据库创建完成
```

### 3. API 部署流程
```
API 代码放在 `app/api/` 目录 → 推送到 GitHub → Vercel 自动部署 → API 接口上线
```

---

## 十二、账户信息

### 1. Vercel 账户
- **登录方式：** GitHub 或邮箱
- **控制台地址：** https://vercel.com/dashboard
- **项目数量：** 1 个（foxmate-website）
- **数据库数量：** 1 个（Neon Postgres）

### 2. Neon 账户
- **登录方式：** GitHub 或邮箱
- **控制台地址：** https://console.neon.tech/
- **创建时间：** 2026年3月12日
- **数据库数量：** 1 个（neondb）

### 3. GitHub 账户
- **用户名：** ganwunixin
- **仓库地址：** https://github.com/ganwunixin/foxmate-website.git
- **仓库类型：** Public（公开）

### 4. DigitalOcean 账户
- **登录方式：** 邮箱
- **控制台地址：** https://cloud.digitalocean.com/
- **Spaces 数量：** 1 个（foxmate2）
- **区域：** San Francisco 3 (SFO3)

---

## 十三、项目架构图

```
┌─────────────────────────────────────────────────────────────┐
│                     用户端                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │  网站访问    │  │  软件下载    │  │  问卷调查    ││
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘│
└─────────┼──────────────────┼──────────────────┼───────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────┐
│                  Vercel 平台                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐│
│  │  网站托管    │  │  API 接口    │  │  数据库      ││
│  │  Next.js     │  │  /api/...    │  │  Neon Postgres││
│  └──────────────┘  └──────────────┘  └──────────────┘│
└─────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────┐
│              DigitalOcean Spaces                       │
│  ┌──────────────────────────────────────────────────────┐│
│  │  文件存储（软件安装包）                        ││
│  │  foxmate2.sfo3.cdn.digitaloceanspaces.com          ││
│  └──────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

---

## 十四、技术栈总结

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端框架 | Next.js 14.2.3 | React 框架 |
| UI 框架 | Tailwind CSS | 样式框架 |
| 后端运行时 | Node.js | Vercel Serverless |
| 数据库 | Neon Postgres | PostgreSQL 数据库 |
| 文件存储 | DigitalOcean Spaces | 对象存储 |
| 部署平台 | Vercel | 自动部署 |
| 版本控制 | Git + GitHub | 代码管理 |
| 包管理 | npm | 依赖管理 |

---

**文档结束**
