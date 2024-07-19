# เลือกใช้ Base Image ที่ต้องการ (ใช้ grafana/k6 ในที่นี้)
FROM grafana/k6

# ติดตั้งโมดูล Redis จาก npm (ไม่จำเป็นในที่นี้)
# RUN npm install redis

# Copy ไฟล์ redis.js ที่คุณสร้างเองไปยัง Docker Container
COPY redis/redis.js /k6/scripts/redis.js

# Copy เทสสคริปต์ที่ต้องการใช้
COPY test_with_redis.js /k6/scripts/test_with_redis.js
COPY test_without_redis.js /k6/scripts/test_without_redis.js
