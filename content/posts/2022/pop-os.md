---
title: Hello Pop OS!
date: 2022-07-08
image: /assets/images/2022/pop-os.jpg
---

The other week my trusty 2012 Macbook finally died. This time around I decided against reviving the older computer and put it down to rest for good. I took out the upgraded SSD and repurposed it form my main desktop computer. I was running Arch Linux on a old notebook HDD and was starting to notice some significant performance issues. I was also getting tired of Arch Linux. Maybe it's because I need to learn more about linux before using such a hardcore distribution. I just kept running into issues trying to get some environments setup and was always digging through docs and forums to find a solution. So I asked around and made the switch to a Ubuntu distribution called Pop OS.

## Pop OS

[Pop OS](https://pop.system76.com/) is created by a hardware company called System 76. The system was designed for gaming in mind as it supports Nvidia drivers out of the box. As per their website it's also designed for "STEM and creative professionals who use their computer as tool to discover and create." The installation process was extremely easy and has a MacOS feel when its loads up for the first time. Installing the software I needed was really easy using **APT Install** which is similar to the **pacman** package manager in Arch.

I do like that it's not a roll-release distribution. I was pretty lazy with the updates and when I did need to install something I found my keys were out of sync and I couldn't perform any basic installation. So then I had to do a full update and wait 30-40 minutes before I could get back on task. I realize that with this kind of distribution setting up some sort of cron job to run nightly can be beneficial to avoid this particular issue I was having.

### What I like

The system has some pretty nice features. I like the simplicity of the package manager. Loading customization's was pretty straight forward using [Gnome Tweaks](https://gitlab.gnome.org/GNOME/gnome-tweaks). I was able to easily setup all my dracula themes with very little effort. Everything seems to load really nicely, partially due to the SSD, and the overall system is a joy to work with.

### What I don't Like

Gnome is kinda of a bummer. I run two monitors and it doesn't really play nicely. It doesn't really understand where my primary monitor starts or ends. I don't think it helps that one monitor is vertical. I often have windows opening in between the two monitors which is very annoying. You also can't have individual desktop wallpapers for each monitor. So you have to create one big image file and plan accordingly.

### Node Version Manager

When I was getting all my environments setup on the new OS I was having issues getting node to play nice with Pop OS. Installing node through the package manager I only had access to version 12 which is pretty far removed from the current stable release. When I was following the instructions on the [node source page](https://github.com/nodesource/distributions/blob/master/README.md) I was getting some errors with conflicting files. That's what I decided to make the play for NVM and it's been fantastic. Not only do I have access to ALL the versions of node.js and I can easily switch between them. I no longer have to **sudo npm install** which is a huge win. I really can't believe I waited to this long to get onboard with NVM...

## Wifi Upgrade

I was taking a timed quiz for class a couple of days ago and my browser never fully loaded but the timer apparently did. I was having some connectivity issues since the OS upgrade and started to attribute the issues to the OS. After some research all my drivers and software configurations were correct. I started looking at how my network was setup.

I was running a Netgear Wifi extender from my ethernet port. I was only getting 20 mbit/s on the download and about 7-8 mbit/s on the upload. I knew it was time to get that number up. After some reasearch I decided to just put a wifi card into my computer. I chose the [ASUS PCE-AX58BT](https://www.asus.com/us/Networking-IoT-Servers/Adapters/All-series/PCE-AX58BT/) and was able to get it same day from Amazon for around 70 USD. This was 100% percent worth the cost. I'm now getting over 200 mbit/s download speeds even with other people on the network. I couldn't be happier with my purchase. The best part is that I didn't need to perform any additional installs on Pop OS. It just worked.
