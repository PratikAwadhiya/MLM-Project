import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinpplComponent } from './joinppl.component';

describe('JoinpplComponent', () => {
  let component: JoinpplComponent;
  let fixture: ComponentFixture<JoinpplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinpplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinpplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
