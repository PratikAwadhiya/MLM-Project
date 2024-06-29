import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipdtwoComponent } from './vipdtwo.component';

describe('VipdtwoComponent', () => {
  let component: VipdtwoComponent;
  let fixture: ComponentFixture<VipdtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipdtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipdtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
