---
title: "How we got to “But it works on my machine!” and how we could have avoided it."
date: 2018-01-31
layout: layout.njk
---

During the last Fall semester I participated in CUNYCodes, a portfolio development program. The mission of CUNYCodes is to help create an environment for college students majoring in STEM related fields or are just interested in learning software development to work collaboratively and expose us to best practices and get a better insight to the industry. I had a great experience and the rest of my post is about what I would do if I could go back in time.

I joined CUNYCodes because I did not have much experience working on a team to create software projects, and I wanted to be in an environment where I could learn with others while creating. My goal during the semester was to create an application, Citysnapshot, that would visualize New York City’s 311 Service Requests. If you don’t know what 311 service requests are, you can learn more about them here: http://www1.nyc.gov/311/

Our application repo can be found here: https://github.com/ak9999/citysnapshot

When the team and I spoke, we gauged our respective technical knowledge and decided to go with Python and Flask to build our application API, and Heroku for deployment. This way we wouldn’t have to install too many dependencies on our computers. What I did not realize at the time though was that even though we were all using Python 3.6 and the same versions of Python packages (determined by a requirements.txt that we shared), there were still issues with running our web application locally. One of my partners was unable to load certain scripts even though the application worked fine for me and when deployed to our target. This led to troubleshooting and re-writing code, which was then committed, which did not need to happen. Eventually I would tell my partners to just trust that the app will work once deployed because it worked on my personal machine. There was more, but the gist is that we could have done something different to make the development process better to save time and work faster.

Fast-forward as we are nearing the end of CUNYCodes. Someone wanted me to take a look at an application of theirs and give my opinion of how I would do things differently. There were many dependencies and I did not want to have to install them locally, so I found out that their target is a server running Ubuntu 16.04. I cloned the repository and wrote a Vagrantfile that would install all the dependencies for me upon provisioning a virtual machine. I had the app running in less than 15 minutes. If anyone else needed the setup, they could just clone the repo and provision a virtual machine with Vagrant. It was this moment I realized that I messed up. My partners and I were using different operating systems even though the rest of our development environments were mostly the same.

Therein lies the problem. If we had used Vagrant or Docker, we would not have spent time wondering why our app didn’t always work on our local machines, and could have deployed our application faster. It is too late for CUNYCodes, but not too late for future projects.