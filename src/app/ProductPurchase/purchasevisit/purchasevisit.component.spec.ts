import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasevisitComponent } from './purchasevisit.component';

describe('PurchasevisitComponent', () => {
  let component: PurchasevisitComponent;
  let fixture: ComponentFixture<PurchasevisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchasevisitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurchasevisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
