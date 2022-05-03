import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { EventLogNullClientV1 } from '../version1/EventLogNullClientV1';
import { EventLogDirectClientV1 } from '../version1/EventLogDirectClientV1';
import { EventLogHttpClientV1 } from '../version1/EventLogHttpClientV1';

export class EventLogClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-eventlog', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-eventlog', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-eventlog', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-eventlog', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(EventLogClientFactory.NullClientV1Descriptor, EventLogNullClientV1);
		this.registerAsType(EventLogClientFactory.DirectClientV1Descriptor, EventLogDirectClientV1);
		this.registerAsType(EventLogClientFactory.HttpClientV1Descriptor, EventLogHttpClientV1);
	}
	
}
