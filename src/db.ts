import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'mysql',  // ชื่อบริการใน Docker Compose
  user: 'root',
  password: 'root',
  database: 'test_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

export default db;
