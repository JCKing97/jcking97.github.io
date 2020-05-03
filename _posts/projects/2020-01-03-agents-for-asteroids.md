---
layout: project
category: project
title: Agents for Asteroids
tags: ["AI", "autonomy-lab"]
excerpt_separator: <!-- more -->
---

<div class="row">
    <div class="col">
        <img src="{{ 'assets/img/asteroids_in_game.png' | relative_url }}" alt="Ship fighting for life against asteroids" style="max-width: 50%;" />
    </div>
    <div class="col">
        My final year project at university focused on the agent-based systems side of AI. Me and my friend Fabio who was on a similar course to me at Royal Holloway wanted a platform to experiment with some AI concepts and ideas. So we created the <a href="https://github.com/autonomy-lab">autonomy-lab</a>. As a first project we wanted to develop a game where agents had to deliberate and act in a dynamic situation bound to some physical laws. The game Asteroids seemed a suitable target.
    </div>
</div>

<!-- more -->

The first step was to create the game itself. We wanted to keep it as simple and clean as possible, while making it cross-platform and smooth to play. The front end is based in pyglet which makes user interface event handling easy and gives us the use of simple OpenGL graphics. We then built a game loop and the game entities with basic physics and maths constructs such as collision handling, the equation of a circle and a firing mechanic.

To install and run the game see the instructions on the GitHub hosted repository: <a href="https://github.com/autonomy-lab/Agents4Asteroids">Agents4Asteroids</a>.

Currently, there are 3 types of agents: UserAgent (A keyboard controlled agent), DumbAgent (Spins around and shoots) and ReactiveAgent (Calculates the nearest asteroid, turns towards it and shoots). The aim is to now add more interesting agent strategies such as reinforcement learning agents and more reactive agents, and different perceptions (maybe try and force the agent to use object detection in an image to recognise asteroids).

I am also aiming to implement some features to make the game more interesting such as limiting firing speed.

Future ideas include having multiple agents play the game together. These agents will use communication protocols to coordinate their actions in order to enhance both the team and their individual points score. These agents could compete in a competition like scenario to find the best strategy.

<img src="{{ 'assets/img/asteroids_splash_screen.png' | relative_url }}" alt="Game menu screen" style="max-width: 40%; display: block; margin-left: auto; margin-right: auto;" />
