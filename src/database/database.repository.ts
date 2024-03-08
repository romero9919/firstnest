import { DataSource } from "typeorm";
import { ConfigModule } from "@nestjs/config";

export const databaseProviders = [
    
    {

        provide: 'DATA_SOURCE',
        useFactory: async() => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: 3306,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: 'testdb',
                entities: [__dirname + '/../**/*.entity{.ts, .js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];