---
layout: curiosity
category: curiosity
title: Coronavirus as a Problem in Network Science
tags: ["Graph Theory", "Linked", "Book", "Barabási"]
excerpt_separator: <!-- more -->
---

While reading Linked by Albert-László Barabási it occurred to me that there are a number of parts of the Coronavirus outbreak that are being modelled as problems in network science by those tackling the issue. From Bioinformaticians aiding in drug and vaccine discovery, to those modelling the spread and advocating social distancing, the science has had impacts deep into the heart of tackling this worldwide issue.

<!-- more -->

I previously took an interest in Network Science during the Algorithms and Complexity, Bioinformatics and Agent-based systems modules of my computer science degree. Barabási is famous for his work on Network Science introducing the scale-free network concept in his paper ["(the) Emergence of scaling in random networks"](https://science.sciencemag.org/content/286/5439/509.full) as has been influential in spreading knowledge of the science, much of the knowledge I am displaying here is attributed to his paper and books. This new outbreak is another example of why the science is so important to the modern world and I thought I would use it to describe some key concepts and ideas of Network Science.

## Basics of Graph Theory

Network science was born with the legendary mathemtician Leonhard Euler solving the Seven Bridges of Königsberg problem by modelling the problem with distinct pieces of land as nodes and the bridges as links. <!-- find a picture --> Nodes and links are the most fundamental ideas of graph theory and can represent many concepts making the theory an incredibly powerful tool for describing and analysing problems.

!["Seven Bridges of Königsberg]({{ 'assets/img/koenigsberg_bridges.gif' | relative_url }})

<!-- talk about the seven bridges shortly -->

### Modelling the Spread of Coronavirus

For modelling the spread of the virus the nodes represent people and links represent physical contact between the people. 
