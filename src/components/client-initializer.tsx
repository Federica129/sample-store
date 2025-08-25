"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/slices/auth.slice";
import { FAKE_USER } from "@/utils/constants/fake-user";

export default function ClientInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(login(FAKE_USER));
    }
  }, [dispatch]);

  return null;
}
