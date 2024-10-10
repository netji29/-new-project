import express from 'express';
import redis from './redisClient';
import connectRabbitMQ from './rabbitmqClient';
import db from './db';

const app = express();
const port = 3000;

// ตรวจสอบการเชื่อมต่อ Redis
redis.get('some-key', (err, result) => {
  if (err) {
    console.error('Redis error:', err);
  } else {
    console.log('Redis result:', result);
  }
});

// เชื่อมต่อ RabbitMQ
connectRabbitMQ().then(channel => {
  console.log('RabbitMQ channel created');
});

// เชื่อมต่อ MySQL
db.query('SELECT * FROM test_table', (err, results) => {
  if (err) {
    console.error('MySQL query error:', err);
  } else {
    console.log('MySQL query results:', results);
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
