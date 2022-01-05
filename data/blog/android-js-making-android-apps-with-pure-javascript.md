---
title: Android.js - build android apps from nodejs
date: '2022-01-03'
tags: ['javscript', 'framework', 'new', 'mobile', 'android']
draft: false
summary: 'Android JS Is A Framework For Creating Native Applications With Web Technologies Like JavaScript, HTML, And CSS. It Takes Care Of The Hard Parts So You Can Focus On The Core Of Your Application.'
---
![android.js](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Hvu9K0WdyyIblGyuYVe0hGtG4fRK9g4lIQ&usqp=CAU)
If You Can Build A Website, You Can Build An Android App!
Android.js simple takes your node.js website and puts it into a WebView.

Yeah, i know that's a lot of disadvantages there but it also provides different APIs for you to interact with.

an android.js application isn't only a WebView like a front end of a site, it can also interact with the backend and interact with files and much more!

### installation
![install it](https://c.tenor.com/0JFK3s1Xr8IAAAAC/loading-downloading.gif)
To install [Android JS](https://android-js.github.io/) binaries, use npm.
``` bash
npm install androidjs
```

Install [Android JS](https://android-js.github.io/) project generator and builder
``` bash
npm install -g androidjs-builder
```

### initialize
``` bash
mkdir AndroidApp
cd AndroidApp
androidjs g
npm install
```

it will generate a sample project inside `AndroidApp` directory.

Which will look like:

```
AndroidApp
    |__ assets
    |       |__ ipc, css, js
    |
    |__ views
    |       |__ index.html
    |
    |__ main.js
    |__ package.json
```

- `main.js` is the main file or we can say it is back process of your app which execute all the code written in node, so you have to write all the node js code inside main.js
- `index.html` is the first view which is render by app initially
- `package.json` to keep track of all your node packages
- `assets` to store all assets of your app

### time to build
![let's go building](https://i2.wp.com/archeyes.com/wp-content/uploads/2016/04/01_egypt_twitter.gif?ssl=1)
``` bash
cd AndroidApp
androidjs b
```
it will generate apk file inside dist folder

if this `build` command fails or generated any error, try to build with `force command`
``` bash
androidjs b -f
```

### Why _not_ to use it
Android.js isn't better than react-native
But, at least you can (somewhat) throw your existing code in it and geerate an API to work on a device just like android application.
React native stays the best way to make Android applications with react (JavaScript).

### other resources
[docs](https://android-js.github.io/docs/) - documentation for android.js

[Sample apps](https://github.com/android-js/sample-app) - some sample apps to go with..

### conclusion
Android.js is an amazing framework if you don't know react

But if you know react, react native comes in handy at the first place.
