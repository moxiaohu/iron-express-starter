# Iron-express-starter

This is a starter project of iron-express [https://github.com/sfeir-open-source/iron-express](https://www.google.com)


## Project setup

```bash
npm install

npm run dev
```

## Set up Database (optional)

### 1 - Set up a postgresql db in local machine (optional)

```bash
# 1 - install docker-compose

# 2 - launch postgres image in docker
docker-compose up -d

# 3 - create db with name = "example" in postgres image
docker ps  # see all running containers
docker exec -it [container_id] bash  # enter postgres container bash
psql  # enter postgres terminal
create database example;  # create main db
# then exit db container 

# 4 - add following db config to .env

DATABASE_HOST="localhost"
DATABASE_USER="root"
DATABASE_PASSWORD="root"
DATABASE_NAME="example"
DATABASE_PORT="5432"

```

### 2 - Or if you want to connect to a postgres db instance on cloud (optional)

```bash
# just add the cloud db url to .env
DATABASE_URL="your_cloud_db_url"
```


### 3 - Config db orm lib to use the dbconfig file knexfile.js

```bash
# in index.js, add following code

const {db} = require('iron-express-orm');
...

app.locals.db = db;

# db config file is in root directory, named as knexfile.js
```

### 4 - init database tables (optional)
```bash
# 1 - create file: db_import.sql and put in to this path: resources/db
# 2 - execute iron-orm to execute sql command inside db_import.sql
npx iron-orm db:import
```

### 5 - execute db migrations
```bash
npx iron-orm db:migrate
```

### 6 - Launch project
```bash
yarn dev
```
