"use client";

import React from "react";

import { Plus, Minus, Trash } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/slices/cart.slice";
import { selectCartItemSubtotal } from "@/store/slices/cart.slice";
import { Cta } from "@/components/atoms/Cta";
import { useTranslations } from "next-intl";
import type { ProductCardSidebarProps } from "./product-card.sidebar.props";
export function ProductCardSidebar({
  image,
  title,
  id,
  quantity,
}: ProductCardSidebarProps) {
  const t = useTranslations();
  const dispatch = useDispatch();
  const itemSubtotal = useSelector(selectCartItemSubtotal(id.toString()));

  return (
    <div data-name="ProductCardSidebar" className="flex gap-4 items-start">
      <div className="relative w-20 h-20 bg-gray-50 border rounded overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            sizes="80"
          />
        ) : (
          <div className="w-full h-full bg-primary flex items-center justify-center " />
        )}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-primary font-semibold text-primary line-clamp-2">
              {title}
            </h4>
            <p className="text-sm text-primary">€{itemSubtotal.toFixed(2)}</p>
          </div>

          <Cta
            variant="ghost"
            size="icon"
            onClick={() => dispatch(removeFromCart(id.toString()))}
            aria-label={t("ariaLabel.remove")}
          >
            <Trash className="w-4 h-4 text-primary" />
          </Cta>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <Cta
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: id.toString(),
                  quantity: quantity - 1,
                })
              )
            }
            aria-label={t("ariaLabel.decreaseQuantity") + " " + title}
            variant="ghost"
            size="icon"
          >
            <Minus className="w-4 h-4" />
          </Cta>

          <div className="min-w-[2rem] text-center font-medium">{quantity}</div>

          <Cta
            variant="ghost"
            size="icon"
            onClick={() =>
              dispatch(
                updateQuantity({
                  id: id.toString(),
                  quantity: quantity + 1,
                })
              )
            }
            aria-label={t("ariaLabel.addQuantity") + " " + title}
          >
            <Plus className="w-4 h-4" />
          </Cta>
        </div>
      </div>
    </div>
  );
}
