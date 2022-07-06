import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable Navigate To Product Details when input isBackToProducts flag is false', () => {
    component.isBackToProducts = false;
    expect(component.isNavigateToProductDetails).toBeTruthy();
  });

  it('should disable Navigate To Product Details when input isBackToProducts flag is true', () => {
    component.isBackToProducts = true;
    expect(component.isNavigateToProductDetails).toBeFalsy();
  });
});
