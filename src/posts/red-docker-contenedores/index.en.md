---
title: 'Create a network in Docker where your containers can be hosted.'
author: 'Gregorys González'
date: '2022-01-12'
---

**Docker** allows us to create subnets to host the containers.

To create the network in docker we can use the following command:

```
$ sudo docker network create --subnet 10.10.0.0/16 mynet
```

We can then run a container on the created network, like this:

```
$ docker container run -d -p 8080:80 --network mynet --name web nginx
```

We can inspect the container using:

```
$ docker container inspect nginx
```

In one of the lines of the json returned by docker you can see that the ip belongs to the created network:

```
"IPAdress": "10.10.0.2",
```

To do it with docker-compose, each service must point to the previously created network (mynet) like this:

```
version: '3.4'
    services:
        web:
            image: jboss/wildfly
            ports:
                - 18080:8080
            networks:
                - mynet
        db:
            image: postgres:9.5.6
            ports:
                - 15432:5432
            networks:
                - mynet

networks:
    mynet:
        external:
            name: mynet
```
