---
title: "Fedora 32 released this week! How do I get Docker working again?"
date: 2020-04-30T21:32:00-04:00
layout: layout.njk
---

Hey everyone, Fedora 32 was released earlier this week on the 28th. I like to have the latest software running on my computer so I upgraded as soon as I could, but I noticed something when I ran my next `dnf check-update`.
The Docker repositories were disabled, so I wouldn't get any updates!
The Docker devs didn't have a repo ready for Fedora 32.
Normally waiting for an update isn't a big deal but Fedora made a few changes recently and I wanted to write down how I came over them.

## cgroups

If you've been using Fedora for a while now, then this may be old news to you but starting with Fedora 31, Fedora now uses [CGroupsV2](https://fedoraproject.org/wiki/Changes/CGroupsV2#Modify_Fedora_31_to_use_CgroupsV2_by_default).
**CGroups** is what a lot of container solutions are built on top of, and version 2 brings a lot of
improvements, but Docker and other tools aren't yet compatible with this feature set yet,
so we need to switch back to the old version, Docker's documentation tells us to do the following:

[`sudo grubby --update-kernel=ALL --args="systemd.unified_cgroup_hierarchy=0"`](https://docs.docker.com/engine/install/fedora/#install-docker-engine)

Running the above code will revert us back to version 1 of **CGroups**, and we could continue on with following the rest of the Docker documentation but another change was made with **Fedora 32**.

## firewalld

Fedora ships with `firewalld` and in the latest release the backend for it was [switched from `iptables` to `nftables`](https://fedoraproject.org/wiki/Changes/firewalld_default_to_nftables#Detailed_Description).
So I did some searching around and found [this issue](https://github.com/docker/for-linux/issues/955) on GitHub.

There are some pretty detailed comments left by [Christian Korneck](https://github.com/docker/for-linux/issues/955#issuecomment-620932240) and [Alexandre](https://github.com/docker/for-linux/issues/955#issuecomment-621141128) that help us out.

Christian's comment is that we should make sure that Docker's network interface `docker0` is part of the trusted zone, and we can do that with the snippet provided:

```sh
firewall-cmd --permanent --zone=trusted --add-interface=docker0
firewall-cmd --reload
```

And Alexandre's comment tells us we need to do a little bit more:

```sh
firewall-cmd --get-zone-of-interface=enp1s0
   FedoraWorkstation

firewall-cmd --zone=FedoraWorkstation --add-masquerade --permanent

firewall-cmd --reload
```

In the above example, your network adapter may not match the one given, what I did was type:
`firewall-cmd --get-zone-of-interface=` and tap my Tab key until my shell auto-completed the
interface I needed because I did not remember how to get a list of network interfaces when I was doing this :P.
The second line tells us to enable masquerading permanently, so that our containers and
other private network stuff on our local machine can successfully communicate with the outside world. If you want to know more, you should read the `firewalld` [documentation](https://firewalld.org/documentation/), I'm not really the best person to explain this part.

The third line restarts the firewall. Now your existing Docker installation should work.

## Docker updates?

We'll still have to wait for the Fedora 32 repo to get set up, or you could try to grab an rpm from the current repos. I did find an interesting [thread](https://www.reddit.com/r/Fedora/comments/fyngbd/docker_on_fedora_32/fn14v2o/) on reddit while searching for answers.

>If you really want docker on Fedora 32, just grab `moby-engine` from the Fedora repos.

I couldn't find a straight answer right away about what `moby-engine` is, and it looks like you would
hear of it only if you heard about it from someone else, but it provides `docker`, and it sounds like
it is just upstream Docker depending on who you ask.
I found a blog post that explains this a [bit](https://www.mirantis.com/blog/ok-i-give-up-is-docker-now-moby-and-what-is-linuxkit/).
So I uninstalled Docker from my computer, removed the disabled repo, and installed `moby-engine`.
It provided `docker`, and when I ran `docker --version` I got `Docker version 19.03.8, build afacb8b`.

That looks good to me, but I didn't fully accept it until I did `dnf provides docker` and it confirmed that it was provided by the `moby-engine` package:

```
$ dnf provides docker
Last metadata expiration check: 1:12:42 ago on Thu 30 Apr 2020 09:28:35 PM EDT.
moby-engine-19.03.8-1.ce.gitafacb8b.fc32.x86_64 : The open-source application
                                                : container engine
Repo        : @System
Matched from:
Provide    : docker = 19.03.8-1.ce.gitafacb8b.fc32

moby-engine-19.03.8-1.ce.gitafacb8b.fc32.x86_64 : The open-source application
                                                : container engine
Repo        : fedora
Matched from:
Provide    : docker = 19.03.8-1.ce.gitafacb8b.fc32
```

From there you can install `docker-compose` and everything works as if nothing had changed.

I think this is really cool to know, and it also introduces me to the [Moby Project](https://github.com/moby/moby), so if I want to know what's new with Docker containers I know where to look.

I hope this post helped you get your environment fixed or taught you something new! If you want to reach out, I'm on Twitter: [@ajkhan_](https://twitter.com/ajkhan_).