---
title: Next.JS - the production ready react on steroids frameowrk
date: '2022-01-02'
tags: ['javscript', 'framework', 'new', 'next.js', 'react']
draft: false
summary: 'next.js is emerging as a popular JavaScript framework for production it is made over react and is very performant.'
---
Next JS is an amazing JavaScript framework made on the existing react framework made by Facebook. Factors that make it amazing or the SEO features. Also next JS as an inbuilt support for API structures which make it even more amazing when working with APIs.
Even the site is made with next JS. Yup. It has a ton of inbuilt modules which makes development even more amazing text to image module as an instance. It automatically optimises the images as per the weight and height and other factors. The `link` module enables no refresh routing which fetches the JavaScript code and renders that instead of redirecting you to another page.
It's called react on steroids because of all these inbuilt module sentence of features which come along with the next.js framework.
Other frameworks like blitz.js are made on top of next.js, adding more functionalities to the framework. Next JS has a support for server side rendering which makes it incredibly faster than react and the content is available to web crawlers too.

### installation
To initialise a next.js application, run:
``` bash
npx create-next-app@latest
# or
yarn create next-app
```
You can create a TypeScript project with the --ts, --typescript flag:
``` bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescrip
```

### file systems in next
now see the file structure carefully
![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9M_CsJYpZ2OPTbgh14yF7qD63Dt48orTlA&usqp=CAU)

The `pages` directory is the entry point of the application as well as the URL structure of your website.
That is, `pages/about.js` will be available at `[url]/about`

The `public` directory will contain your assets and other images for files which are not controlled by next.
You can create as many folders and can also access them.
Like, making component folder which will contain usable components which you can reuse in different pages without writing same code every time.

### wrapping up
Next years is an amazing framework for creating beautiful applications with react which perform amazingly in search results and performant on the user's side.
