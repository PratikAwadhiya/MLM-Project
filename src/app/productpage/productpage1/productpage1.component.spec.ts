import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productpage1Component } from './productpage1.component';

describe('Productpage1Component', () => {
  let component: Productpage1Component;
  let fixture: ComponentFixture<Productpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productpage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
