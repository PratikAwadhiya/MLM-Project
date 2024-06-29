import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillverComponent } from './sillver.component';

describe('SillverComponent', () => {
  let component: SillverComponent;
  let fixture: ComponentFixture<SillverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SillverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SillverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
