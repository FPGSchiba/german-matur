FROM node:slim

WORKDIR /app

COPY package.json /app/package.json
COPY webpack.config.js /app/webpack.config.js
COPY src /app/src
COPY .babelrc /app/.babelrc
COPY public /app/public

RUN chmod 0777 /app

RUN npm install -g npm@9.1.2
RUN npm install --force

EXPOSE 8080

ENTRYPOINT [ "npm", "start" ]