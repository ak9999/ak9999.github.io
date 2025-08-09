---
title: AJ's Blog
layout: layout.njk
---

### Welcome to my blog! Here are the latest posts:

{% for post in collections.recentPosts %}
<article style="margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eee;">
  <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
  <time style="color: #666; font-size: 0.9rem;">{{ post.date | date: "%B %d, %Y" }}</time>
  {% if post.data.excerpt %}
    <p style="margin-top: 0.5rem;">{{ post.data.excerpt }}</p>
  {% endif %}
</article>
{% endfor %}

<p><a href="/blog/">View all posts →</a></p>