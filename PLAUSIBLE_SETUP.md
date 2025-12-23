# Plausible Analytics 集成指南

本项目已集成 Plausible Analytics，支持自建实例和官方服务。

## 配置步骤

### 1. 环境变量配置

创建 `.env.local` 文件（已添加到 .gitignore，不会被提交）：

```bash
# 你的网站域名（在 Plausible 中注册的域名）
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lensmakerformula.vercel.app

# Plausible API Host (自建实例的域名)
# 如果使用官方服务，留空即可
NEXT_PUBLIC_PLAUSIBLE_API_HOST=analytics.yourdomain.com
```

### 2. 使用官方 Plausible.io 服务

如果使用官方的 Plausible.io 服务：

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lensmakerformula.vercel.app
# NEXT_PUBLIC_PLAUSIBLE_API_HOST 留空或不设置
```

### 3. 使用自建 Plausible 实例

如果使用自建的 Plausible 实例：

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lensmakerformula.vercel.app
NEXT_PUBLIC_PLAUSIBLE_API_HOST=analytics.yourdomain.com
```

**注意：** `NEXT_PUBLIC_PLAUSIBLE_API_HOST` 只需要域名部分，不需要 `https://` 前缀。

例如：
- ✅ 正确：`analytics.yourdomain.com`
- ❌ 错误：`https://analytics.yourdomain.com`

### 4. 在 Plausible 中添加网站

1. 登录你的 Plausible 实例（自建或官方）
2. 进入 "Settings" → "Websites"
3. 点击 "Add a new website"
4. 输入你的网站域名（与 `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` 一致）
5. 保存

### 5. 本地开发

在本地开发时，可以设置不同的域名用于测试：

```bash
# .env.local
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=localhost:3000
NEXT_PUBLIC_PLAUSIBLE_API_HOST=analytics.yourdomain.com
```

**注意：** 在 Plausible 中也需要添加 `localhost:3000` 作为测试域名。

### 6. Vercel 部署配置

在 Vercel 项目设置中添加环境变量：

1. 进入 Vercel 项目设置
2. 点击 "Settings" → "Environment Variables"
3. 添加以下变量：
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = `lensmakerformula.vercel.app`
   - `NEXT_PUBLIC_PLAUSIBLE_API_HOST` = `你的自建实例域名`（如果使用自建）

4. 选择环境（Production, Preview, Development）
5. 保存并重新部署

### 7. 验证安装

部署后，访问你的网站，然后：

1. 打开浏览器开发者工具（F12）
2. 查看 Network 标签
3. 应该能看到对 Plausible 的请求：
   - 官方服务：`https://plausible.io/api/event`
   - 自建实例：`https://你的域名/api/event`

4. 在 Plausible 仪表板中，等待几分钟后应该能看到访问数据

## 常见问题

### Q: 为什么看不到统计数据？

A: 检查以下几点：
1. 环境变量是否正确设置
2. 域名是否在 Plausible 中已添加
3. 浏览器是否安装了广告拦截器（可能阻止 Plausible）
4. 等待几分钟，数据可能有延迟

### Q: 如何在开发环境禁用 Plausible？

A: 不设置 `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` 环境变量，或设置为空字符串。

### Q: 支持自定义事件追踪吗？

A: 可以，使用 Plausible 的自定义事件 API：

```typescript
// 在组件中使用
if (window.plausible) {
  window.plausible('Event Name', { props: { key: 'value' } });
}
```

需要在 `globals.d.ts` 中声明类型：

```typescript
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}
```

## 隐私说明

Plausible 是隐私友好的分析工具：
- 不收集个人数据
- 不使用 Cookie
- 符合 GDPR
- 轻量级（脚本大小 < 1KB）

## 更多信息

- [Plausible 官方文档](https://plausible.io/docs)
- [自建 Plausible 指南](https://plausible.io/docs/self-hosting)

