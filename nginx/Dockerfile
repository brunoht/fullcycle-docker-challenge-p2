FROM nginx:latest

RUN apt update && apt install vim -y

COPY default.conf /etc/nginx/conf.d/

ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]