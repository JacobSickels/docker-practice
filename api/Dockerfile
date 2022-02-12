FROM node:16-alpine as base

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY ./ ./

ENV NODE_PATH=./build

RUN npm run build

EXPOSE 5000
CMD [ "node", "./build/src/index.js", "&&", "npx", "prisma", "migrate", "deploy" ]
