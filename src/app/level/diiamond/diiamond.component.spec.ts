import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiiamondComponent } from './diiamond.component';

describe('DiiamondComponent', () => {
  let component: DiiamondComponent;
  let fixture: ComponentFixture<DiiamondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiiamondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
