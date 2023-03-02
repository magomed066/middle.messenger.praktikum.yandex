export enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export enum RESPONSE_TYPE {
    default = "",
    text = "text",
    arraybuffer = "arraybuffer",
    blob = "blob",
    document = "document",
    json = "json",
}

export interface Options {
    data?: any;
    headers?: Record<string, string>;
    withCredentials?: boolean;
    timeout?: number;
    responseType?: RESPONSE_TYPE;
}
