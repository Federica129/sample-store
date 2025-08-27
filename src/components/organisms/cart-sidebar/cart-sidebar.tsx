"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Cta } from "@/components/atoms/Cta";
import { ShoppingCart } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import {
  clearCart,
  selectCartCount,
  selectCartTotal,
} from "@/store/slices/cart.slice";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { ProductCardSidebar } from "@/components/molecules/product-card-sidebar";
export default function CartSidebar() {
  const items = useSelector((state: RootState) => state.cart.items);
  const t = useTranslations();
  const itemCount = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);
  const dispatch = useDispatch();

  const checkout = () => {
    setIsLoadingPayment(true);

    const timeoutId = setTimeout(() => {
      toast.success(t("messages.paymentSuccess"));
      dispatch(clearCart());
      setIsLoadingPayment(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };
  return (
    <Sheet data-name="CartSidebar">
      <SheetTrigger asChild>
        <Cta
          variant="ghost"
          className="relative p-2 hover:text-orange-500"
          aria-label={t("ariaLabel.openCart")}
        >
          <ShoppingCart
            aria-hidden="true"
            style={{ scale: 1.2, marginTop: 2 }}
          />
          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white"
            aria-label={itemCount + " " + t("ariaLabel.addQuantity")}
          >
            {itemCount}
          </span>
        </Cta>
      </SheetTrigger>

      <SheetContent side="right" className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle>{t("sidebarCart.title")}</SheetTitle>
          {/* For accessibility */}
          <SheetDescription className="hidden">
            {t("sidebarCart.title")}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          {items?.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20">
              <p className="text-lg font-medium text-orange">
                {t("messages.emptyCart")}
              </p>
              <p className="text-sm text-primary text-center max-w-xs">
                {t("messages.addProduct")}
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items?.map((item) => (
                <li key={item.id} className="flex gap-4 items-start">
                  <ProductCardSidebar {...item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <SheetFooter>
          <div className="py-4 border-t">
            <div className="flex text-primary items-center justify-between mb-4">
              <span className="text-sm">{t("common.total")}</span>
              <span className="text-lg font-semibold">€{total.toFixed(2)}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <SheetClose asChild>
                <Cta variant="secondary" className="flex-1">
                  {t("sidebarCart.continueShopping")}
                </Cta>
              </SheetClose>

              <Cta
                variant="tertiary"
                className="flex-1"
                disabled={items?.length <= 0}
                isLoading={isLoadingPayment}
                onClick={() => checkout()}
              >
                {t("sidebarCart.checkout")}
              </Cta>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
