import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

const PORT = process.env.MYSQLPORT as number | undefined

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.MYSQLHOST,
	port: PORT,
	username: process.env.MYSQLDATABASE,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})
