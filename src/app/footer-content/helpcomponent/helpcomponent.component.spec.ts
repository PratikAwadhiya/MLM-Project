import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcomponentComponent } from './helpcomponent.component';

describe('HelpcomponentComponent', () => {
  let component: HelpcomponentComponent;
  let fixture: ComponentFixture<HelpcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
