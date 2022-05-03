import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';
import { SystemEventV1 } from './SystemEventV1';
import { IEventLogClientV1 } from './IEventLogClientV1';
export declare class EventLogLambdaClientV1 extends CommandableLambdaClient implements IEventLogClientV1 {
    constructor(config?: any);
    getEvents(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SystemEventV1>>;
    logEvent(correlationId: string, event: SystemEventV1): Promise<SystemEventV1>;
}
