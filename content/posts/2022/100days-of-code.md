---
title: 100 Days of Code
date: 2022-05-05
image: /assets/images/2022/100days.png
---

It's been an interesting learning week here at the laboratory. Last week I committed to the the 100 Days of Code challenge which has put my development in overdrive. In short the goal is to publicly commit to building a project or at least writing code for a minimum of one hour a day.

## How's it Going?

To find success with the challenge I needed a way to track my time on the projects I want to accomplish. I started with [TimeCamp](https://www.timecamp.com) last month and wasn't really impressed with their features. Since then I have moved to [Toggl](https://www.toggl.com) which is fantastic! It's really intuitive on setting up and tracking billable and non-billabe projects and produces some excellent insights.

So far I've logged 9 hours 29 minutes specifically tagged "100 Days of Code." Yesterday I completed day 9 of the challenge so this figure is in-line with the minimum requirement for the challenge. If we factor in the other projects I'm doing alright with making time for writing code.

![toggle log](/assets/images/2022/100-days-of-code-logged.png)

## Accomplishments This Week

I'm nearly finished with a photography website that includes a few features that I thought would be really difficult to implement. For starters the client wanted to include a feature to schedule an appointment based on a selected package. That meant having a user select a date and time that did conflict with another users selected date and time as well as presenting that data to the user.

This was incredibly easy to implement with [Calendly](https://calendly.com/) and it doesn't look that bad. I've been using the free version to prototype the design but I'm pretty impressed with the features. Not to mention how easy it was to setup.

My biggest accomplishment this week, at least I feel, is fully comprehending package bundlers. Specifically Webpack. I needed use a bundler to solve a particular issue I was having with a feature I was trying to implement on the photography website. I wanted the portfolio section to have that nice masonry CSS effect and auto scale based on the page size. The problem was while loading the script via CDN the images in the masonry target were already loaded and was breaking the layout.

I needed a script to execute Masonry after the page loaded. I was due to learn about pack bundlers so I opted to npm install 'masonry-layout' rather than include the masonry.min.js in a script tag of my html. In order to have success with webpack I needed to grok a few concepts.

### AMD - Asynchronous Module Definition

This a proposal that specifies a mechanism for defining modules and it's dependencies that can be asynchronously loaded only when they are needed. There are two key methods when using AMD modules and they are **define** and **require**.

We can create and define a global module with define and then **import** that module in other parts of the code with a **require**.

### Common JS

This is a proposal for declaring modules that works outside of the browser and attempts to cover a broader set of uses like inputs/outputs, file system queries and promises. This is the standard used in NodeJS to encapsulate modules with **modules.export** and makes available to other modules with **require**.

```Javascript
var modA = require( "./foo" );
var modB = require( "./bar" );

exports.app = function(){
console.log( "Im an application!" );
}

exports.foo = function(){
return modA.helloWorld();
}
```

### UMD - Universal Module Definition

This is combination of AMD and CommonJS which uses the syntax of CommonJS and the asynchronous loading technique of AMD. Because of this it's suitable for both server-side and client-side.

### ESM - ES Modules

This is the official standard used in JavaScript. ES Modules use import and export statements to deal with modules. A module can contain classes, functions, variables and objects.

```Javascript
export let num_set = [1, 2, 3, 4, 5];

export default function hello() {
console.log("Hello World!");
}

export class Greeting {
constructor(name) {
this.greeting = "Hello, " + name;
}
}
```

### Import vs Require

In short **require** can be called anywhere in the JavaScript file and is non-lexical. **Import** cannot be called conditionally and is lexical, which means it needs to be at the top of the file.

## Putting It All Together

In order to use Masonry I needed to use the ESM import to get the Masonry object into my file. Webpack uses an entry point that you can define in the _webpack.config.js_ The default path is _./src/index.js_. In my index.js I started building my code.

```Javascript
import Masonry from "masonry-layout";
```

Then we have to setup out export path file path for webpack. A typically _webpack.config.js_ might look something like this.

```Javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
};
```

Next we add a line to our package.json in the scripts area and then when we run npm start we have a main.js in the /dist folder that we can link in out html.

```JSON
"scripts": {
"start": "webpack --config webpack.config.js"
},
```

Finally I have deep diving in REACT and started building the [GitHub User Search App](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6) from [Front-end mentor](https://www.frontendmentor.io/). I do have an ultimate product that I want to development in REACT for the 100 Days challenge but I'm gonna start with some tutorials and smaller challenges from this website to build some comfort.
