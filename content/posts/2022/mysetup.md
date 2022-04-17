---
title: My Setup
date: 2022-04-17
image: /assets/images/2022/mysetup-image.jpg
---

When I first started writng and learning about code I was using Sublime Text. I still do for some basic task but I have since moved full time to VS Code. Here is a collection of exentsions I have acquired so far that has made my life easier.

## VS Code Extensions

### Code Runner

[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
you easily test blocks of code with this extension. Works with multiple languages: C++, Javascript, Python, PowerShell, Rust and Ruby to name a few.

![Code Runner Usage](https://raw.githubusercontent.com/formulahendry/vscode-code-runner/4879bfe4bb83a450aa59926f9f54f8a78ed89644/images/usage.gif)

### Live Server

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
allows you to launch a local development server with a simple click of a button. Live reload of static and dynamic webpages so you can quickly perform tests.

![Live Server Usage](https://raw.githubusercontent.com/ritwickdey/vscode-live-server/4f51bb70e4a8c25fb349776c3ef64f4470f3ed42/images/Screenshot/vscode-live-server-animated-demo.gif)

### CSS Peek

[CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek) allows you to quickly _peek_ at the revelant css/scss/less in your HTML. Makes it easier so you don't have to jump back and forth between tabs to check a style.

![CSS Peek Usage](https://raw.githubusercontent.com/pranaygp/vscode-css-peek/master/readme/working.gif)

### Indent Rainbow

[Indent Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
This extenstion adds color to your indentations. I found this extension very helpful when I'm write in Python so I can keep track of where my indents are.

![Indent RainBow Usage](https://raw.githubusercontent.com/oderwat/vscode-indent-rainbow/master/assets/example.png)

### Prettier

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
This opinionated formatter is fantastic for maintaing a clean look in your web development. If your working with other languages like Python you'll need to update your settings.json.

```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[python]": { "editor.defaultFormatter": null },

  "python.formatting.provider": "black",
```

### Dracula Theme

[Dracula Offical Theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
is by far my favorite theme to use. I have it setup in other apps like crhome and my terminal emulator.

![Dracula Theme in Action](https://raw.githubusercontent.com/dracula/visual-studio-code/master/screenshot.png)

### Nunjucks Templating

[Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)
Adds templating syntax support. I'm using an static site generator and have some of my pages templated in .njk.
![Nunjucks](https://raw.githubusercontent.com/ronnidc/vscode-nunjucks/0b37788b0ac959bc7f13f19c4d28be09af9debac/images/hello-world-example.png)

### Thunder Clinet

[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) might just be better than postman. It's a pretty simple interface to test API responses.  
![Thunder Client Usage](https://raw.githubusercontent.com/rangav/thunder-client-support/master/images/thunder-client.gif)

## Terminal Emulator

I have been using the [Kitty](https://sw.kovidgoyal.net/kitty/) terminal emulator after some expermination with other emulators. I did like using [Alacritty](https://alacritty.org/) but found myself returning to kitty more often. I of course use the [Dracula](https://draculatheme.com/kitty) theme with the [Fish](https://fishshell.com/) shell. If you're going to use the fish shell don't forget to install [oh-my-fish](https://github.com/oh-my-fish/oh-my-fish) for a nice list of plugins like autocomplete.
