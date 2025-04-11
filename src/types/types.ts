export interface IBenefit {
  id: number;
  title: string;
  description: string;
}

export interface IPriceCard {
  id: number;
  title: string;
  price: number;
  description: string;
  isPopular: boolean;
  plans: string[];
}
