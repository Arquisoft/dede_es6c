FROM node:16.13.1
LABEL org.opencontainers.image.source https://github.com/Arquisoft/dede_es6c
COPY . /app
WORKDIR /app
#Install the dependencies
RUN npm install

ARG API_URI="https://localhost:5000"
ENV REACT_APP_API_URI=$API_URI

#Create an optimized version of the webapp
CMD [ "npm", "start"]
