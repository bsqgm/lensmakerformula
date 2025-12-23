# Plausible 调试指南

## 检查步骤

### 1. 检查环境变量是否设置

**本地开发：**
```bash
# 检查 .env.local 文件是否存在
cat .env.local

# 应该包含：
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lensmakerformula.vercel.app
# NEXT_PUBLIC_PLAUSIBLE_API_HOST=你的自建实例域名（可选）
```

**Vercel 部署：**
1. 进入 Vercel 项目设置
2. Settings → Environment Variables
3. 确认以下变量已设置：
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
   - `NEXT_PUBLIC_PLAUSIBLE_API_HOST`（如果使用自建）

### 2. 检查浏览器控制台

打开浏览器开发者工具（F12），查看 Console：

**如果看到：**
```
[Plausible] Domain not configured. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN environment variable.
```
→ 说明环境变量未设置

**如果看到：**
```
[Plausible] Loading script: { domain: "...", apiHost: "...", scriptSrc: "..." }
[Plausible] Script loaded successfully
```
→ 说明脚本正在加载

### 3. 检查 Network 请求

在浏览器开发者工具的 Network 标签中：

1. **刷新页面**
2. **筛选 "plausible" 或 "js"**
3. **应该看到：**
   - `script.js` - Plausible 脚本文件
   - `api/event` - 事件发送请求

**如果没有看到请求：**
- 检查广告拦截器（uBlock Origin, AdBlock Plus 等）
- 检查浏览器隐私设置
- 检查是否在本地开发环境（需要设置环境变量）

### 4. 检查脚本标签

在浏览器开发者工具的 Elements 标签中，搜索 `plausible`：

应该看到类似：
```html
<script data-domain="lensmakerformula.vercel.app" src="https://.../js/script.js" strategy="afterInteractive"></script>
```

### 5. 手动测试

在浏览器控制台中运行：

```javascript
// 检查 window.plausible 是否存在
console.log('Plausible available:', typeof window.plausible !== 'undefined');

// 如果存在，手动触发事件
if (window.plausible) {
  window.plausible('Test Event');
}
```

### 6. 常见问题

**问题：环境变量设置了但脚本不加载**
- 确保变量名以 `NEXT_PUBLIC_` 开头
- 重新启动开发服务器（`npm run dev`）
- 清除 `.next` 缓存：`rm -rf .next && npm run dev`

**问题：Vercel 部署后不工作**
- 检查 Vercel 环境变量是否正确设置
- 确保选择了正确的环境（Production/Preview/Development）
- 重新部署项目

**问题：自建实例不工作**
- 检查 `NEXT_PUBLIC_PLAUSIBLE_API_HOST` 是否正确（只需域名，不要 `https://`）
- 检查自建实例是否可访问
- 检查 CORS 设置

### 7. 验证 Plausible 配置

1. 登录 Plausible 实例
2. 进入 Settings → Websites
3. 确认域名已添加
4. 检查域名是否与 `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` 完全一致

### 8. 临时调试代码

如果需要临时调试，可以在 `PlausibleScript.tsx` 中硬编码测试：

```typescript
// 临时测试（仅用于调试）
const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'lensmakerformula.vercel.app';
const apiHost = process.env.NEXT_PUBLIC_PLAUSIBLE_API_HOST || undefined;
```

**注意：** 调试完成后记得移除硬编码！


