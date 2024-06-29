import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipdoneComponent } from './vipdone.component';

describe('VipdoneComponent', () => {
  let component: VipdoneComponent;
  let fixture: ComponentFixture<VipdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VipdoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VipdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
