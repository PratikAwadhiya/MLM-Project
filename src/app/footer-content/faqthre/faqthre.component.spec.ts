import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqthreComponent } from './faqthre.component';

describe('FaqthreComponent', () => {
  let component: FaqthreComponent;
  let fixture: ComponentFixture<FaqthreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqthreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqthreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
