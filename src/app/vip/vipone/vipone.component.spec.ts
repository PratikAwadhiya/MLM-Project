import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViponeComponent } from './vipone.component';

describe('ViponeComponent', () => {
  let component: ViponeComponent;
  let fixture: ComponentFixture<ViponeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViponeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViponeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
