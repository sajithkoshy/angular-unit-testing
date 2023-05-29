import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router:Router
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);  
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should navigate to login page on successful login',()=>{
    spyOn(router,'navigate');
    component.username='ssk';
    component.password='123';
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should fail if username and password is wrong',()=>{
    spyOn(window,'alert')
    component.username='test1';
    component.password='pwd';
    component.onSubmit();
    // expect(component.username).toEqual('');
    // expect(component.password).toEqual('');
    expect(window.alert).toHaveBeenCalledWith('Invalid username and Password');
  })

  it('should navigate to registration page when register button is clicked', () => {
        spyOn(component, 'onRegister');
        const registerButton = fixture.debugElement.nativeElement.querySelector('#registerButton');
        registerButton.click();
        expect(component.onRegister).toHaveBeenCalled();
      });
});


