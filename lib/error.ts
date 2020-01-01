import { ServiceStatus } from "./models";

export class ServiceError extends Error {
    public constructor(message?: string, public status?: ServiceStatus) {
        super(message);
    }
}