import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipfiveComponent } from './vipfive.component';

describe('VipfiveComponent', () => {
  let component: VipfiveComponent;
  let fixture: ComponentFixture<VipfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipfiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
