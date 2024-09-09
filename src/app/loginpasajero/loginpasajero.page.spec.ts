import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginpasajeroPage } from './loginpasajero.page';

describe('LoginpasajeroPage', () => {
  let component: LoginpasajeroPage;
  let fixture: ComponentFixture<LoginpasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginpasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
