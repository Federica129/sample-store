import { ProductCard } from "../product-card";
import { ProductCardProps } from "../product-card/product-card.props";

export const ListProducts = ({ data }: { data: ProductCardProps[] }) => {
  if (!!data?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </div>
  );
};
