---
layout: page
title: Projects
permalink: /projects
order: 1
---

{% for project in site.categories.project %}
{% include project.html project=project %}
{% endfor %}
