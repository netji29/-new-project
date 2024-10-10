import express from 'express';
import redis from './redisClient';
import connectRabbitMQ from './rabbitmqClient';
import db from './db';

const app = express();
const port = 3000;

// เชื่อมต่อ Redis
redis.get('some-key', (err, result) => {
  if (err) {
    console.error('Redis error:', err);
  } else {
    console.log('Redis result:', result);
  }
});

// เชื่อมต่อ RabbitMQ
async function connectToRabbitMQ() {
  try {
    const channel = await connectRabbitMQ();
    console.log('RabbitMQ channel created');
  } catch (err) {
    console.error('Error connecting to RabbitMQ:', err);
  }
}

connectToRabbitMQ();

// เชื่อมต่อ MySQL
async function connectToDB() {
  try {
    const results = await db.query('SELECT * FROM test_table');
    console.log('MySQL query results:', results);
  } catch (err) {
    console.error('MySQL query error:', err);
  }
}

connectToDB();

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
