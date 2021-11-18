FROM node:14-alpine

WORKDIR /app
ENV PORT $PORT

COPY  . .

RUN npm i

CMD [ "npm", "start" ]
