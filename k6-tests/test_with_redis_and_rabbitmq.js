import { check } from 'k6';
import http from 'k6/http';

export default function () {
  let res = http.get('http://app:3000/test-redis');  // เปลี่ยนจาก localhost เป็น app
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  res = http.get('http://app:3000/test-rabbitmq');  // เปลี่ยนจาก localhost เป็น app
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
