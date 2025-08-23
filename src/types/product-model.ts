export type ProductModel = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  name: string;
  rating: {
    rate: number;
    count: number;
  };
};
