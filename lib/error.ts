import { ServiceStatus } from "./models";

export class ServiceError extends Error {
    public constructor(message?: any, public status?: ServiceStatus) {
        super(message);
    }
}