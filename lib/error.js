"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
exports.ServiceError = ServiceError;
//# sourceMappingURL=error.js.map