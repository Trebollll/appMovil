import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitarViajesPage } from './solicitar-viajes.page';

describe('SolicitarViajesPage', () => {
  let component: SolicitarViajesPage;
  let fixture: ComponentFixture<SolicitarViajesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarViajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
