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
const ioredis_1 = __importDefault(require("ioredis"));
const models_1 = require("../models");
function setupRedis(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const redis = new ioredis_1.default(options);
        const handler = (type, err) => {
            if (type === models_1.RedisEventType.error) {
                console.error(`Redis error occurred: ${err}`);
            }
            else if (type === models_1.RedisEventType.connect) {
                console.log(`Redis connected to: ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
            }
            else if (type === models_1.RedisEventType.reconnecting) {
                console.log(`Redis reconnecting to server: ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
            }
        };
        redis.on("connect", () => handler(models_1.RedisEventType.connect));
        redis.on("error", (err) => handler(models_1.RedisEventType.error, err));
        redis.on("reconnecting", () => handler(models_1.RedisEventType.reconnecting));
        return redis;
    });
}
exports.default = setupRedis;
//# sourceMappingURL=redis.js.map