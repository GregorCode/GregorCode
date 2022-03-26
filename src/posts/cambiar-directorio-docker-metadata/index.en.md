---
title: 'Change the default directory where Docker stores its metadata in Ubuntu.'
author: 'Gregorys González'
date: '2022-01-15'
slug: 'cambiar-directorio-docker-metadata'
---

To change the directory where **Docker** saves its metadata, you must create a file called daemon.json which allows you to configure the Docker daemon. The file must be in the path /etc/docker/ if the file is not found it must be created.

In the json file we must add the following:

```
{
    "data-root": "/home/user/docker/data"
}
```

With this we are telling the Docker daemon to save all its metadata (images, networks, volumes, containers, etc.) in the directory: **/home/user/docker/data**

It should be noted that the directory may be on a different partition than where the operating system is installed.

Finally, Docker must be restarted with:

```
$ sudo systemctl restart docker
```
