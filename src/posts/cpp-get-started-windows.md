---
title: Setting up GCC on Windows for C and C++ development.
date: 2016-08-07
layout: layout.njk
---

This guide is written for students or self-learners who want to write and compile programs on Windows using gcc and g++ from the GNU Compiler Collection.

Note: When I tell you to write something in double quotes (“”), that means type that thing without the quotes. When I say something like <something> that means you won’t literally see “<something>”. That’s just a placeholder.

I’ll be going over the three of these toolchains. Click on their names to visit their respective websites.

* [TDM-GCC](http://tdm-gcc.tdragon.net/) [ Easiest ]
    A redistribution of MinGW’s GCC with a friendlier installer. This is the easiest to set up. Most readers will just want this.
* [Cygwin](https://cygwin.com/) [ Involved ]
    A collection of open source tools, including GCC, that provide functionality similar to a Linux distribution so you can use POSIX system calls. If you compile using the Cygwin environment, you are compiling your program for Cygwin, as it will depend on the Cygwin runtime.
* [MinGW](http://www.mingw.org/) [ Even More Steps ]
    A port of GCC and other tools for Windows. When you compile with the MinGW environment, you are compiling native applications for Windows that won’t depend on any 3rd party libraries (unless you use threading, but I won’t cover that here). Setup is quite involved. Optionally, MSYS can give you a POSIX-like development environment similar to Cygwin.

Before we begin, I would like to remind you that you only need to pick one of the above. If you are new, I advise you go with TDM-GCC.
___

TDM-GCC

The installer is just a friendlier way to install MinGW’s GCC. You can choose which toolchain you want, either 32-bit or 64-bit, and the components you want. It will even add its directory to your system path automatically. No pictures included because it’s that easy. Open up a Command Prompt and you can run gcc and g++.

___

Cygwin

Visit the Cygwin website, linked above and download the Cygwin version for your operating system.

Run the installer, choose “Install from Internet”, leave the root install and local package directories alone unless you know what you are doing. Pick any download mirror and you’ll find yourself on the Select Packages screen. We only want gcc and g++, so type “gcc” into the search box to narrow our options. Click where it says “Skip” on the “gcc-core” and “gcc-g++” packages and the word “Skip” will change into version numbers. You can now click next, the next page will say something about installing additional packages as dependencies.

When the installation is over, you can go to your Start Menu and look for the Cygwin Terminal. Run it, and you’ll be greeted by a bash prompt. You can now run gcc and g++.

Since this is a Unix-like environment, you’re going to have to save your work somewhere in your home directory to make your life easier when compiling, which is `C:\cygwin\home\<user>` or `C:\cygwin64\home\<user>` if you left the root install directory as the default.

If you want you can re-run the installer to install other programs or libraries you may need, like Vim, or Emacs if you would like a console text editor. You can also delete the local package directory from earlier if you don’t want it.

___

MinGW

Visit the MinGW home page and click on Downloads in the left sidebar. This will take you to the SourceForge download page where you can download the installer. Run mingw-get-setup.exe, leave the default install directory alone and make sure that “also install support for the graphical user interface” is checked.

Continue through the installer and you will find the MinGW Installation Manager, click on the empty box next to “mingw32-gcc-g++”, click Installation in the top left and click “Apply Changes”. Click Apply again on the next window that pops up and the installer will download gcc and g++. When done, you should add MinGW to your user PATH.

You can do this by looking for “This PC”, “Computer”, or “My Computer” depending on which version of Windows you have. Right click it, and go to Properties, then look for Advanced System Settings, then click on “Environment Variables” and click that.

If the PATH variable doesn’t already exist under your user variables, create it using “New…” and add “C:\MinGW\bin” to it.

Click OK in all the dialogs and now when you open up your Command Prompt you can call gcc.exe and g++.exe to compile your programs.

MinGW also offers MSYS, which provides an environment similar to Cygwin if you like.