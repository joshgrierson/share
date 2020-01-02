"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor(tag, schema) {
        this.tag = tag;
        this.schema = schema;
    }
    log(message) {
        console.log("%s: %s", this.tag, message);
    }
    validateSchema(entity) {
        const keys = Object.keys(this.schema);
        const validate = [];
        keys.forEach(key => {
            if (entity[key] && typeof entity[key] === this.schema[key]) {
                validate.push(true);
            }
            else {
                validate.push(false);
            }
        });
        return validate.filter(v => v).length === keys.length;
    }
    redisSave(redis, data) {
        redis.bgsave().then(saved => this.log(`${saved}\nRedis saving ['${data}']`));
    }
    setDomain(domain) {
        this.domain = domain;
    }
    setData(...args) {
        this.data = args;
    }
}
exports.Service = Service;
//# sourceMappingURL=index.js.map