---
layout: page
title: Recipes
permalink: /recipes
order: 3
---

A few recipes I enjoy making. I hope you enjoy them too.

Some have come out of my own research and experimentation but many others have come with strong influence from elsewhere. I will try and attribute those responsible where I can remember.

{% for recipe in site.categories.recipe %}
<div style="padding: 5px; margin: 5px;">
    <h3><a href="{{ recipe.url }}">{{ recipe.title }}</a></h3>
    <p>{{ recipe.excerpt }}</p>
    <p>Serves: {{ recipe.serves }}</p>
<hr />
</div>
{% endfor %}
