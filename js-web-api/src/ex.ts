import * as log4js from "log4js";
import Log from "./log";
Log.init();
Log.accessDebug("accessDebug");
Log.systemDebug("systemDebug");

export function ex(flag: boolean) {
    return (flag === true) ? "isTrue" : "isFalse";
}
