import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldlvlComponent } from './goldlvl.component';

describe('GoldlvlComponent', () => {
  let component: GoldlvlComponent;
  let fixture: ComponentFixture<GoldlvlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldlvlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoldlvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
