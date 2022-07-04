import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdFooterComponent } from './prd-footer.component';

describe('PrdFooterComponent', () => {
  let component: PrdFooterComponent;
  let fixture: ComponentFixture<PrdFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
