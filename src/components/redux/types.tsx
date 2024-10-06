export interface Product {
    id: string 
    name : string
    url: string 
    price: number
}

export interface ProductData {
    id: string;
    category: {
      id: string;
      name: string;
    };
    title: string;
    description: string; 
    price: number;
    images: string[];
  }