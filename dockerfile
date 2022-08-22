FROM node:alpine
COPy . /
WORKDIR /
CMD node main.js