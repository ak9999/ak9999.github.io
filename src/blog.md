---
title: Posts
layout: layout.njk
---

## All Posts

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}