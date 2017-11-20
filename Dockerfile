FROM node

MAINTAINER César Donini

RUN mkdir -p /usr/blue-hunter-server

WORKDIR /usr/blue-hunter-server

COPY package.json /usr/blue-hunter-server

RUN npm install

COPY . /usr/blue-hunter-server

RUN npm install -g typescript

EXPOSE 3000

CMD ["npm", "start"]