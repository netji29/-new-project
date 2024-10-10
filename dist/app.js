"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redisClient_1 = __importDefault(require("./redisClient"));
const rabbitmqClient_1 = __importDefault(require("./rabbitmqClient"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/test-redis', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield redisClient_1.default.set('test', 'hello world');
    const result = yield redisClient_1.default.get('test');
    res.send(`Redis result: ${result}`);
}));
app.get('/test-rabbitmq', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const channel = yield (0, rabbitmqClient_1.default)();
    const queue = 'task_queue';
    channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from('Hello RabbitMQ'));
    res.send('Message sent to RabbitMQ');
}));
app.get('/test-db', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.default.execute('SELECT * FROM users');
    res.json(rows);
}));
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
