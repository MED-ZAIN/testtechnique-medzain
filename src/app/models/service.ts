export interface Service {
    id: number;
    title: string;
    description: string;
    price: number;
    tva: number;
    images: string[];
    category: string;
    active: boolean;
    creationDate: Date;
  }
