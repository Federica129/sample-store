import * as yup from "yup";

export const editProfileValidationSchema = (t: (key: string) => string) =>
  yup.object({
    firstName: yup
      .string()
      .required(t("fieldsValidation.generic.required"))
      .min(2, t("fieldsValidation.generic.short2")),
    lastName: yup
      .string()
      .required(t("fieldsValidation.generic.required"))
      .min(2, t("fieldsValidation.generic.short2")),
    email: yup
      .string()
      .email(t("fieldsValidation.email.invalid"))
      .required(t("fieldsValidation.generic.required")),
    address: yup.string().required(t("fieldsValidation.generic.required")),
    city: yup.string().required(t("fieldsValidation.generic.required")),
    zip: yup.string().required(t("fieldsValidation.generic.required")),
    country: yup.string().required(t("fieldsValidation.generic.required")),
  });
