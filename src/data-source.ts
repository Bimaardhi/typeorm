import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { Thread } from "./entities/Thread"
import { AddThreadSchema1717513833725 } from "./migrations/1717513833725-add-thread-schema"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1208",
    database: "mycircle",
    synchronize: true,
    logging: false,
    entities: [User, Thread],
    migrations: [AddThreadSchema1717513833725],
    subscribers: [],
})

// "src/entities/**/*.ts"
