import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesViajesPage } from './solicitudes-viajes.page';

describe('SolicitudesViajesPage', () => {
  let component: SolicitudesViajesPage;
  let fixture: ComponentFixture<SolicitudesViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
