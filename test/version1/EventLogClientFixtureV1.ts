const assert = require('chai').assert;

import { SystemEventV1 } from '../../src/version1/SystemEventV1';
import { EventLogTypeV1 } from '../../src/version1/EventLogTypeV1';
import { EventLogSeverityV1 } from '../../src/version1/EventLogSeverityV1';
import { IEventLogClientV1 } from '../../src/version1/IEventLogClientV1';

let EVENT1: SystemEventV1 = new SystemEventV1(
    null,
    'test',
    EventLogTypeV1.Restart,
    EventLogSeverityV1.Important,
    'test restart #1'
);
let EVENT2: SystemEventV1 = new SystemEventV1(
    null,
    'test',
    EventLogTypeV1.Failure,
    EventLogSeverityV1.Critical,
    'test error'
);

export class EventLogClientFixtureV1 {
    private _client: IEventLogClientV1;
    
    constructor(client: IEventLogClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let event1;
        let event2;

        // Create one event
        let event = await this._client.logEvent(null, EVENT1);

        assert.isObject(event);
        assert.isNotNull(event.time);
        assert.isNotNull(event.source);
        assert.equal(event.type, EVENT1.type);
        assert.equal(event.message, EVENT1.message);

        event1 = event;

        // Create another event
        event = await this._client.logEvent(null, EVENT2);

        assert.isObject(event);
        assert.isNotNull(event.time);
        assert.isNotNull(event.source);
        assert.equal(event.type, EVENT2.type);
        assert.equal(event.message, EVENT2.message);

        event2 = event;

        // Get all system events
        let page = await this._client.getEvents(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);
    }
}
