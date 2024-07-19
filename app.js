const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.get('/set', (req, res) => {
    // การทำงานที่ไม่เกี่ยวข้องกับ Redis
    res.send('Value set without Redis');
});

app.get('/get', (req, res) => {
    // การทำงานที่ไม่เกี่ยวข้องกับ Redis
    res.send('Value retrieved without Redis');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
