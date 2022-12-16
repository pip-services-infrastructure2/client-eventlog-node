let os = require('os');

import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { SystemEventV1 } from './SystemEventV1';
import { IEventLogClientV1 } from './IEventLogClientV1';

export class EventLogCommandableLambdaClientV1 extends CommandableLambdaClient implements IEventLogClientV1 {

    constructor(config?: any) {
        super('eventlog');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getEvents(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SystemEventV1>> {
        return await this.callCommand(
            'get_events',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async logEvent(correlationId: string, event: SystemEventV1): Promise<SystemEventV1> {
        event.time = event.time || new Date();
        event.source = event.source || os.hostname(); 

        return await this.callCommand(
            'log_event',
            correlationId,
            {
                event: event
            }
        );
    }
    
}
