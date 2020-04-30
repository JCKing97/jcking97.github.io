---
layout: new_default
title: Recipes
permalink: /recipes
order: 3
---

A few recipes I enjoy making. I hope you enjoy them too.

Some have come out of my own research and experimentation but many others have come with strong influence from elsewhere. I will try and attribute those responsible where I can remember.

{% for recipe in site.categories.recipe %}
{% include recipe.html recipe=recipe %}
{% endfor %}
