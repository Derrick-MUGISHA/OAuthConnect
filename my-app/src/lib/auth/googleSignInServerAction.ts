"use server";

import { signIn } from "@/src/lib/auth/authConfig";

export const handleGoogleSignIn = async () => {
  // TODO: Implement Google sign-in logic
  try {
    await signIn("google", { redirectTo:"/dashboard"})
  } catch (error) {
    throw error;
  }
}