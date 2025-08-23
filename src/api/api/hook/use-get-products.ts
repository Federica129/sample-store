import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../get-products";
import { ProductModel } from "@/types/product-model";

const ONE_MINUTE = 60 * 1000;

export const useGetProducts = () => {
  return useQuery<ProductModel[]>({
    queryKey: ["get-products"],
    queryFn: () => getProducts(),
    staleTime: 5 * ONE_MINUTE,
    gcTime: 10 * ONE_MINUTE,
    refetchOnWindowFocus: false,
  });
};
