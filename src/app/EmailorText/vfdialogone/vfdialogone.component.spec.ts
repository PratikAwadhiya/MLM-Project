import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfdialogoneComponent } from './vfdialogone.component';

describe('VfdialogoneComponent', () => {
  let component: VfdialogoneComponent;
  let fixture: ComponentFixture<VfdialogoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfdialogoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VfdialogoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
