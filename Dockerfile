# use a node base image
FROM node:7-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install

# set maintainer
LABEL maintainer "saudjunaid96@gmail.com"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1
 


# tell docker what port to expose basicall this is a simple web app 
EXPOSE 8000
