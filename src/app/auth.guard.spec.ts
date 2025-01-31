import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    // Create a spy object for Router with navigate method
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy }  // Inject the Router spy
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  afterEach(() => {
    localStorage.clear();  // Clear localStorage after each test
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access if token exists in localStorage', () => {
    localStorage.setItem('token', 'mockToken');  // Mock token

    const result = guard.canActivate();

    expect(result).toBeTrue();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should block access and redirect to login if token does not exist', () => {
    const result = guard.canActivate();

    expect(result).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
