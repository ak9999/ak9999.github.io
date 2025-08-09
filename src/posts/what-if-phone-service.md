---
title: "What if I rolled my own phone service?"
date: 2018-08-05
layout: layout.njk
---

At work, part of my job is to manage PBX (Private Branch Exchange) phone systems whenever the need arises.

For those who don’t know what a PBX phone system is, think about your experience when calling a business. Often times you are placed on hold, or transferred to someone else, and maybe given a number to call along with an extension to dial in order to reach somebody. If you’re interested you can read more about PBX here on Wikipedia.

So I got the idea of rolling my own phone service from my boss who went on a trip overseas. At work, we use 3CX as our PBX, and they make their own Android and iOS app so you can talk on the phone system using your smartphone — and this is what my boss did while he was overseas since he still needed to be reached by phone.

So I asked management “how much does this phone system cost?” which was met with “well it depends.” We’re going to skip over what businesses would need and focus on how I set myself up.

My first step was to get a free 3CX license. I get a tried and true phone system, and I just need somewhere to put it. Running a phone server at home wouldn’t be reliable, and it would probably violate my contract with my ISP. Instead, I opted for the cheapest standard VPS from DigitalOcean. That’s gonna run me about $5/mo, but I imagine in practice it’ll be a bit less. Next, I needed a phone number and a SIP trunk to connect to.

Some people go with their local phone company or cable provider for a SIP trunk, but I went with Twilio’s Elastic SIP Trunk. I was drawn to the pay-as-you-go idea, and so I know this would definitely not cost as much as traditional phone service. I also bought a phone number for them, and that’ll run me about $1/mo, plus the SIP trunk cost of however long I decide to talk on the phone. I paid for $20 of credit on Twilio to try out the service and see how far it goes.

For now I’m going to skip explaining the installation of 3CX on Debian and configuring it to work with Twilio, as they have guides for that on their respective websites, and I’m not sure what other things I’ll be doing to make it just right for me.

Now with my current setup, I’ve been making calls and found that the audio is clear, nothing out of the ordinary. I have more control over calls that take place, but I also got something I wasn’t really expecting: webmeetings capabilities. It turns out the 3CX server includes the ability for video conferencing with screensharing options over WebRTC.

<figure>
  <img src="/images/2018-08-05/3cx_meeting.png" alt="I didn’t plug in my camera or mic when I started the feature, so nothing to show. I am surprised there’s a vote button here though!">
  <figcaption>I didn’t plug in my camera or mic when I started the feature, so nothing to show. I am surprised there’s a vote button here though!</figcaption>
</figure>

I don’t imagine I’ll be using the web conferencing feature anytime soon, but it is HUGE! And I am not paying much for all of this either. In fact, I don’t think that in 12 months I’ll have spent more than $70 in total on this setup. I’m hoping that if this experiment works out, I’ll be able to ditch my landline, and I might have tips and tricks for anyone who is interested in doing this themselves.