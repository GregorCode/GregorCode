---
title: 'FTP with Docker-compose'
author: 'Gregorys González'
date: '2022-02-13'
slug: 'ftp-con-docker-compose'
---

**FTP (File Transfer Protocol)** is a network protocol for transferring files between two computers connected to a TCP (Transmission Control Protocol) network, it is based on client-server architecture.

This protocol allows a computer (client) to connect to a server to download files from it or to send files to it, regardless of the operating system that both computers are using.

To create an FTP with Docker-compose we can do it as follows:

**docker-compose.yml:**

```
version: '3'

services:
  ftpd_server:
    image: stilliard/pure-ftpd
    container_name: 'FTP_DOCKER'
    ports:
      - "21:21"
      - "30000-30009:30000-30009"
    volumes: #recuerde reemplazar /folder_on_disk/ con la ruta donde desea almacenar los archivos en la máquina host
      - "/folder_on_disk/data:/home/username/data"
      - "/folder_on_disk/passwd:/etc/pure-ftpd/passwd"
      # descomentar para ssl/tls, visita https://github.com/stilliard/docker-pure-ftpd#tls
      # - "/folder_on_disk/ssl:/etc/ssl/private/"
   enviroment:
      PUBLICHOST: "localhost"
      FTP_MAX_CLIENTS: 50
      FTP_USER_NAME: admin
      FTP_USER_PASS: admin
      FTP_USER_HOME: /home/username
      # tambien para ssl/tls:
      # ADDED_FLAGS: "--tls=2"
    restart: always
```

Lift the service with:

```
docker-compose up -d
```

then we use the FileZilla program to connect to the FTP server.

You can also visit the service in the file explorer or any browser:

```
ftp://localhost:21/data/
```
