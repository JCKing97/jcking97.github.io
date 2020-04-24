---
layout: curiosity
category: curiosity
title: Leonhard Euler and the Seven Bridges of Königsberg
tags: ["Graph Theory", "Linked", "Book", "Barabási"]
excerpt_separator: <!-- more -->
---

I have recently been reading Linked by Albert-László Barabási which has reignited my interested in Graph Theory and Network Science. So I thought I'd give a basic introduction to Graph Theory by describing the problem and mathematician's brilliance that led to the field. This question posed in this problem is: in the historical city of Königsberg, when there were just 7 bridges, was it possible to devise a walk such that you crossed all bridges once and only once (also known a an Eulerian path).

<!-- more -->

## Problem Abstraction

A key tool in a mathematician's toolbox is abstraction. Euler was a master of this and it was this abstraction that was the truly revolutionary part of his proof for this problem. To solve the problem it did not matter how you moved across a land mass, only how you moved across the bridges. Thus, Euler abstracted the four land masses to each be a node (or sometimes called a vertex) at which an individual can be present at a step in the proof and the bridges to be links (sometimes known as edges). Each link has exactly two endpoints (nodes) and a node can have any number of links connected to it.

!["Seven Bridges of Königsberg Graph Transformation]({{ 'assets/img/koenigsberg_bridges.gif' | relative_url }})

A walk can then be described as a sequence of nodes and edges (A, a, B, .., e, F) such that any edge in the solution has endpoints which are the nodes before it and after it, in the case of edge a it's endpoints are A and B. For this problem, we have nodes A, B, C and D, and edges a (A-B), b (A-B), c (A-C), d (A-C), e (A-D), f (B-D) and g (C-D). The edges in this graph do not have a direction. To solve the problem Euler proved that there is no walk such that every edge in the graph is visited exactly once.

## Problem Approach

Now we have our abstraction set up we need to know how to approach the problem. We could simply list all the possible walks and prove that none of them are an Eulerian path but this does not scale well and did not generalise as Euler would like. Say we only travel on one edge a, this means that the land mass A was either the start or end point. Similarly if bridges a, b and c are travelled once A is visited exactly twice. In this way, the first property of nodes in a graph was discovered. The property is: for any odd number of edges (n) if they all have an endpoint in node A and are travelled once it means that A is visited exactly the number of edges plus one and divided by two ((n + 1) / 2).

Since in our graph there are exactly five edges leading to A that means it must be visited 3 times. B, C and D all have three edges so they must be visited 2 times each. Therefore, there must be 3 + 2 + 2 + 2 = 9 visits in total in a path that is a solution. However, we have exactly 7 bridges. Euler also explains that if we have 7 bridges that need crossing, then in the path there must naturally be 8 capital letters as there must be a start and end point (e.g. (A, a, B, b, C, d, D) is a path and has 3 bridges and 4 land masses in it). 

The requirements of the land masses is that we make 9 visits in total to them, but the requirements of the path is that we only visit 8 of them. It is impossible to do both and thus we have found a proof by contradiction. Euler then went on to describe a further property of the graph from this proof. Namely that a graph has an Eulerian path if and only if only there are only two or zero nodes with an odd number of attached links (the number of links that are attached to a node is also known as the degree of the node, for example in our graph node A has a degree of five).

## Importance

Though this problem seems like an oddity it has had widespread importance throughout all of science. The formation of the problem in the way that Euler described it laid the foundations for Graph Theory and Network Science. This powerful abstraction has allowed bioinformaticians to model interactions between proteins and sociologists to understand the structure of our social networks. Further to this, Euler was the first to use graphs to prove theorems and the first to stipulate properties of graphs that enable us to answer questions about our world, often questions with more importance than the mere curiosity of the Seven Bridges of Königsberg.