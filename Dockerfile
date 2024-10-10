# เลือกใช้ Base Image ที่ต้องการ (ใช้ grafana/k6 ในที่นี้)
FROM grafana/k6

# คัดลอกไฟล์ที่จำเป็นไปยัง Docker Container
COPY k6-tests/test_with_redis.js /k6/scripts/test_with_redis.js
COPY k6-tests/test_without_redis.js /k6/scripts/test_without_redis.js
COPY k6-tests/test_with_rabbitmq.js /k6/scripts/test_with_rabbitmq.js
COPY k6-tests/test_with_redis_and_rabbitmq.js /k6/scripts/test_with_redis_and_rabbitmq.js
