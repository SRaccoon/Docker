FROM node:12
ADD . /home/node
WORKDIR /home/node
RUN npm install
EXPOSE 3000
HEALTHCHECK --interval=5s --timeout=30s --start-period=5s --retries=3 CMD curl -f -X POST 'http://localhost:3000/checkStatus'
CMD node bin/www