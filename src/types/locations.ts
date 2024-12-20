export interface Office {
  name: string;
  address: string;
  tel?: string;
  email?: string;
  isHeadquarter?: boolean;
}

export interface Location {
  country: string;
  offices: Office[];
}