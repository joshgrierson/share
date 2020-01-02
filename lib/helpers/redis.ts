import Redis, { RedisOptions } from "ioredis";
import { RedisEventType } from "../models";

export default async function setupRedis(options: RedisOptions): Promise<Redis.Redis> {
    const redis: Redis.Redis = new Redis(options);

    const handler: (type: RedisEventType, err?: string) => void = (type: RedisEventType, err?: any) => {
        if (type === RedisEventType.error) {
            console.error(`Redis error occurred: ${err}`);
        } else if (type === RedisEventType.connect) {
            console.log(`Redis connected to: ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
        } else if (type === RedisEventType.reconnecting) {
            console.log(`Redis reconnecting to server: ${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`);
        }
    }

    redis.on("connect", () => handler(RedisEventType.connect));
    redis.on("error", (err) => handler(RedisEventType.error, err));
    redis.on("reconnecting", () => handler(RedisEventType.reconnecting));

    return redis;
}