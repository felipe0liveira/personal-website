FROM node:20.13.0-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

EXPOSE 3000

RUN yarn install

COPY . .

RUN yarn build

CMD yarn start
