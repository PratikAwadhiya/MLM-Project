import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipdfourComponent } from './vipdfour.component';

describe('VipdfourComponent', () => {
  let component: VipdfourComponent;
  let fixture: ComponentFixture<VipdfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipdfourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipdfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
