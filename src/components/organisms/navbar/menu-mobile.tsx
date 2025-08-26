import { Cta } from "@/components/atoms/Cta";
import { LanguageToggle } from "@/components/molecules/language-toggle/language-toggle";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { IoBagHandle, IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const menuMobileArray = (t: (key: string) => string) => [
  { label: "Home", href: "/", icon: <IoHome /> },
  { label: t("products.title"), href: "/products", icon: <IoBagHandle /> },
  { label: t("profile.title"), href: "/profile", icon: <FaUser /> },
];
export function MenuMobile() {
  const t = useTranslations();

  return (
    <div data-name="MenuMobile" className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label={t("common.openMenu")} className="p-2">
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="p-6 h-full flex flex-col justify-between"
        >
          {/* For accessibility */}
          <SheetHeader className="hidden">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Menu</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-4" aria-label="Menu mobile">
            {menuMobileArray(t).map((p) => (
              <Cta
                variant="link"
                size="link"
                key={p.label}
                href={p.href}
                className="text-lg w-min flex items-center gap-2"
              >
                {p.icon}
                {p.label}
              </Cta>
            ))}
            <Cta
              variant="link"
              size="link"
              className="text-lg text-orange w-min"
              icon={<MdLogout />}
            >
              {t("common.logout")}
            </Cta>
          </nav>

          <div className="flex justify-center gap-4 mt-6">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
