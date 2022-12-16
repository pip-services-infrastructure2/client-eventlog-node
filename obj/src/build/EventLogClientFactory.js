"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLogClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const EventLogNullClientV1_1 = require("../version1/EventLogNullClientV1");
const EventLogDirectClientV1_1 = require("../version1/EventLogDirectClientV1");
const EventLogCommandableHttpClientV1_1 = require("../version1/EventLogCommandableHttpClientV1");
class EventLogClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(EventLogClientFactory.NullClientV1Descriptor, EventLogNullClientV1_1.EventLogNullClientV1);
        this.registerAsType(EventLogClientFactory.DirectClientV1Descriptor, EventLogDirectClientV1_1.EventLogDirectClientV1);
        this.registerAsType(EventLogClientFactory.HttpClientV1Descriptor, EventLogCommandableHttpClientV1_1.EventLogCommandableHttpClientV1);
    }
}
exports.EventLogClientFactory = EventLogClientFactory;
EventLogClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-eventlog', 'factory', 'default', 'default', '1.0');
EventLogClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-eventlog', 'client', 'null', 'default', '1.0');
EventLogClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-eventlog', 'client', 'direct', 'default', '1.0');
EventLogClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-eventlog', 'client', 'commandable-http', 'default', '1.0');
//# sourceMappingURL=EventLogClientFactory.js.map