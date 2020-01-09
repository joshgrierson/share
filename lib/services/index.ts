import { Redis } from "ioredis";

export abstract class Service<T> {
    protected domain: string;
    protected data: any;

    public constructor(protected tag: string, public schema: {[key: string]: any}) {}

    protected log(message: string): void {
        console.log("%s: %s", this.tag, message);
    }

    abstract async exec(payload: T, redis: Redis): Promise<any>;

    public validateSchema(entity: any): boolean {
        const keys: Array<string> = Object.keys(this.schema);
        const validate: Array<boolean> = [];

        keys.forEach(key => {
            if (entity[key] && typeof entity[key] === this.schema[key]) {
                validate.push(true);
            } else {
                validate.push(false);
            }
        });

        return validate.filter(v => v).length === keys.length;
    }

    protected redisSave(redis: Redis, data: any): void {
        redis.bgsave().then(saved => this.log(`${saved}\nRedis saving ['${data}']`));
    }

    public setDomain(domain: string): void {
        this.domain = domain;
    }

    public setData(...args: any): void {
        this.data = args;
    }
}