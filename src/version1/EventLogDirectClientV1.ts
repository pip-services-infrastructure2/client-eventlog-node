import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IEventLogClientV1 } from './IEventLogClientV1';
//import { IEventLogController } from 'service-eventlog-nodex';
import { SystemEventV1 } from './SystemEventV1';

export class EventLogDirectClientV1 extends DirectClient<any> implements IEventLogClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-eventlog", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getEvents(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<SystemEventV1>> {
        let timing = this.instrument(correlationId, 'eventlog.get_events');
        
        try {
            let res = await this._controller.getEvents(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async logEvent(correlationId: string, event: SystemEventV1): Promise<SystemEventV1> {
        let timing = this.instrument(correlationId, 'eventlog.log_event');
        
        try {
            let res = await this._controller.logEvent(correlationId, event);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}