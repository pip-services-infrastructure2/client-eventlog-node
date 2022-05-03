import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EventLogMemoryPersistence } from 'service-eventlog-node';
import { EventLogController } from 'service-eventlog-node';
import { EventLogHttpServiceV1 } from 'service-eventlog-node';
import { EventLogHttpClientV1 } from '../../src/version1/EventLogHttpClientV1';
import { EventLogClientFixtureV1 } from './EventLogClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('EventLogHttpClientV1', ()=> {
    let service: EventLogHttpServiceV1;
    let client: EventLogHttpClientV1;
    let fixture: EventLogClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new EventLogMemoryPersistence();
        let controller = new EventLogController();

        service = new EventLogHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-eventlog', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-eventlog', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-eventlog', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new EventLogHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new EventLogClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
