import * as yup from "yup";

export const signInValidationSchema = (t: (key: string) => string) =>
  yup.object().shape({
    email: yup
      .string()
      .email(t("fieldsValidation.email.invalid"))
      .required(t("fieldsValidation.generic.required")),
  });
