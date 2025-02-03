import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveTrackerComponent } from './leave-tracker.component';
import { LeaveRequestService } from '../services/leave-request.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('LeaveTrackerComponent', () => {
  let component: LeaveTrackerComponent;
  let fixture: ComponentFixture<LeaveTrackerComponent>;
  let service: LeaveRequestService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTrackerComponent ],
      providers: [ LeaveRequestService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTrackerComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LeaveRequestService);
    spyOn(service, 'getLeaveRequests').and.returnValue(of([])); // Mock getLeaveRequests method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load leave requests on init', () => {
    expect(service.getLeaveRequests).toHaveBeenCalled();
  });
});
