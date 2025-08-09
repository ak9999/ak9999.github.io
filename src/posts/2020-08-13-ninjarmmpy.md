---
title: "My new library, ninjarmmpy!"
date: 2020-08-13
layout: layout.njk
---

Hi everyone, it's been a very long time since my last post. I've been trying to
write more but the pandemic makes it so easy to be lazy. **HOWEVER,** I have not been inactive this whole time.

Let me show you what I've been up to.

## ninjarmmpy

I wrote and published my first library, [ninjarmmpy](https://github.com/ak9999/ninjarmmpy), to [PyPI](https://pypi.org/project/ninjarmmpy/)!

`ninjarmmpy` was born out of a curiousity I had at work. I work as a Centralized Services Engineer for an MSP.
I have to give insight on many different technical environments for different people 
to my fellow staff and show trends of what is happening over time. I wanted to know if
there was a way to automate the above work, so I found that NinjaRMM released a new version of their API.

Their previous v1 API was very basic so I didn't spend too much time on it, 
but their new v2 is rich with features, so I took a look and played around
with the functions. I'm still learning, so I decided that after work I would try to build a wrapper around this API.

I started kind of automating some reports, but I am yet to build an application to do my work for me on a schedule.
I am running scripts manually for now.


**At first I thought I was doing something pretty niche, but then someone emailed me:**


>Hello,
>
>I stumbled upon your Ninja API v2 for Python and it works well. Great work! I was curious as to what was missing since you said it was far from complete? I'm trying to get the >RAID information for our servers and I'm not able to do so. I wanted to check with you to see if that call is available yet or if I'm doing something wrong as I cannot find >it. I am a complete beginner when it comes to API's so I wanted to say thank you for your hard work and I appreciate your efforts. If RAID information isn't available yet, >that's no problem, I just wanted to check in with you.
>
>Thank you,
>Z

Since my library is just an API wrapper, I just went and wrapped around the endpoint that does what `Z` wants it to, and I let them know it was ready and to try it out.

We had the following exchange:

>AJ,
>
>Thank you so much for adding the RAID information so quickly. I appreciate the work you're putting into this. I am truly in awe of your skills and knowledge and beyond >grateful for the examples you've provided. I look forward to seeing how the ninja API progresses in the future. I'm building a dashboard for our company to monitor servers and >you've made it 10x easier for me. 
>
>Thank you again,
>
>Z
>
>From: AJ
>To: Z
>Subject: Re: Python Ninja API
> 
>Hey Z,
>
>I haven't implemented every function just yet. The most complete parts are the calls to get device, group, and organization info. I have not implemented anything regarding >queries which is what your RAID question falls under. I did just make a recent commit to add functions for RAID controllers and drives, and I have an example script here: >https://github.com/ak9999/ninjarmmpy/blob/master/examples/get_raid_info.py
>
>I haven't built a new package yet for PyPI but you can install the package straight from GitHub with "pip install git+https://github.com/ak9999/ninjarmmpy.git" to try out the >latest code.
>
>-- AJ

They were really happy that I replied, they told me how much easier my work made their work, and it made me happy too.

I still have to rewrite the examples to match the current version of the library, but I'm happy with what I've made, and it wasn't particularly difficult.
The hardest part was learning how to make my own authentication class to pass to `requests` so I could authenticate with NinjaRMM.

My library is very usable as-is, but there's still a bit more I can do, and I may make more libraries for other RMM software too.

As always, thanks for reading.

-- AJ