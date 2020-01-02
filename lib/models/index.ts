import { Service } from "../services";

export enum ServiceStatus {
    NotFound=404,
    OK=200,
    NotAcceptable=406,
    Error=400
}

export enum ServiceMethod {
    POST="POST",
    GET="GET",
    PUT="PUT",
    DELETE="DELETE"
}

export enum RedisReply {
    OK="OK"
}

export interface ShopifyProductBase {
    title: string;
    vendor: string;
    product_type: string;
}

export interface Services {
    [key: string]: Service;
}

export interface ResponseOutput {
    status: ServiceStatus;
    method: ServiceMethod;
    count?: number;
    path: string;
}

export enum RedisEventType {
    error="error",
    connect="connect",
    reconnecting="reconnecting"
}