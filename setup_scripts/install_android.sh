#!/bin/sh
mkdir sync2App
git clone https://github.com/sync2App/sync2Core sync2App
cd sync2App
pkg install nodejs rsync ssh 
sh start_android.sh 
