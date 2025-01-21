"use client";

import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export const IsUser = () => {
  const user = useUser();

  return <div>{user ? <SignOutButton /> : <SignInButton />}</div>;
};
