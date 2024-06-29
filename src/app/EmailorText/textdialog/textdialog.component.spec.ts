import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextdialogComponent } from './textdialog.component';

describe('TextdialogComponent', () => {
  let component: TextdialogComponent;
  let fixture: ComponentFixture<TextdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
