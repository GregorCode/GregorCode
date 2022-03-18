---
title: 'Most used commands in Docker.'
author: 'Gregorys González'
date: '2022-01-18'
---

**Commands to manage containers (Docker):**

Download a docker image:

```
$ docker pull nombre_imagen
```

List the containers:

```
$ docker ps
```

Start a container:

```
$ docker start id_contenedor
```

Stop a container in Up state:

```
$ docker stop id_contenedor
```

Delete a container with state down:

```
$ docker rm id_contenedor
```

Show all container networks:

```
$ docker networks ls
```

Show all the images we have downloaded:

```
$ docker images
```

Show all containers that are in Up, Down, Exited, etc:

```
$ docker ps –a
```

Show details of how many containers exist, Up, Down containers, memory, etc:

```
$ docker info
```

Filter by container name:

```
$ docker ps -a | grep nombre_contenedor
```

Show json with all container information:

```
$ docker inspect id_contenedor
```

Show container logs:

```
$ docker logs id_contenedor
```

Copy files inside a container:

```
$ docker cp backup.sql Nombre_Contenedor:/home/ggonzalez
```

Run commands inside a container:

```
$ docker exec -it id_contenedor sh
```

**Commands to manage containers (Docker-Compose):**

To execute these commands it is necessary to be positioned in the folder where the yml file is.

Raise all the containers specified in the yml file, all the tasks that docker does, logs, etc. will be shown on the console:

```
$ docker-compose up
```

Raise in the background all the containers specified in the yml file, it does not show the tasks that docker does, nor logs, etc:

```
$ docker-compose up –d
```

Restart all containers specified in the yml file:

```
$ docker-compose restart
```

Remove all containers specified in the yml file:

```
$ docker-compose down
```
