FROM node:alpine

WORKDIR /code
ADD . .

RUN yarn install --pure-lockfile --silent
EXPOSE 3000
CMD ["node", "start.js"]