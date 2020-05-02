---
layout: page
title: Curiosities
permalink: /curiosities
order: 2
---

A place for me to write about things I find interesting. These posts may be wonders I have picked up from a book or discussions about technologies I am interested in or illustrations of my own experiences.

{% for curiosity in site.categories.curiosity %}
<div style="padding: 5px; margin: 5px;">
    <h3><a href="{{ curiosity.url }}">{{ curiosity.title }}</a></h3>
    <p>{{ curiosity.excerpt }}</p>
<hr />
</div>
{% endfor %}
