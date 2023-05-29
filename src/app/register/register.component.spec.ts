import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should not navigate to login page when form is invalid', () => {
      spyOn(component['router'], 'navigate');
      component.onSubmit();
      expect(component['router'].navigate).not.toHaveBeenCalled();
    });

    it('should navigate to login page when form is valid', () => {
      component.registrationForm.setValue({
        firstName: 'Sajith',
        lastName: 'Sajan',
        username: 'sajithsk',
        password: 'password',
        confirmPassword: 'password',
      });
      spyOn(component['router'], 'navigate');
      component.onSubmit();
      expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
    });

    it('should show error messages when form is invalid and submitted', () => {
      component.onSubmit();
      fixture.detectChanges();
      const errorMessages = fixture.nativeElement.querySelectorAll('.text-danger');
      expect(errorMessages[0].innerHTML).toContain('First Name is required');
      expect(errorMessages[1].innerHTML).toContain('Last Name is required');
      expect(errorMessages[2].innerHTML).toContain('Username is required');
      expect(errorMessages[3].innerHTML).toContain('Password is required');
      expect(errorMessages[4].innerHTML).toContain('Confirm Password is required');
    });

    it('should show error message when passwords do not match', () => {
      component.registrationForm.setValue({
        firstName: 'Sajith',
        lastName: 'Sajan',
        username: 'sajithsk',
        password: 'password', 
        confirmPassword: 'mismatch',
      });
      component.onSubmit();
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('.text-danger');
      expect(errorMessage.innerHTML).toContain('Passwords do not match');
    });
  });

  describe('onLogin', () => {
    it('should navigate to login page', () => {
      spyOn(component['router'], 'navigate');
      component.onLogin();
      expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
    });
  });

});
