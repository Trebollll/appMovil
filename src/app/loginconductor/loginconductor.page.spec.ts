import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginconductorPage } from './loginconductor.page';

describe('LoginconductorPage', () => {
  let component: LoginconductorPage;
  let fixture: ComponentFixture<LoginconductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
