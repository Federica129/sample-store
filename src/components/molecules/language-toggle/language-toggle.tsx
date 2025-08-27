import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { LOCALE } from "@/utils/constants/locale";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

export function LanguageToggle() {
  const locale = useLocale();
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Select
      data-name="LanguageToggle"
      value={locale}
      onValueChange={handleChange}
    >
      <SelectTrigger className="w-[80px] cursor-pointer">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.keys(LOCALE).map((key) => (
            <SelectItem key={key} value={key}>
              {key.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
