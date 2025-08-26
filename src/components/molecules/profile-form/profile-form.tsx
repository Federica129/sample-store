import { useTranslations } from "next-intl";
import { Input } from "../input";
import { InputWrapper } from "../input-wrapper";
import { ProfileFormProps } from "./profile-form.props";

export function ProfileForm({ onSubmit, disabled }: ProfileFormProps) {
  const t = useTranslations("fieldsValidation.fieldName");
  return (
    <form
      data-name="ProfileForm"
      className="flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col md:flex-row gap-2">
        <InputWrapper label={t("firstName")}>
          <Input name="firstName" disabled={disabled} required />
        </InputWrapper>

        <InputWrapper label={t("lastName")}>
          <Input name="lastName" disabled={disabled} required />
        </InputWrapper>
      </div>

      <InputWrapper label={t("email")}>
        <Input type="email" name="email" disabled={disabled} required />
      </InputWrapper>

      <InputWrapper label={t("address")}>
        <Input name="address" disabled={disabled} required />
      </InputWrapper>

      <div className="flex flex-col md:flex-row gap-2">
        <InputWrapper label={t("country")}>
          <Input name="country" disabled={disabled} required />
        </InputWrapper>

        <InputWrapper label={t("city")}>
          <Input name="city" disabled={disabled} required />
        </InputWrapper>

        <InputWrapper label={t("zip")}>
          <Input name="zip" disabled={disabled} required />
        </InputWrapper>
      </div>
    </form>
  );
}
