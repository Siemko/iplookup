FROM node:alpine

WORKDIR /code
ADD . .

RUN yarn install --pure-lockfile --silent
EXPOSE 8080
CMD ["node", "start.js"]
