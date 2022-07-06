import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { selectCurrentCoffee } from 'src/app/store/coffee/coffee.selectors';
import { Coffee } from 'src/app/store/coffee/models';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let store: MockStore;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: { get: jasmine.createSpy('get').and.returnValue(10) },
    },
  };

  const initialState = {};
  const fakeCoffee: Coffee = {
    id: '1',
    uid: '339d0629-0f73-4886-8a12-b0be8007895a',
    blend_name: 'Café Level',
    origin: 'origin',
    variety: 'Ennarea',
    intensifier: 'balanced',
    notes: 'notes here',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      providers: [
        provideMockStore({
          initialState,
          selectors: [{ selector: selectCurrentCoffee, value: fakeCoffee }],
        }),
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activated router parameter get methid gets called on initializing the component', () => {
    component.ngOnInit();
    expect(mockActivatedRoute.snapshot.paramMap.get).toHaveBeenCalled();
  });

  it('should receive coffee when subscribing to coffee$ observable', (done: DoneFn) => {
    component.coffee$.subscribe((mockCoffee) => {
      expect(mockCoffee).toEqual(fakeCoffee);
      done();
    });
  });
});
