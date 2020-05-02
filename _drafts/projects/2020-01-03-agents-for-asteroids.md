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

Currently, we only have the capability for the user to control the ship, but the sofware has been built with the idea of adding an agent. We are, at the moment, working on building the infrastructure for an agent to play such as percepts, actions and agent control of the ship.

The aim is to build the system so we can add different forms of percepts and various agent strategies to play the game. Once we have reached this point the developing of agent strategies to play the game begins. We are hoping to try out some basic reactive strategies, reinforcement learning strategies and a few others.

Future ideas include having multiple agents play the game together. These agents will use communication protocols to coordinate their actions in order to enhance both the team and their individual points score

<img src="{{ 'assets/img/asteroids_splash_screen.png' | relative_url }}" alt="Game menu screen" style="max-width: 40%; display: block; margin-left: auto; margin-right: auto;" />
