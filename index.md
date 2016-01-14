---
layout: default
class: hide-lists
---

## Recent work

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}): *{{post.description}}*{% endfor %}

## Knowledge

- *Back-end:* PHP / MySQL / Redis / NodeJS
- *Server administration:* Nginx / Ansible
- *Front-end:* HTML / JS / Sass
- *Version control:* Git / Mercurial
- *Development tools:* Grunt tasks / Composer packages  / Yeoman generators
- *Project management:* Contracts / Client meetings / Time management

## Education

- *2015 - Current:* HeathWallace (Placement JavaScript developer)
- *2013 - 2015:* University of Reading (Computer Science)
- *2011 - 2013:* Highdown Sixth Form Centre (Computing)

## Elsewhere

{% for social in site.data.social %}
- [{{ social.name }}]({{ social.url }}){:target="_blank"}{% endfor %}
