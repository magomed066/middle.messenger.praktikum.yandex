import { Indexed } from "./../types/common";

function isObject(value: unknown): value is Indexed {
    return Object.prototype.toString.call(value) === "[object Object]";
}

export default isObject;
