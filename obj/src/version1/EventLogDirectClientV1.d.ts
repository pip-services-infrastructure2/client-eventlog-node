import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { IEventLogClientV1 } from './IEventLogClientV1';
import { SystemEventV1 } from './SystemEventV1';
export declare class EventLogDirectClientV1 extends DirectClient<any> implements IEventLogClientV1 {
    constructor(config?: any);
    getEvents(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SystemEventV1>>;
    logEvent(correlationId: string, event: SystemEventV1): Promise<SystemEventV1>;
}
