export interface VehicleModel {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    variants: Variant[];
  }
  
  export interface Variant {
    id: number;
    name: string;
    price: number;
    colors: Color[];
    accessories: Accessory[];
    features: Feature[];
  }
  
  export interface Color {
    id: number;
    name: string;
    hex: string;
  }
  
  export interface Accessory {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }
  
  export interface Feature {
    id: number;
    name: string;
    description: string;
  }