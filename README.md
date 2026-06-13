# aminzuche-website

印尼华人租车服务官网，基于 Next.js 15、React 19 和 Tailwind CSS。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 查看首页。

## 页面范围

- 首页 `/`
- Hero
- 服务模块
- 车型模块
- 客户评价模块
- FAQ 模块
- 联系方式模块
- 留资表单
- SEO 文章列表 `/articles`
- SEO 文章详情 `/articles/[slug]`
- `robots.txt`
- `sitemap.xml`

## SEO 与统计配置

以下配置通过 Cloudflare Pages 环境变量设置，不要写入 `.env` 并提交：

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=你的Google验证码
NEXT_PUBLIC_BAIDU_TONGJI_ID=你的百度统计ID
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/你的号码
```

当前询盘表单会在配置 `NEXT_PUBLIC_WHATSAPP_URL` 后打开 WhatsApp 并带上表单内容；尚未接入后端数据库或邮件发送接口。
