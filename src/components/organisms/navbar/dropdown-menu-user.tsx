"use client";

import { Cta } from "@/components/atoms/Cta";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import type { RootState } from "@/store/store";
import { getInitialUser } from "@/utils/functions/get-initial-user";

import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/store/slices/auth.slice";

export function DropDownMenuUser() {
  const t = useTranslations();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const menuItems = [
    {
      label: "Profile",
      href: "/profile",
      icon: <FaUser aria-hidden="true" />,
    },
    {
      label: t("common.logout"),
      onClick: () => dispatch(logout()),
      icon: <MdLogout aria-hidden="true" />,
    },
  ];

  return (
    <DropdownMenu data-name="DropdownMenuUser">
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t("common.openMenu")}
          className="cursor-pointer hidden md:block p-2 hover:text-orange-500 transition-colors"
        >
          <Avatar>
            <AvatarFallback>
              {getInitialUser(user?.firstName, user?.lastName)}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>
          {`${t("welcome.title")} ${user?.firstName}`}
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {menuItems.map((item) => (
            <DropdownMenuItem key={item.label} asChild>
              <Cta
                variant="icon"
                className="w-full justify-start"
                {...(!!item?.href && { href: item.href })}
                {...(!!item?.onClick && { onClick: item.onClick })}
              >
                {item.icon} {item.label}
              </Cta>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
