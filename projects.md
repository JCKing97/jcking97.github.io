---
layout: page
title: Projects
permalink: /projects
order: 1
---

{% for project in site.categories.project %}
<div style="padding: 5px; margin: 5px;">
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    <p>{{ project.excerpt }}</p>
<hr />
</div>
{% endfor %}
