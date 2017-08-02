---
layout: default
class: hide-lists
---

## Recent work

{% for post in site.posts %}
- [{{ post.title }}]({{ post.redirect | default: post.url }}): *{{post.description}}*{% endfor %}

## Knowledge

- *Back-end:* PHP / MySQL / Redis / NodeJS
- *Server administration:* Nginx / Ansible
- *Front-end:* HTML / JS / Sass
- *Version control:* Git / Mercurial
- *Development tools:* Grunt tasks / Composer packages  / Yeoman generators
- *Project management:* Contracts / Client meetings / Time management

## History

- *2013 - Present:* University of Reading (Computer Science)
- *2015 - 2016:* HeathWallace (Placement JavaScript developer)
- *2011 - 2013:* Highdown Sixth Form Centre (Computing)

## Elsewhere

{% for social in site.data.social %}
- [{{ social.name }}]({{ social.url }}){:target="_blank"}{% endfor %}
