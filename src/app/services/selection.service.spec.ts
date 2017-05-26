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

  it('should add rows to selection', inject([SelectionService], (service: SelectionService) => {
    const row = {};
    row['id'] = 1;
    service.addSelectedRow(row);
    expect(service.selection.length).toBe(1);
    expect(service.selection[0]).toEqual(row);
  }));

  it('should remove row from selection', inject([SelectionService], (service: SelectionService) => {
    const row = {};
    row['id'] = 1;
    service.selection.push(row);
    expect(service.selection.length).toBe(1);
    service.removeSelectedRow(row);
    expect(service.selection.length).toBe(0);
  }));

  it('should remove a non existing row from selection ', inject([SelectionService], (service: SelectionService) => {
    const row = {};
    row['id'] = 1;
    service.selection.push(row);
    expect(service.selection.length).toBe(1);

    const unexistingRow = {};
    unexistingRow['id'] = 2;
    service.removeSelectedRow(unexistingRow);
    expect(service.selection.length).toBe(1);
  }));

  it('should add all two rows to selection with three rows', inject([SelectionService], (service: SelectionService) => {
    const oldRows: any[] = [{id: 1, name: 'john'}, {id: 2, name: 'will'}, {id: 3, name: 'Cesar'}];
    const newRows: any[] = [{id: 4, name: 'Mari'}, {id: 5, name: 'Carmen'}];
    oldRows.forEach((row) => service.selection.push(row));
    expect(service.selection.length).toBe(3);

    service.addAllSelectedRows(newRows);
    expect(service.selection.length).toBe(2);
  }));

  it('should add all three rows to selection.', inject([SelectionService], (service: SelectionService) => {
    const newRows: any[] = [{id: 1, name: 'john'}, {id: 2, name: 'will'}, {id: 3, name: 'Cesar'}];
    service.addAllSelectedRows(newRows);
    expect(service.selection.length).toBe(3);
  }));

  it('should remove all three rows from selection.', inject([SelectionService], (service: SelectionService) => {
    expect(service.selection.length).toBe(0);
    const oldRows: any[] = [{id: 1, name: 'john'}, {id: 2, name: 'will'}, {id: 3, name: 'Cesar'}];
    oldRows.forEach((row) => service.selection.push(row));
    service.removeAllSelected();
    expect(service.selection.length).toBe(0);
  }));

  it('should remove all three rows from empty selection.', inject([SelectionService], (service: SelectionService) => {
    expect(service.selection.length).toBe(0);
    service.removeAllSelected();
    expect(service.selection.length).toBe(0);
  }));

});
