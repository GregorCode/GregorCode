---
title: 'Enable specific ports in Firewalld and UFW (Ubuntu)'
author: 'Gregorys González'
date: '2022-01-22'
slug: 'habilitar-puertos-ubuntu'
---

Both Firewalld and UFW are firewalls that can configure iptables which are used to implement persistent network traffic rules.

To enable port 80 in **Firewalld**, the following commands must be executed:

```
$ sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
$ sudo firewall-cmd --reload
```

Normally UFW is disabled in Ubuntu so you should first enable UFW and then enable the port.

To enable port 80 in **UFW**, the following commands must be executed:

```
$ sudo ufw enable
$ sudo ufw allow 80/tcp
```

> **Note**: When enabling UFW, check if Firewalld is also enabled, since the two firewalls are enabled, both will be creating rules in the iptables and it is best to use only one, except on special occasions where you need to have more than one firewall enabled.
