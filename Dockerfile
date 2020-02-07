# use a node base image
FROM node:10-alpine

# set maintainer
LABEL maintainer "saudjunaid96@gmail.com"
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

#COPY --chown=node:node . .

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1
     
CMD [ "node", "main.js" ]

# tell docker what port to expose
EXPOSE 8000
