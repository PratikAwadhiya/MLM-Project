import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViptwoComponent } from './viptwo.component';

describe('ViptwoComponent', () => {
  let component: ViptwoComponent;
  let fixture: ComponentFixture<ViptwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViptwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViptwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
