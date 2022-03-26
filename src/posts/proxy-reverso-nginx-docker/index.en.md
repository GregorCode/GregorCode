---
title: 'Create reverse proxy between Nginx and Tomcat with Docker'
author: 'Gregorys González'
date: '2022-02-10'
slug: 'proxy-reverso-nginx-docker'
---

Web applications developed in Java are deployed in a servlet container or an application server such as Tomcat or Wildfly. In many cases, so that users can access the applications deployed on these servers, a web server such as Nginx or Apache is configured with The objective is to carry out some security tasks, load balancing, redirections, force the use of the HTTPS protocol, among others.

One way to have these services running on the same server is to use Docker and Docker compose, first we create a file called Docker-compose.yml and we will define 2 services, one for Tomcat and one for Nginx:

```
version: '3'

services:
  tomcat:
    image: tomcat
    container_name: "Tomcat"
    restart: always

  nginx:
    image: nginx:alpine
    container_name: "Nginx"
    volumes:
      - ./conf/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    links:
      - tomcat
    ports:
      - "80:80"
    restart: always
```

In the tomcat service I don't expose any ports, Docker will automatically expose port 8080, which is where Tomcat normally listens.

For Nginx to work as a reverse proxy we will create an nginx.conf file where we will add the proxy_pass command which allows redirecting from the web server (Nginx) to the application server (Tomcat):

```
upstream tomcat {
        server tomcat:8080;
}

server {
        listen 80;

        location / {
                proxy_pass http://tomcat;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Proto https;
        }
}
```

To pick up the services:

```
$ docker-compose up -d
```

Visit localhost:80 and you will see how the reverse proxy will redirect to Tomcat.
