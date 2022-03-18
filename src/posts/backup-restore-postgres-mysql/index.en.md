---
title: 'Backup and Restore in plain text of a database in PostgreSQL or MySQL'
author: 'Gregorys González'
date: '2022-02-05'
---

Backups are of the utmost importance in any environment and even more so if we refer to Databases. Databases usually store very valuable information and which are in continuous change, this makes it essential to maintain a good Backup system, at this point is where postgresql with pg_dump and mysql with mysqldump come in.

Both pg_dump and mysqldump allow you to make a backup of a specific database from the Terminal with a simple instruction.

**POSTGRESQL:**

To make the database backup:

```
$ pg_dump -U postgres -d nombrebase > archivo.sql
```

To do the base restore:

```
$ psql -U postgres -d nombrebase < archivo.sql
```

**MYSQL:**

To make the database backup:

```
$ mysqldump -u usuario -h localhost 'nombrebase' > archivo.sql -p
```

To do the base restore:

```
$ mysql -u usuario -h localhost 'nombrebase' < archivo.sql -p
```
