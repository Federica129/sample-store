"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button/button";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDark = resolvedTheme === "dark";
  const t = useTranslations();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleToggle = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      aria-label={t("ariaLabel.toggleTheme")}
      data-name="ModeToggle"
    >
      {isDark ? (
        <Moon className={`h-[1.2rem] w-[1.2rem] transition-all `} />
      ) : (
        <Sun className={`h-[1.2rem] w-[1.2rem] transition-all `} />
      )}
    </Button>
  );
}
