# Go Barber backend
Backend of barber shop application

## Setup

### Create docker container to run postgres

```docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres```

In Dbeaver/terminal connect to postgres running in `gostack_postgres` container `(password = docker)`, and create database with name `gostack_gobarber`

### Create docker container to run mongoDB
This project uses MongoDB to store the notifications sent in application

```docker run --name mongodb -p 27017:27017 -d -t mongo```

### Download dependencies

```yarn install```

### Setup orm

Rename the file `ormconfig.example.json` to `ormconfig.json`. Run:

```yarn typeorm migration:run```

If you created your databases with another configuration, you have to update this file. 