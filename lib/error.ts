import { ServiceStatus } from "./models";

export default class ServiceError extends Error {
    public constructor(message?: string, public status?: ServiceStatus) {
        super(message);
    }
}