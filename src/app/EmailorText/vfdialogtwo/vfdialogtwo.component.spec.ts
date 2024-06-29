import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfdialogtwoComponent } from './vfdialogtwo.component';

describe('VfdialogtwoComponent', () => {
  let component: VfdialogtwoComponent;
  let fixture: ComponentFixture<VfdialogtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfdialogtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VfdialogtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
