import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipdthriComponent } from './vipdthri.component';

describe('VipdthriComponent', () => {
  let component: VipdthriComponent;
  let fixture: ComponentFixture<VipdthriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipdthriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipdthriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
