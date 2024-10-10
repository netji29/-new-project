import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://app:3000/test-db');  // เปลี่ยนจาก localhost เป็น app
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
