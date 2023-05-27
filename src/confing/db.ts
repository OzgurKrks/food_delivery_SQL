import {Pool} from 'pg';
import * as dotenv from 'dotenv'
dotenv.config();
console.log(process.env.DB_USER)
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE
} = process.env

const pool = new Pool({
    user:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port:parseInt(DB_PORT || '5432'),
    database:DB_DATABASE
})

export default pool