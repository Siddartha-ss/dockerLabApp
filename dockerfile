FROM node:alpine
COPY . /
WORKDIR /
CMD node main.js