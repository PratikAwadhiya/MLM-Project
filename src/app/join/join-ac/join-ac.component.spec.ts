import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAcComponent } from './join-ac.component';

describe('JoinAcComponent', () => {
  let component: JoinAcComponent;
  let fixture: ComponentFixture<JoinAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinAcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
