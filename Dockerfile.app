# ใช้ base image ของ k6
FROM grafana/k6

# คัดลอกไฟล์สคริปต์ทดสอบจากโฟลเดอร์ k6-tests ไปยัง container
COPY k6-tests/test_with_redis.js /k6/scripts/test_with_redis.js
COPY k6-tests/test_without_redis.js /k6/scripts/test_without_redis.js
COPY k6-tests/test_with_rabbitmq.js /k6/scripts/test_with_rabbitmq.js
COPY k6-tests/test_with_redis_and_rabbitmq.js /k6/scripts/test_with_redis_and_rabbitmq.js

# คำสั่งที่ใช้ในการรัน k6 สำหรับทดสอบ
CMD ["k6", "run", "/k6/scripts/test_with_redis.js"]
