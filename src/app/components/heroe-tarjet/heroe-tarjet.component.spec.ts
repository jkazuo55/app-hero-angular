import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeTarjetComponent } from './heroe-tarjet.component';

describe('HeroeTarjetComponent', () => {
  let component: HeroeTarjetComponent;
  let fixture: ComponentFixture<HeroeTarjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeTarjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeTarjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
