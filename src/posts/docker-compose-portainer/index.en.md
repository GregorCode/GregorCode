---
title: 'Docker compose for Portainer'
author: 'Gregorys González'
date: '2022-01-29'
slug: 'docker-compose-portainer'
---

**Portainer** is a graphical interface from which you can manage and work with Docker containers in a much more intuitive and simple way. The GUI is web-based and cross-platform. It also allows us to manage containers remotely, locally, or work with containers on other machines or servers.

To install it on Docker with Docker compose:

```
version: '3'

services:
  portainer:
    image: portainer/portainer:latest
    container_name: Portainer
    command: -H unix:///var/run/docker.sock
    restart: always
    ports:
      - 9876:9000
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./portainer_data:/data

volumes:
  portainer_data:
```
