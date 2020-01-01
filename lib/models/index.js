"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceStatus;
(function (ServiceStatus) {
    ServiceStatus[ServiceStatus["NotFound"] = 404] = "NotFound";
    ServiceStatus[ServiceStatus["OK"] = 200] = "OK";
    ServiceStatus[ServiceStatus["NotAcceptable"] = 406] = "NotAcceptable";
    ServiceStatus[ServiceStatus["Error"] = 400] = "Error";
})(ServiceStatus = exports.ServiceStatus || (exports.ServiceStatus = {}));
var ServiceMethod;
(function (ServiceMethod) {
    ServiceMethod["POST"] = "POST";
    ServiceMethod["GET"] = "GET";
    ServiceMethod["PUT"] = "PUT";
    ServiceMethod["DELETE"] = "DELETE";
})(ServiceMethod = exports.ServiceMethod || (exports.ServiceMethod = {}));
var RedisReply;
(function (RedisReply) {
    RedisReply["OK"] = "OK";
})(RedisReply = exports.RedisReply || (exports.RedisReply = {}));
//# sourceMappingURL=index.js.map