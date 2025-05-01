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
  features: {
    label: string;
    isInclude: boolean;
  }[];
}

export interface IPortofolios {
  id: number,
  title: string,
  slug: string,
  client_name: string,
  category: string,
  thumbnail_url: string,
  project_url: string,
  description: string,
  tech_stack: string[],
  started_at: string,
  completed_at: string,
  is_featured: boolean,
}