---
title: "Visual Studio Code Live Share - Safe and Reproducible!"
date: 2020-12-29
layout: layout.njk
---

Hi everyone, time for another blog post.

This one's about an idea I had while taking part in "[mob-programming]([Mob programming - Wikipedia](https://en.wikipedia.org/wiki/Mob_programming))" with a friend. I did not know what mob-programming was, but it was the first time I got to use the [Live Share]([Collaborate using Visual Studio Code - Visual Studio Live Share - Visual Studio Live Share | Microsoft Docs](https://docs.microsoft.com/en-us/visualstudio/liveshare/use/vscode)) feature in Visual Studio Code. It was a pretty smooth experience! It was very interesting being able to share a code editor with no work on my part. I was able to see the host's project directory structure, terminal (read-only access), and the code as it was being edited, kind of like a Google Doc.

Immediately I started thinking -- this would make a great teaching aid and can be a very powerful tool during work-from-home scenarios. If you really want someone to learn though, they're gonna have to do some doing. Sometimes that goal can be met easily, and sometimes it can't be. What if I want to teach someone how to navigate a Unix-like OS and file directory? Am I alright with people running whatever commands they want on my personal computer? Not really.

Visual Studio Code allows for working in containers using the [Containers]([Develop in containers with Visual Studio Code](https://code.visualstudio.com/learn/develop-cloud/containers)) extension. So I created a Docker container that creates a reproducible environment. You can see the code here: [Python Live Share]([GitHub - ak9999/pythonliveshare: Docker image for use with VS Code&#39;s Live Share feature for safer sharing, without worrying about making changes to your host system.](https://github.com/ak9999/pythonliveshare)).

I made this specifically for use within the NYC Python Meetup but you can make changes to include other tools you want if needed. With this container I can launch a VS Code session from within the container and start a Live Share session. I can also share a folder with the container so that any changes made during the session are also saved on my host in real time. I can even share my terminal without fear that someone may be able to do something to damage my host system.

Hopefully this helps others who want to teach and learn with their peers either at school, work, or somewhere inbetween.



Thanks for reading!