FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm i -g gatsby-cli

RUN npm i

COPY . .

EXPOSE 8000

CMD gatsby develop -H 0.0.0.0