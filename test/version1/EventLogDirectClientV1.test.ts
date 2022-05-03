import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EventLogMemoryPersistence } from 'service-eventlog-node';
import { EventLogController } from 'service-eventlog-node';

import { EventLogDirectClientV1 } from '../../src/version1/EventLogDirectClientV1';
import { EventLogClientFixtureV1 } from './EventLogClientFixtureV1';

suite('EventLogDirectClientV1', ()=> {
    let client: EventLogDirectClientV1;
    let fixture: EventLogClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EventLogMemoryPersistence();
        let controller = new EventLogController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-eventlog', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-eventlog', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);
        client = new EventLogDirectClientV1();

        client.setReferences(references);

        fixture = new EventLogClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
