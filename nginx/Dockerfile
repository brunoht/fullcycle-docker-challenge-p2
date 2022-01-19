FROM nginx:latest

RUN apt update && apt install vim wget -y

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY default.conf /etc/nginx/conf.d/

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]