FROM mysql:latest

ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword
ENV MYSQL_ROOT_PASSWORD=ahoj

COPY local.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]