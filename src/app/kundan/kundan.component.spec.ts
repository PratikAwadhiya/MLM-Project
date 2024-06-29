import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundanComponent } from './kundan.component';

describe('KundanComponent', () => {
  let component: KundanComponent;
  let fixture: ComponentFixture<KundanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KundanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KundanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
