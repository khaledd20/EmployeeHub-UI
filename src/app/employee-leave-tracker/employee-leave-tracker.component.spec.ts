import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveTrackerComponent } from './employee-leave-tracker.component';

describe('EmployeeLeaveTrackerComponent', () => {
  let component: EmployeeLeaveTrackerComponent;
  let fixture: ComponentFixture<EmployeeLeaveTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeLeaveTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeLeaveTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
