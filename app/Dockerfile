FROM node:15

WORKDIR /usr/src/app

RUN apt update && apt install wget -y

EXPOSE 3000

CMD [ "node", "index.js" ]