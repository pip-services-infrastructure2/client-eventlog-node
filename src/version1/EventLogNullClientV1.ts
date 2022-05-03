import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { SystemEventV1 } from './SystemEventV1';
import { IEventLogClientV1 } from './IEventLogClientV1';

export class EventLogNullClientV1 implements IEventLogClientV1 {
    constructor(config?: any) {}
        
    public async getEvents(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SystemEventV1>> {
        return new DataPage<SystemEventV1>([], 0);
    }

    public async logEvent(correlationId: string, event: SystemEventV1): Promise<SystemEventV1> {
        return event;
    }
}
