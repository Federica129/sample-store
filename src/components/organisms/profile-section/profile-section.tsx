"use client";

import { Container } from "@/components/molecules/container";
import { Section } from "@/components/molecules/section";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProfileForm } from "@/components/molecules/profile-form";
import type { RootState } from "@/store/store";
import { editProfileValidationSchema } from "@/utils/validation/schemas/editProfileValidationSchema";
import { UserData } from "@/types/user";
import { updateUser } from "@/store/slices/auth.slice";
import { TextBlock } from "@/components/molecules/text-block";
import { toast } from "sonner";

export function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const t = useTranslations();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const form = useForm<Omit<UserData, "isLogged">>({
    defaultValues: {
      lastName: "",
      firstName: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    resolver: yupResolver(editProfileValidationSchema(t)),
    mode: "onBlur",
  });

  useEffect(() => {
    if (user) {
      form.reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        address: user.address || "",
        city: user.city || "",
        zip: user.zip || "",
        country: user.country || "",
      });
    }
  }, [user, form]);

  const onHandleSave = (data: Omit<UserData, "isLogged">) => {
    dispatch(updateUser(data));
    setIsEditing(false);

    toast.success(t("messages.editSuccess"));
  };

  const { handleSubmit } = form;
  return (
    <Section data-name="ProfileSection">
      <Container className="flex flex-col gap-[1.5rem]">
        <TextBlock title={t("profile.title")} align="left" />
        <FormProvider {...form}>
          <ProfileForm disabled={!isEditing} />
        </FormProvider>

        <div className="flex † gap-2">
          {isEditing && (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                {t("common.cancel")}
              </Button>
              <Button onClick={handleSubmit(onHandleSave)}>
                {t("common.save")}
              </Button>
            </>
          )}
          {!isEditing && (
            <Button variant="secondary" onClick={() => setIsEditing(true)}>
              {t("common.editProfile")}
            </Button>
          )}
        </div>
      </Container>
    </Section>
  );
}
