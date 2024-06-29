import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinplnComponent } from './joinpln.component';

describe('JoinplnComponent', () => {
  let component: JoinplnComponent;
  let fixture: ComponentFixture<JoinplnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinplnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinplnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
