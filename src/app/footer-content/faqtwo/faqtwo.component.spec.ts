import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqtwoComponent } from './faqtwo.component';

describe('FaqtwoComponent', () => {
  let component: FaqtwoComponent;
  let fixture: ComponentFixture<FaqtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
