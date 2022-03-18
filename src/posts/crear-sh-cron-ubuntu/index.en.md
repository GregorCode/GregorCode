---
title: 'Create sh and run it with Cron every 5 minutes. Ubuntu'
author: 'Gregorys González'
date: '2022-02-12'
---

We will create a .sh file that will allow us to restart the Tomcat application server from time to time.

Source of RebootTomcat.sh file:

```
#!/bin/bash

Fecha=`date`
CantidadProcesos=$(ps aux | grep java | wc -l)

if (( CantidadProcesos >= 1 )); then
    echo "El proceso de tomcat esta arriba --- $Fecha"
else
    sudo /etc/init.d/tomcat restart
    echo "Reiniciando Servidor Tomcat --- $Fecha"
fi
```

Now we put this .sh file in the crontab, in Ubuntu this file is in /etc/crontab:

```
$ sudo vi /etc/crontab
```

We edit the file and add:

```
*/5 * * * * root /home/user/ReinicioTomcat.sh >> /var/log/TomcatCrontab.log
```

This .sh will run every 5 minutes and check if the tomcat java process is up, if not, Tomcat is restarted. I save the .sh output to the TomcatCrontab.log file to keep track of how many times tomcat has been restarted.

> **Note:** If it is not executed due to a permissions issue, change the permissions to the .sh, a common example can be:

```
sudo chmod 777 ReinicioTomcat.sh
```
