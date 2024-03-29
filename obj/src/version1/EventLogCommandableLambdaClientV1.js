"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLogCommandableLambdaClientV1 = void 0;
let os = require('os');
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class EventLogCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('eventlog');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getEvents(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_events', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    logEvent(correlationId, event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.time = event.time || new Date();
            event.source = event.source || os.hostname();
            return yield this.callCommand('log_event', correlationId, {
                event: event
            });
        });
    }
}
exports.EventLogCommandableLambdaClientV1 = EventLogCommandableLambdaClientV1;
//# sourceMappingURL=EventLogCommandableLambdaClientV1.js.map