import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqfourComponent } from './faqfour.component';

describe('FaqfourComponent', () => {
  let component: FaqfourComponent;
  let fixture: ComponentFixture<FaqfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqfourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
