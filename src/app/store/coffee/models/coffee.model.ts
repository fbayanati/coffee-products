export interface Coffee {
  id: string;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  intensifier: string;
  notes: string;
}

export interface MapStateCoffees {
  totalCount: number;
  coffees: Coffee[];
  searchPage: number;
}
