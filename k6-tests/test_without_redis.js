import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://localhost:3000/test-db');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
