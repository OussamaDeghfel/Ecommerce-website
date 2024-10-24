export interface Product {
    id: string 
    name : string
    url: string 
    price: number
}

export interface ProductData {
    id: string;
    category: string;
    title: string;
    description: string; 
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
    isLiked?: boolean
  }