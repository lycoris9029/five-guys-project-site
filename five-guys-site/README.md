# FIVE GUYS 项目展示网站

轻量原生 HTML/CSS/JavaScript，无依赖、无需 npm install 或编译。包含项目介绍、成员职责和用例、三次 Iteration 切换面板、GitHub / 项目看板 / 文档 / 视频资源，支持手机和键盘操作。

## 本地查看
双击 index.html 即可打开。也可在文件夹运行 `python -m http.server 8080`，访问 http://localhost:8080。

## 修改内容
编辑 data.js：
- members：成员 initials、name、role、cases。
- iterations：标题、说明、交付清单、status 和 url。
- resources：各资源标题、说明和 url。
- 未填写 url 时展示“Link to be added”，不会产生失效按钮。
- 项目简介等固定文案在 index.html；颜色和布局在 styles.css。
- 本地 PDF/ZIP 可以放入新建的 downloads 文件夹，url 填 `downloads/iteration-1.pdf`。较大文件建议使用 GitHub Releases 链接。

## 部署到 Vercel
1. 在 GitHub 新建网站仓库，将本目录的全部文件提交到仓库根目录（不要只上传 ZIP）。
2. 在 Vercel 选择 Add New → Project，导入该仓库。
3. Root Directory 选择包含 index.html 的目录。
4. Framework Preset 选 Other；不需要 Build Command；Output Directory 使用 `.`。
5. 点击 Deploy。仓库中的 vercel.json 已包含静态配置。
6. 后续修改 data.js 并 push 到生产分支，即可触发重新部署。

如果网站在 recruiting-system 仓库的 website 子目录，Root Directory 就选择 website，不能选择 backend。

## 提交前需要补充的真实信息
- 另外四位成员的姓名、角色、分配用例。
- Trello/Jira 链接（截图明确要求）。
- 各次交付实际状态、下载地址、文档和演示视频。
- Peter Chen 三个用例的分工来自当前已提供信息，请按团队最终分工核对。
- Iteration 3 是明确标记的建议范围，请与课程要求核对。

本网站是课程项目展示页，不包含招聘系统业务后端，也不向访客展示测试账号。
