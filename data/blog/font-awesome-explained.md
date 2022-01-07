---
title: Font Awesome - Explained
date: "2022-01-07"
tags: ['library', 'icons', 'explained', 'styling', 'web']
draft: false
summary: "font awesome is a really popular library for high quality svg icons. Let's explore in depth how these actually work."
---

![font awesome](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7UNPCpx9qWKcyluwEgSwfMB7uvgXw1Ydaw&usqp=CAU)
user experience is null without icons.

> In computing, an icon is a pictogram or ideogram displayed on a computer screen in order to help the user navigate a computer system. The icon itself is a quickly comprehensible symbol of a software tool, function, or a data file, accessible on the system and is more like a traffic sign than a detailed illustration of the actual entity it represents.

Icons are indicators about what the button, command or function or action actually does and helps in faster understanding of the interference. This, it's really important to know the correct icon for the specified place.

[font awesome](https://fontawesome.com/) is the amazing javascript Library for importing numerus fonts into your webpage. it's Incredible.
Let's dive right in it:

### installation
``` html
<script src="https://kit.fontawesome.com/85b07c1155.js" crossorigin="anonymous"></script>
```

The import might seem something like this if you have seen the link at the site.

### usage
Here's the interesting part.
[font awesome](https://fontawesome.com/) has four tones:
- solid
- regular (some are accessible to free users)
- light (pro)
- dual (pro)

![font awesome shades](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjO1Ek13SKgWvBgz9qdmniLmuJvmzQBoZtAw&usqp=CAU)

each one has a different class in the html tag (generally `<i>` is chosen)

So it goes like:
``` html
<i class="fas fa-rocket"></i>
<!-- fas = font awesome solid -->
<!-- fa = prefix -->
<!-- rocket = name -->
```
This one was for the solid one, now see the one with dual tone
``` html
<i class="fad fa-rocket"></i>
<!-- fad = font awesome dual -->
<!-- fa = prefix -->
<!-- rocket = name -->
```
See how only one class changes when you switch tones.

so you don't need to open [font awesome](https://fontawesome.com/) site evertime if you know the logic :))
![think about it](https://c.tenor.com/QaGZ50VlEPEAAAAC/think-about-it-use-your-brain.gif)

### wrapping up
[font awesome](https://fontawesome.com/) is really awesome for any site.

Fonts should be nice to see and you should respect accessibility practices though.

Users do love fonts a lot !!
