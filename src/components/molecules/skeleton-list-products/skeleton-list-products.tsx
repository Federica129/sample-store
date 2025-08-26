import { SkeletonProductCard } from "../skeleton-product-card";

export const SkeletonListProducts = ({
  quantity = 6,
}: {
  quantity?: number;
}) => {
  return (
    <div
      data-name="SkeletonListProducts"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: quantity }).map((_, i) => (
        <SkeletonProductCard key={"skeleton" + i} />
      ))}
    </div>
  );
};
