import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'leal122',
  database: 'APIdeSOUZA'
})

export { conection }