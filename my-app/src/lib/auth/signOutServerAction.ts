"use server"

import { signOut } from "@/src/lib/auth/authConfig";

export const handleSignOut = async () => {
  // TODO: Implement sign out logic
  try {
    await signOut()
  } catch (error) {
    throw error;
  }
  
}