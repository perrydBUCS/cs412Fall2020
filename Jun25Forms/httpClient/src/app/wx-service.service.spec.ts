import { TestBed } from '@angular/core/testing';

import { WxServiceService } from './wx-service.service';

describe('WxServiceService', () => {
  let service: WxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
