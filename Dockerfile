FROM node:latest
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app/
RUN yarn global add foreman
EXPOSE 3000
ENTRYPOINT /bin/bash
