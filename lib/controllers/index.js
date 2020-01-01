"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class Controller {
    constructor(path, services, service, res) {
        this.path = path;
        this.services = services;
        this.service = service;
        this.res = res;
    }
    isService() {
        return this.services[this.service] !== undefined;
    }
    getService() {
        return this.services[this.service];
    }
    sendResponse(data, method, status) {
        var _a;
        let response;
        let responseStatus;
        if (data instanceof Error) {
            let localStatus = (_a = data.status, (_a !== null && _a !== void 0 ? _a : models_1.ServiceStatus.Error));
            response = {
                error: data.message,
                meta: {
                    status: localStatus,
                    method,
                    path: this.path
                }
            };
            responseStatus = localStatus;
            console.error(data);
        }
        else {
            response = {
                data,
                meta: {
                    status,
                    method,
                    path: this.path
                }
            };
            if (Array.isArray(data)) {
                response.meta.count = data.length;
            }
            else if (typeof data === "object") {
                response.meta.count = Object.keys(data).length;
            }
            responseStatus = status;
        }
        console.log("Path: %s\nMethod: %s\nStatus: %s", this.path, method, response.meta.status);
        this.res.status(responseStatus).send(response);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=index.js.map