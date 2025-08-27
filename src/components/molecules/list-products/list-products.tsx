import { ProductCard } from "../product-card";
import { ProductCardProps } from "../product-card/product-card.props";

export const ListProducts = ({ data }: { data: ProductCardProps[] }) => {
  return (
    <div
      data-name="ListProducts"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {data?.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
};
