---
title: Frontend Mentor Github Search Challenge
date: 2022-05-19
image: /assets/images/2022/githib-search.png
---

I've been using a website called [Frontend Mentor](https://www.frontendmentor.io/home) to escape the tutorial hell that can occur when learning a new language or framework. I love this website because it setups challenges like a real world project. You're given what needs to be achieved in the project and what it _should_ look like. After you submit you're solution you can get feedback from the community.

Yesterday I completed the [GitHub user search app](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). A junior level application that has some styling challenges as well as an api challenge. Here is an example of the brief.

## Brief

> _Your challenge is to build out this GitHub user search app using the GitHub users API and get it looking as close to the design as possible._

> _You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go._
>
> _Your users should be able to:_
>
> _View the optimal layout for the app depending on their device's screen size_
>
> _See hover states for all interactive elements on the page_
>
> _Search for GitHub users by their username_
>
> _See relevant user information based on their search_
>
> _Switch between light and dark themes_
>
> _Bonus: Have the correct color scheme chosen for them based on their computer preferences. Hint: Research prefers-color-scheme in CSS._

![Frontend Mentor Preview](/assets/images/2022/preview.jpg)

Seeing how I've been on the journey to learn React this seemed liked the perfect opportunity to apply what I've learned so far and possibly learn some new things from the obstacles I'll have to overcome during the project. I logged my progress using Toggl and it took me roughly 11 hours to complete. I usually spent about an hour a day working on various aspects of the challenge. All said and done I'm pretty happy with the [end result](https://curious-alfajores-7e606e.netlify.app/)

## What I learned

The biggest take away from the project was learning to toggle between light and dark color themes. This actually had me pretty stumped for a few hours as I wasn't comfortable enough in React to figure out how to manipulate the styles. I went through a few tutorials but they all had these complicated ways of setting up a toggler or using a [styled-components](https://www.npmjs.com/package/styled-components) npm package.

I learned how to use the **componentDidLoad** and when to use **shouldComponentUpdate** both methods came in very handy in handling some features I needed in the application. When handling an error of no user being returned. Github still responds with a message response of "Not Found", which if not handled correctly wipes out all the states.

### Theme Toggling

I ended up coming to to this solution which is very easy to implement and it's really straightforward to understand.

First you'll need to download **use-local-storage**

```Javascript
npm install use-local-storage
```

```Javascript
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="App" data-theme={theme}>
      <div className="Top">
        <button className="ThemeChanger" onClick={switchTheme}>
          {theme === "light" ? "DARK" : "LIGHT"}
        </button>
        <img src={theme === "light" ? Moon : Sun}></img>
      </div>
      <Search />
    </div>
  );
}
```

Then will need to setup our css with some custom properties. In my index.css I setup all my light theme colors in :root and setup all the toggled styles in **[data-theme="dark"]**.

```Css

[data-theme="dark"] {
  --background-color: #141d2f;
  --card-background-color: #1e2a47;
  --card-accent-background-color: #697c9a;
  --text-main-text-color: #fff;
  --SVG-color: #fff;
  --box-shadow: 0px;
  --follower-count-text: #fff;
  --h1: #fff;
  --ThemeToggler-text: #fff;
  --NotFound-SVG: invert(50%) sepia(20%) saturate(0%) hue-rotate(44deg)
    brightness(90%) contrast(120%);
  --Found-SVG: invert(90%) sepia(50%) saturate(50%) hue-rotate(177deg)
    brightness(120%) contrast(100%);
}

:root {
  --background-color: #f6f8ff;
  --card-background-color: #fefefe;
  --card-accent-background-color: #697c9a;
  --text-main-text-color: #4b6a9b;
  --SVG-color: #4b6a9b;
  --box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  --follower-count-text: #2b3442;
  --h1: #222731;
  --ThemeToggler-text: #697c9a;
  --NotFound-SVG: invert(100%) sepia(0%) saturate(0%) hue-rotate(44deg)
    brightness(100%) contrast(103%);
  --Found-SVG: invert(36%) sepia(50%) saturate(454%) hue-rotate(177deg)
    brightness(98%) contrast(90%);
}
```

From there it's a simple as adding your custom property in a **var()** within your CSS. Here's an example:

```CSS
.UserView {

  background-color: var(--card-background-color);
  width: 730px;
  min-height: 419px;
  border-radius: 15px;
  margin-top: 1.5rem;
  box-shadow: var(--box-shadow);
}
```

### shouldComponentUpdate

Another hurdle I encountered was handling a "no user" found. The design wanted a red error message appear next to the submit button. My states depended on a successful response from Github. When I received an error message from Github it essentially set all my states to null and cleared all the data presented to the user. So I needed a a way to prevent the view to render on certain conditions.

By default **shouldComponentUpdate** returns true to confirm to React that an update should occur. So we need a condition in our method to return false to prevent the render.

```Javascript
shouldComponentUpdate(nextProps, nextState) {
if (nextProps.message === "Not Found") {
return false;
}
return true;
}
```

## Final Thoughts

This was a great challenge and I learned a lot of fun things about React. I learned some new CSS techniques and have found that I'm styling projects faster now that my comfort level is improving. I've started a new Frontend challenge from the site and have made significant progress towards finishing the application in a relativly short amount of time.
