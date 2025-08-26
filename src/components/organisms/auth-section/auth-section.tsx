"use client";

import { Auth } from "@/components/molecules/auth/auth";
import { Section } from "@/components/molecules/section";
import { signInValidationSchema } from "@/utils/validation/schemas/signInValidationSchema";
import { useTranslations } from "next-intl";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FAKE_USER } from "@/utils/constants/fake-user";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth.slice";
import { useState } from "react";
import { TextBlock } from "@/components/molecules/text-block/text-block";
import { Container } from "@/components/molecules/container";

export function AuthSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");
  const t = useTranslations();
  const dispatch = useDispatch();
  const form = useForm<{ email: string }>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(signInValidationSchema(t)),
    mode: "onBlur",
  });

  const { handleSubmit } = form;

  const handleLogin = ({ email }: { email: string }) => {
    setIsLoading(true);
    setFormError("");
    const timeoutId = setTimeout(() => {
      if (email === FAKE_USER.email) {
        dispatch(login(FAKE_USER));
      } else {
        setFormError(t("formErrors.login"));
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <Section
      data-name="AuthSection"
      className="flex items-center justify-center h-[calc(100dvh-65px)]"
    >
      <Container>
        <TextBlock title="Login" />
        <FormProvider {...form}>
          <Auth
            onSubmit={handleSubmit(handleLogin)}
            isLoading={isLoading}
            error={formError}
          />
        </FormProvider>
      </Container>
    </Section>
  );
}
