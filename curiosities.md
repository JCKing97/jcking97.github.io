---
layout: page
title: Curiosities
permalink: /curiosities
order: 2
---

A place for me to write about things I find interesting. These posts may be wonders I have picked up from a book or discussions about technologies I am interested in or illustrations of my own experiences.

{% for curiosity in site.categories.curiosity %}
{% include curiosity.html curiosity=curiosity %}
{% endfor %}
