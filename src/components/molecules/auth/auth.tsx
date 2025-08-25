import { Button } from "@/components/ui/button";
import { Input } from "../input/input";
import { AuthProps } from "./auth.props";
import { InputWrapper } from "../InputWrapper";
import { useTranslations } from "next-intl";

export function Auth({ onSubmit, error, isLoading = false }: AuthProps) {
  const t = useTranslations("placeholder");

  return (
    <form
      data-name="Auth"
      className="flex flex-col gap-2 max-w-sm mx-auto mt-10"
      onSubmit={onSubmit}
    >
      <InputWrapper label="Email" isRequired>
        <Input
          name="email"
          type="email"
          placeholder={t("email")}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </InputWrapper>
      <Button
        className="mt-[1rem]"
        variant="tertiary"
        type="submit"
        isLoading={isLoading}
      >
        Login
      </Button>
      {!!error && <p className="text-red-600 mt-[0.5rem]">{error}</p>}
    </form>
  );
}
