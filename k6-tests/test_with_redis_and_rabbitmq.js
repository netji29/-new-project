import { check } from 'k6';
import http from 'k6/http';

export default function () {
  let res = http.get('http://localhost:3000/test-redis');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });

  res = http.get('http://localhost:3000/test-rabbitmq');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
