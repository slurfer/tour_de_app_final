#!/bin/sh

mysqld &
echo 'waiting for mysql loads up (20s)'
sleep 10
echo 'waiting for mysql loads up (10s)'
sleep 10
mysql < init.sql
cd frontend
# npx cross-env PORT=80 npm run start &
cd ..
sleep 10
flask run --host=0.0.0.0