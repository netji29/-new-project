import mysql from 'mysql2';

// สร้างการเชื่อมต่อ MySQL
const db = mysql.createConnection({
  host: 'mysql', // ชื่อของ MySQL ใน Docker Compose
  user: 'root',
  password: 'root',
  database: 'test_db',
});

// ใช้ async/await สำหรับการเชื่อมต่อ
async function connectToDB() {
  try {
    await db.promise().query('SELECT * FROM test_table');
    console.log('Connected to MySQL');
  } catch (err) {
    console.error('Error connecting to MySQL:', err);
  }
}

connectToDB();

export default db;
