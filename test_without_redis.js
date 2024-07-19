import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
  scenarios: {
    heavy_load: {
      executor: 'constant-arrival-rate',
      rate: 50, // จำนวน VUs ที่เพิ่มเข้ามาต่อวินาที
      timeUnit: '1s', // ระยะเวลาที่จะเพิ่ม VUs เข้ามา
      duration: '5m', // ระยะเวลาทั้งหมดที่ทดสอบ
      preAllocatedVUs: 50, // จำนวน VUs ที่จะใช้ร่วมกับการทดสอบ
      maxVUs: 500, // จำนวน VUs สูงสุดที่จะเปิดใช้งาน
    },
  },
};

export default function () {
  let setRes = http.get('http://localhost:3000/set');
  check(setRes, { 'status is 200': (r) => r.status === 200 });
  if (setRes.status !== 200) {
    console.log('Set request failed:', setRes.status, setRes.body);
  }

  let getRes = http.get('http://localhost:3000/get');
  check(getRes, { 'status is 200': (r) => r.status === 200 });
  if (getRes.status !== 200) {
    console.log('Get request failed:', getRes.status, getRes.body);
  }

  sleep(1);
}
