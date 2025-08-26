"use client";

import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { getStarRating } from "@/utils/functions/get-star-rating";
import type { ProductCardProps } from "./product-card.props";
import { Card } from "@/components/ui/card";
import React from "react";

const ProductCardComponent = (props: ProductCardProps) => {
  return (
    <Card data-name="ProductCard" className="w-full rounded-lg p-5">
      <div className="relative w-full mx-auto mb-3 h-[250px] max-w-[230px]">
        <Image
          src={props.image}
          alt={props.title}
          fill
          sizes="230px"
          className="object-contain"
        />
      </div>

      <div className="space-y-2">
        <h2 className="truncate text-lg font-semibold">{props.title}</h2>
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {props.description}
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          {getStarRating(props.rating.rate)}
          <span>
            {props.rating.rate} ({props.rating.count})
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
            €{props.price}
          </span>
          <Button variant="tertiary">
            <MdAddShoppingCart size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const ProductCard = React.memo(ProductCardComponent);
