---
layout: curiosity
category: curiosity
title: Leonhard Euler and the Seven Bridges of Königsberg
tags: ["Graph Theory", "Linked", "Book", "Barabási"]
excerpt_separator: <!-- more -->
---


<div class="row">
    <div class="col">
        <img src="{{ 'assets/img/koenigsberg_bridges.gif' | relative_url }}" alt="Seven Bridges of Königsberg"/>
    </div>
    <div class="col">
        I have recently been reading Linked by Albert-László Barabási which has reignited my interested in Graph Theory and Network Science. So I thought I'd give a basic introduction to Graph Theory by describing the problem and mathematician's brilliance that led to the field. This question posed in this problem is: in the historical city of Königsberg, when there were just 7 bridges, was it possible to devise a walk such that you crossed all bridges once and only once.
    </div>
</div> 

<!-- more -->

## Problem Abstraction

A key tool in a mathematician's toolbox is abstraction. Leonhard Euler was a master of this and it was the abstraction he devised that was the truly revolutionary part of his proof for this problem. To solve the problem it did not matter how you moved across a land mass, only how you moved across the bridges. Thus, Euler abstracted each of the four land masses as a node. The bridges are abstracted as links and can be used to move between the nodes. Each link has exactly two endpoints (nodes) and a node can have any number of links connected to it.

A walk can then be described as a sequence of nodes and links (A, 'a', B, .., 'e', F) such that any link in the solution has endpoints which are the nodes before it and after it. In the case of link 'a' it's endpoints are A and B. For this problem, we have four nodes A, B, C and D, and seven links 'a' (A-B), 'b' (A-B), 'c' (A-C), 'd' (A-C), 'e' (A-D), 'f' (B-D) and 'g' (C-D). The links in this graph do not have a direction, meaning that we can pass over 'a' from A to B and from B to A. To solve the problem, Euler proved that there is no walk such that every link in the graph is visited exactly once.

See the animation above for a graphical display of the abstraction.

## Problem Approach

Now we have our abstraction set up we need to know how to approach the problem. We could simply list all the possible walks and prove that none of them are an Eulerian path (a path where each link is visited once and only once). However, this would take a long time to do for larger graphs and so did not scale well as Euler would like (and is not as elegant as Euler's actual solution). 

Say we only travel on one link 'a', this means the node A was either the start or end point. Similarly, if links 'a', 'b' and 'c' are travelled once, A is visited exactly twice. In this way, the first property of a graph was discovered. The property is: for any odd number of links (n) if they all have an endpoint in a node (our A) and are travelled once, it means that A is visited exactly the number of links plus one and divided by two ((n + 1) / 2).

Since in our graph there are exactly five links leading to A that means it must be visited 3 times to find an Eulerian path. B, C and D all have three links so they must be visited 2 times each. Therefore, there must be 3 + 2 + 2 + 2 = 9 visits in total in a path that is a solution. However, we have exactly 7 links. Euler also explains that if we have 7 bridges that need crossing, then in the path we must naturally have visited 8 land masses as there must be a start and end point (e.g. (A, a, B, b, C, d, D) is a path and has 3 bridges and 4 land masses in it). 

The requirements of the land masses is that we make 9 visits in total to them, but the requirements of the path is that we only visit 8 of them. It is impossible to do both and thus we cannot find a solution. This is a proof by contradiction. Euler then went on to describe a further property of the graph from this proof. Namely that a graph has an Eulerian path if and only if only there are only two or zero nodes with an odd number of attached links (the number of links that are attached to a node is also known as the degree of the node, for example in our graph node A has a degree of five).

## Importance

Though this problem seems like an odd curiosity it has had widespread importance throughout all of science. The formation of the problem in the way that Euler described it laid the foundations for Graph Theory and Network Science. This powerful abstraction has allowed bioinformaticians to model interactions between proteins and sociologists to understand the structure of our social networks. Further to this, Euler was the first to use graphs to prove theorems and the first to stipulate properties of graphs that enable us to answer questions about our world, often questions with more importance than the mere curiosity of the Seven Bridges of Königsberg.
