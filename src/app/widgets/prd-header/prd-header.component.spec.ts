import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdHeaderComponent } from './prd-header.component';

describe('PrdHeaderComponent', () => {
  let component: PrdHeaderComponent;
  let fixture: ComponentFixture<PrdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrdHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
