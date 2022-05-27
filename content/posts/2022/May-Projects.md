---
title: A Good Week of Progress
date: 2022-05-26
image: /assets/images/2022/tip-calc.png
---

Fun week of making progress and completing projects. This week I've completed one front-end mentor project and another game exercise project called lights out. I've also upgraded my keyboard this week with some new caps that give my keyboard a completely new feel. However there was a downside that I overlooked in my research to the upgrade. The new key caps do not have a way to pass through the light from my switches so while working in low-light you can not see anything.

I work mostly at night right now due to the fact I have a day job in an unrelated field and I don't really like working with the overhead lights on. The solution was to install an [ws2812b](https://howtomechatronics.com/tutorials/arduino/how-to-control-ws2812b-individually-addressable-leds-using-arduino/) LED strip and hook it up to a [esp8266](https://components101.com/development-boards/nodemcu-esp8266-pinout-features-and-datasheet) micro controller. I then flashed the controller with WLED using pyFlasher which was really easy and straightforward. This small project added some really cool accent lighting to my setup and the ability to see my keyboard when working at night.

![key caps](/assets/images/2022/keycaps.png)

### The Week In Review

Making some progress in grokking the world of React. State and props are finally making sense to me. I'm comfortable in using class components and passing data around between child and parent components. Then next step is to start moving away from the class components and start using functional components in my day-to-day. I'm finding that I'm having to google less while working on projects which is exponentially increasing my productivity. The [leetcode](https://leetcode.com/TheShonuff/) and [code war](https://www.codewars.com/users/TheShonuff) exercises have also been helping here.

## The Tip Calculator

This [challenge](https://www.frontendmentor.io/solutions/tip-calculator-BgN8hMOxbL) was a junior level application and didn't contain anything too complicated compared to previous project; [Github Search app](https://curious-alfajores-7e606e.netlify.app/). This particular application contained a lot of set.state and ternary operators, which was something I had some trouble grasping initially but now very comfortable implementing.

This project gave me practice with using events in React. Until now I haven't really handled too many events. This challenge had several buttons including a custom tip field that needed to be handled with state. I handled the CSS classes using a ternary operator to manage the visual state of the the button as well as to make sure multiple buttons were not selected.

```javascript
<button
    className={
        this.state.tipPercent === "0.10" && this.state.customTip === false
            ? "Active"
            : ""
    }
    onClick={(event) => this.handleTipPercent(event, "value")}
    value="0.10"
>
    10%
</button>
```

I then used a handleTipPercent method to handle the value being passed when the button is clicked.

```javascript
handleTipPercent(event) {
    this.setState({ tipPercent: event.target.value, customTip: false });
  }

```

The final [result](https://resilient-gelato-5621c5.netlify.app/) of the project came out really nice. I completed the project in under 6 hours. I was initially making good progress but was stumped on some of the CSS for a little bit. There was a request on the project to throw an error when zero people where selected in the amount of people field. For whatever reason I was unable to toggle the outline of the input field to red when this event occurred.

## Lights Out

![Lights Out Game](/assets/images/2022/lightsout.png)

This was my first game project in the world of React and I'm pretty pleased with how it turned it out. It's a really basic exercise in the Colt Steel React uDemy class I'm taking. It was good preparation for the [next](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v) front-end mentor challenge I'm looking at tackling. The end [result](https://delicate-dodol-868ea5.netlify.app/) looks fantastic and handles really well.

## WLED

![Desktop](/assets/images/2022/desktop.png)

This [project](https://github.com/Aircoookie/WLED) designed by AirCookie was incredibly simply to install and get running. However I ran into my own hurdles while getting going on the project. First my Arch Linux OS needed updating and therefore my key's were out of sync so I couldn't download the proper software until that was rectified. No problem I thought, I'll just flash the esp8266 with my Macbook will I'm waiting for the system to update.

Well that didn't happen. My macbook was not happy about the "unsafe" third-party software I was trying to run and wound not give pyflasher access to my usb ports. So I had to wait until my system was updated.

After the update it was a really simply process. **Step 1** is ground the GPI00 which puts the chip into flash mode. **Step 2** is run the software with the selected package from WLED. **Step 3** is access the WLED_AP and set it up on your wifi. I gave it a static ip address so I can access the control panel from any device to quickly power down the unit at the end of the day when I'm finished working.
