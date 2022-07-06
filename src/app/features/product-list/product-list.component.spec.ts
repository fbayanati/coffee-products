import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import {
  selectCoffeeSearchPage,
  selectCoffeesForCurrentPage,
  selectCoffeesTotalCount,
} from 'src/app/store/coffee/coffee.selectors';
import { Coffee } from 'src/app/store/coffee/models';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  const fakePageNumber = 1;
  const fakeTotalCount = 50;
  const fakePageSize = 10;
  const initialState = {};
  let store: MockStore;

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
      declarations: [ProductListComponent],
      providers: [
        provideMockStore({
          initialState,
          selectors: [
            { selector: selectCoffeesForCurrentPage, value: [fakeCoffee] },
            { selector: selectCoffeeSearchPage, value: fakePageNumber },
            { selector: selectCoffeesTotalCount, value: fakeTotalCount },
          ],
        }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive coffees when subscribing to coffeesForPage$ observable', (done: DoneFn) => {
    component.coffeesForPage$.subscribe((mockCoffees) => {
      expect(mockCoffees).toEqual([fakeCoffee]);
      done();
    });
  });

  it('should receive page number when subscribing to searchPage$ observable', (done: DoneFn) => {
    component.searchPage$.subscribe((mockPageNumber) => {
      expect(mockPageNumber).toEqual(fakePageNumber);
      done();
    });
  });

  it('should receive total number of pages of loaded coffes when subscribing to totalPages$ observable', (done: DoneFn) => {
    component.totalPages$.subscribe((mockPageNumber) => {
      expect(mockPageNumber).toEqual(Math.ceil(fakeTotalCount / fakePageSize));
      done();
    });
  });

  // Just need to simply add tests for the rest of methods in the component
  // to test the functionality of them to have a better coverage
  // ...
});
