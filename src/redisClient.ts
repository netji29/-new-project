import Redis from 'ioredis';

const redis = new Redis({
  host: 'redis',  // ชื่อบริการใน Docker Compose
  port: 6379
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

export default redis;
