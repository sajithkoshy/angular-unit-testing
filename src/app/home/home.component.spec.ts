import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to todos page when todo button is clicked', () => {

    spyOn(component['router'], 'navigate');

    component.todo();

     expect(component['router'].navigate).toHaveBeenCalledWith(['/todo']);
  });


  it('should logout and go to login page when logout button is called', () => {
    spyOn(component, 'logout');
    const logoutButton = fixture.debugElement.nativeElement.querySelector('#logoutButton');
    logoutButton.click();
    expect(component.logout).toHaveBeenCalled();
  });
});
