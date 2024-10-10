"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const db = promise_1.default.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'test_db',
});
exports.default = db;
