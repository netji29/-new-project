import Redis from 'ioredis';

// สร้างการเชื่อมต่อ Redis
const redis = new Redis({
  host: 'redis', // ชื่อของ Redis container จาก Docker Compose
  port: 6379,    // พอร์ตที่ Redis ใช้งาน
});

// เมื่อเชื่อมต่อ Redis สำเร็จ
redis.on('connect', () => {
  console.log('Connected to Redis');
});

// เมื่อเกิดข้อผิดพลาดในการเชื่อมต่อ Redis
redis.on('error', (err) => {
  console.error('Error connecting to Redis:', err);
});

// ทดสอบการทำงานของ Redis (ตัวอย่างการเซ็ตและดึงข้อมูล)
redis.set('some-key', 'some-value', (err, result) => {
  if (err) {
    console.error('Error setting key in Redis:', err);
    return;
  }
  console.log('Set value in Redis:', result);

  redis.get('some-key', (err, value) => {
    if (err) {
      console.error('Error getting key from Redis:', err);
      return;
    }
    console.log('Get value from Redis:', value); // ค่าควรจะเป็น "some-value"
  });
});

export default redis;
