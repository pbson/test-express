FROM node:20-alpine

WORKDIR /usr/src/app

ARG APP_VERSION=unknown
ENV APP_VERSION=$APP_VERSION

COPY package*.json ./
RUN npm install --production

COPY . ./

EXPOSE 3001
CMD ["node", "app.js"]
