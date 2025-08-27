"use client";

import { Cta } from "@/components/atoms/Cta";
import { Logo } from "@/components/atoms/logo";
import { Container } from "@/components/molecules/container";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import { useTranslations } from "next-intl";
import { MenuMobile } from "./menu-mobile";
import { DropDownMenuUser } from "./dropdown-menu-user";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { LanguageToggle } from "@/components/molecules/language-toggle";
import CartSidebar from "../cart-sidebar/cart-sidebar";

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
          {isLogged && <CartSidebar />}
          {isLogged && <MenuMobile />}
        </div>
      </Container>
    </header>
  );
}
