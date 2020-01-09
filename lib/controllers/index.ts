import { Response } from "express";
import { ServiceError } from "../error";
import { Services, ServiceMethod, ServiceStatus, ResponseOutput } from "../models";
import { Service } from "../services";

export abstract class Controller {
    public constructor(
        private path: string,
        private services: Services,
        private service: string,
        private res: Response) {}

    public isService(): boolean {
        return this.services[this.service] !== undefined;
    }

    public getService(): Service<any> {
        return this.services[this.service];
    }

    public sendResponse(data: any, method: ServiceMethod, status?: ServiceStatus): void {
        let response: any;
        let responseStatus: ServiceStatus;

        if (data instanceof Error) {
            let localStatus: ServiceStatus = (data as ServiceError).status??ServiceStatus.Error;

            response = {
                error: data.message,
                meta: <ResponseOutput> {
                    status: localStatus,
                    method,
                    path: this.path
                }
            };

            responseStatus = localStatus;
            console.error(data);
        } else {
            response = {
                data,
                meta: <ResponseOutput> {
                    status,
                    method,
                    path: this.path
                }
            };

            if (Array.isArray(data)) {
                response.meta.count = data.length;
            } else if (typeof data === "object") {
                response.meta.count = Object.keys(data).length;
            }

            responseStatus = status;
        }

        console.log("Path: %s\nMethod: %s\nStatus: %s", this.path, method, response.meta.status);
        this.res.status(responseStatus).send(response);
    }
}