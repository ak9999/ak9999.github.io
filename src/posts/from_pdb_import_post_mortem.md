---
title: "Catching uncaught exceptions in Python"
date: 2019-06-10T13:01:38-04:00
layout: layout.njk
---

Now that I have my blog set up and it looks great, I'd like to tell you all
about how I was introduced to [post_mortem](https://docs.python.org/3/library/pdb.html#pdb.post_mortem).

I've been slowly working on and off on a CLI tool to query DNS records
because of an issue I found at work. Initially I didn't realize that this
had already been done until one of my friends had told me:

"Oh, you're implementing `dig`? Nice!"

Anyways, I had been using the [dnspython](https://github.com/rthalley/dnspython)
library to do this, but I was being very specific with my imports, which
meant the exception classes I needed were not being imported. For example,
in **dnspython** there is the `NoAnswer` exception class, which gets thrown
when the DNS response does not contain an answer to the question, such as:

"What are the TXT records of a given domain?" when the domain doesn't have
TXT records.

I could not catch this exception until I explicitly imported
it, but there were even more situations that I could not catch because I
just didn't know about them!

So I asked a friend for help, and they told me to try **pdb**. I don't use
pdb often, but I did this time and was still stuck, then my friend said to
try **post_mortem**, and to wrap it around the main function block.

I included here so you can see how easy it is:

```python
if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        from pdb import post_mortem
        post_mortem()
```

It is pretty simple, but it allowed me to climb up and down the stack and
find out what exceptions weren't being caught so that I could explicitly
import their respective classes. It really blew my mind to have such a
powerful tool, it must be new, right? Nope! It's been in Python since
Python 2.

Thanks for reading!

