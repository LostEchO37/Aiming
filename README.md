# Aiming

Aiming。一个宇宙是一块地方：学习、讨论机会、找同路人。

可以从营销、人事、数字开发、美术、安全走进去。看和学不必登录。写下讨论或同路人纸条需要一个免费账号。

由香港的一间小公司制作。

## 页面

| 页面 | 文件 |
| --- | --- |
| 首页 | `index.html` |
| 宇宙列表 | `universes.html` |
| 宇宙详情（各宇宙共用这一页） | `universe.html?id=yingxiao` 等 |
| 学习 | `learn.html` |
| 讨论 | `discuss.html` |
| 同路人 | `people.html` |
| 关于 | `about.html` |
| 登录 | `login.html` |
| 注册 | `register.html` |

讨论和同路人从搜索开始，可以搜话题、帖子、机会和人。宇宙页里的讨论只看该宇宙。标成「示例」的内容不是真实的人。登录后写下的内容是数据库里的记录。

宇宙 id：`yingxiao` 营销，`renshi` 人事，`kaifa` 数字开发，`meishu` 美术，`anquan` 安全。

## 账号和数据库

账号、讨论、回复、同路人纸条和赞记在 Postgres 里。环境变量名叫 `DATABASE_URL`。

把它设在运行这个程序的主机上，不要写进仓库，也不要贴到聊天里。Neon 用项目里的 pooled connection string。没有信用卡的免费计划就可以。

`main` 仍然是 GitHub Pages 上的静态站。这个带账号的程序在 `accounts` 分支，需要一个能跑 Node 的地址，页面和 `/api` 在同一个域名下。不要把这个分支合并进 `main`，否则 Pages 上的页面会去请求它没有的接口。

## 本地打开

```bash
npm install
DATABASE_URL=postgres://USER@/aiming?host=/var/run/postgresql npm start
```

然后访问 http://127.0.0.1:8080

看过的标记仍只留在这台浏览器，不进数据库。
