import Image from "next/image";
import noResultImage from "@/assets/no-result.png";
import { useTranslations } from "next-intl";
export function NoResultMessage({ message }: { message?: string }) {
  const t = useTranslations("common");
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <Image src={noResultImage} alt="" width={250} height={250} />
      <span className="text-primary font-bold">{message || t("noResult")}</span>
    </div>
  );
}
