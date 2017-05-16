import { TestBed, inject } from '@angular/core/testing';

import { SelectionService } from './selection.service';

describe('SelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectionService]
    });
  });

  it('should ...', inject([SelectionService], (service: SelectionService) => {
    expect(service).toBeTruthy();
  }));
});
