import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDialogBoxComponent } from './signup-dialog-box.component';

describe('SignupDialogBoxComponent', () => {
  let component: SignupDialogBoxComponent;
  let fixture: ComponentFixture<SignupDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupDialogBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
