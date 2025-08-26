import Image from "next/image";

import { Link } from "@/i18n/navigation";

import logo from "@/assets/logo.svg";

export function Logo({ isFooter = false }: { isFooter?: boolean }) {
  return (
    <Link
      data-name="Logo"
      href="/"
      style={{ display: "flex", gap: "1rem", alignItems: "center" }}
    >
      <Image
        src={logo}
        sizes="10vw"
        width={48}
        height={48}
        alt="logo"
        priority
      />
      {isFooter && <span className="text-primary font-bold">SampleStore</span>}
    </Link>
  );
}
