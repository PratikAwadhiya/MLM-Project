import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatiinumComponent } from './platiinum.component';

describe('PlatiinumComponent', () => {
  let component: PlatiinumComponent;
  let fixture: ComponentFixture<PlatiinumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatiinumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatiinumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
