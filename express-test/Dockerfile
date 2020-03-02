FROM node:8

RUN apt-get update \
        && apt-get install -y --no-install-recommends \
                postgresql-client \
        && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
