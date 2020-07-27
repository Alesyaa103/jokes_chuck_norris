FROM node:12.17.0

RUN npm i -g pm2
COPY build ./build
COPY server.js ./
COPY package*.json ./
RUN npm install

CMD ["node", "server.js"]
EXPOSE 8082