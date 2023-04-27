import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const PORT = process.env.MYSQLPORT as number | undefined

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: 'lucas@98623457',
	database: 'rr7',
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
