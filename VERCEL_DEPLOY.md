# 部署到 Vercel 指南

## 方法 1: 通过网页界面（推荐）

### 步骤：

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 如果没有账号，点击 "Sign Up" 使用 GitHub 账号登录

2. **导入项目**
   - 登录后，点击 "Add New..." → "Project"
   - 在 "Import Git Repository" 中找到 `bsqgm/lensmakerformula`
   - 点击 "Import"

3. **配置项目**
   - Vercel 会自动检测到 Next.js 项目
   - Framework Preset: Next.js（自动选择）
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（自动）
   - Output Directory: `.next`（自动）
   - Install Command: `npm install`（自动）

4. **环境变量**
   - 本项目不需要环境变量，直接跳过

5. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常 1-2 分钟）
   - 部署完成后会获得一个 URL，例如：`https://lensmakerformula.vercel.app`

6. **自动部署**
   - 之后每次推送到 GitHub 的 main 分支，Vercel 会自动重新部署
   - 每个 Pull Request 也会创建预览部署

## 方法 2: 使用 Vercel CLI

### 安装 Vercel CLI

```bash
npm i -g vercel
```

### 登录 Vercel

```bash
vercel login
```

### 部署

```bash
# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

### 后续更新

每次代码更新后，只需：

```bash
git add .
git commit -m "Update"
git push
```

Vercel 会自动检测 GitHub 推送并重新部署。

## 自定义域名

1. 在 Vercel 项目设置中，进入 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

## 项目设置

项目已经配置好 `vercel.json`，包含：
- 自动检测 Next.js
- 构建命令
- 区域设置

无需额外配置即可直接部署！


