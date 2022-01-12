---
title: Deploying A Next.js App On Vercel
date: "2022-01-12"
tags: ['deploying', 'javascript', 'next.js', 'vercel', 'cloud']
draft: false
summary: "vercel is the best platform to deploy and test your next.js application. Let's see how you can deploy there for free"
---

![next.js logo](https://assets.vercel.com/image/upload/q_auto/front/assets/design/white-nextjs.png)
vercel is the best platform to deploy and test your next.js application. Let's see how you can deploy there for free.

for this, you need to have one accounts:
- [vercel](https://vercel.com/) (ofc)

first of all, make a git repository with a next.js project
``` bash
npx create-next-app
git init
```

### Now install vercel globally:
``` bash
npm i -g vercel
# or
yarn add -g vercel
```

### deploy !
``` bash
vercel
? Set up and deploy “~/web/my-new-project”? [Y/n] y
? Which scope do you want to deploy to? My Awesome Team
? Link to existing project? [y/N] n
? What’s your project’s name? my-new-project
? In which directory is your code located? my-new-project/
Auto-detected project settings (Next.js):
- Build Command: `next build` or `build` from `package.json`
- Output Directory: Next.js default
- Development Command: next dev --port $PORT
? Want to override the settings? [y/N]


# and for production
vercel --prod
```

### Setting Up Environment Variables
``` bash
vercel --build-env KEY1=value1 --build-env KEY2=value2
```

### That's It

Access the next.js application with the url provided
