/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {TestBed} from '@angular/core/testing';

import {OnosConfigAdminService} from './onos-config-admin.service';
import {GRPC_WEB_CONFIG_PROXY} from './onos-api.module';
import {LoggedinService} from '../loggedin.service';

describe('OnosConfigAdminService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            {
                provide: GRPC_WEB_CONFIG_PROXY,
                useValue: 'http://localhost:8080'
            },
            {
                provide: LoggedinService,
            },
            {
                provide: OnosConfigAdminService,
                deps: [LoggedinService, GRPC_WEB_CONFIG_PROXY]
            }
        ]
    }));

    it('should be created', () => {
        const service: OnosConfigAdminService = TestBed.inject(OnosConfigAdminService);
        expect(service).toBeTruthy();
    });
});