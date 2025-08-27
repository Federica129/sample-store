export type ProductModel = Product & {
  rating: {
    rate: number;
    count: number;
  };
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  name: string;
};
