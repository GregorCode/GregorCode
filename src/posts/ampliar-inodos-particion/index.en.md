---
title: 'Expand the number of inodes in a partition. Ubuntu'
author: 'Gregorys González'
date: '2022-02-11'
slug: 'ampliar-inodos-particion'
---

At my work, we have a QA server where we had created a partition so that Docker could store all its meta-data there, over time, after so many application deployments and file uploads to the server, we ran out of availability of inodes. An inode stores information about a file or directory. Each file is identified by an inode number. This number is unique within the entire file system. If a partition runs out of available inodes, no new files will be allowed to be created on the partition.

To solve the problem, what I did was format the partition by placing a greater number of inodes, here are the steps I did in Ubuntu 20.04.1 LTS (Focal Fossa):

> **Note**: make a backup of the partition, it is always important to make a backup before touching the partitions in any operating system.

List all mount points:

```
sudo fdisk -l
```

Identify which is the partition that ran out of inodes and we looked at the size of the inodes that were allowed, in our case the partition only allowed 6 million inodes:

```
sudo tune2fs -l /dev/sdb1 | grep Inode
```

Unmount the partition:

```
sudo umount /dev/sdb1
```

Change the number of inodes, in this case I will expand it to 50 million inodes:

```
sudo mkfs.ext4 -N 50000000 -I 256 /dev/sdb1
```

Mount the partition again, in my case:

```
sudo mount /dev/sdb1 /DOCKER
```

Let's see if the new configuration fits:

```
df -ih
```
