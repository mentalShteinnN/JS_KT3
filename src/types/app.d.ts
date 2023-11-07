export interface productsT {
  products: productT[];
}

export interface cardProductT {
  product: productT;
  deleteFN: (id: number) => void;
}

export interface productT {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface raitingT {
  raiting: number;
}
