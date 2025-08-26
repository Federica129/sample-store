"use client";

import { Cta } from "@/components/atoms/Cta";
import { Logo } from "@/components/atoms/logo";
import { Container } from "@/components/molecules/container";
import { ModeToggle } from "@/components/molecules/mode-toggle";

import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";

import { MenuMobile } from "./menu-mobile";
import { DropDownMenuUser } from "./dropdown-menu-user";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { LanguageToggle } from "@/components/molecules/language-toggle";

const menuDesktopArray = (t: (key: string) => string) => [
  { label: "Home", href: "/" },
  { label: t("products.title"), href: "/products" },
];

export default function Navbar() {
  const t = useTranslations();
  const user = useSelector((state: RootState) => state.auth.user);
  const isLogged = user.isLogged;

  return (
    <header
      data-name="Navbar"
      className="fixed top-0 left-0 z-50 bg-background w-full border-b"
    >
      <Container className="w-full flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          {isLogged && (
            <nav className="hidden md:flex items-center gap-6">
              {menuDesktopArray(t).map((p) => (
                <Cta variant="link" size="link" key={p.label} href={p.href}>
                  {p.label}
                </Cta>
              ))}
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div
            className={`${
              isLogged ? "hidden md:flex" : "flex"
            } items-center gap-4`}
          >
            <ModeToggle />
            <LanguageToggle />
          </div>

          {isLogged && <DropDownMenuUser />}

          {/* TODO */}
          {isLogged && (
            <Cta
              variant="ghost"
              className="relative p-2 hover:text-orange-500"
              aria-label="Apri carrello"
            >
              <ShoppingCart
                aria-hidden="true"
                style={{ scale: 1.2, marginTop: 2 }}
              />
              <span
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white"
                aria-label="3 articoli nel carrello"
              >
                3
              </span>
            </Cta>
          )}

          {isLogged && <MenuMobile />}
        </div>
      </Container>
    </header>
  );
}
