---
title: The Full of Hope Foundation
date: 2022-04-28
image: /assets/images/2022/FOH.jpg
---

I'm pleased to announce that after a little bit of a wait. The board at [Full of Hope Foundation](http://www.fullofhopefoundation.org) approved my redesign for their wordpress site. it's a great local Arizona foundation helping families finacially that have be affected with a cancer diagnosis.

## The Process

To begin I setup a sub domain to test my new design ideas so I didn't break the live website. This is a relatively straightforward with godaddy and the cpanel.

Years ago when I was with The Above Network I was using some php but after years of zero use I had completely forgotten everything. As my goals right now are to primarily stick to frontend languages the idea of relearning php to make this site wasn't going to happen.

The old site was built using [Beaver Builder](https://www.wpbeaverbuilder.com/). However after playing with the interface and trying other plugins I ultimately settled on using [Elementor](https://elementor.com/). I found the interface and customization capabilities rather intuitive but if you don't invest the $49.99 for the Pro version you do miss out on a lot. The good news is Elementor does provide an HTML module that allows to to recreate 99% of their supplied modules. It's just extra time to write the code rather than click and drag the element onto the working area.

In the end I purchased the proversion as I ran into some issues with the exporting of the templates from the subdomain and I wasn't able to edit the correct elements on the top level domain. The pruchase made my life easier also incorporating the proper forms into the new site with the correct validations and captcha's.

## What I learned

The main come away from the project is wordpress sucks. It's fantastic for multiple users that are managing and creating posts but for the end user it can be painfully slow.

My first [Light House](https://developers.google.com/web/tools/lighthouse) test revealed some shocking results. The site received an initial performance score of 46 with a full paint around 15.9s seconds. Yikes!!!

![performance report](/assets/images/2022/performance-report.jpg)

I tried various tactics and plugins to try and bring that performance score up. I started by optimzing all my images by resizing and exporting with some more jpg compression. Then I tried to follow that up with a plugin called [Optimole](https://optimole.com/) that promises to further optimize your images. However it instantly broke a few featuers on the site.

Next I tried to focus on optimzing the CSS and javascript from Elementor. They recommened [Autoptimize](https://wordpress.org/plugins/autoptimize/). The description of the plugin made it seem ideal...

> It can aggregate, minify and cache scripts and styles, injects CSS in the page head by default but can also inline critical CSS and defer the aggregated full CSS, moves and defers scripts to the footer and minifies HTML.

The plugin instatly broke the site. Okay, well maybe the much acclaimed [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/) will be the winner. It infact was not. I didn't see any performance gains from using the product. I'm pretty sure it's a ploy to get you to use their full paid service.

## What Now???

The site is working and and the full paint is better at around 6s yet still far from the ideal 2.5 seconds. I'm currently looking into using sometype of CDN to cache static pages of the site.
