"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { StytchB2BProvider } from "@stytch/nextjs/b2b";
import { createStytchB2BUIClient } from "@stytch/nextjs/b2b/ui";

const stytch = createStytchB2BUIClient(
  process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN ?? "",
  {
    cookieOptions: {
      jwtCookieName: `stytch_session_jwt_next_b2b_app`,
      opaqueTokenCookieName: `stytch_session_next_b2b_app`,
    },
  },
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <StytchB2BProvider stytch={stytch}>{children}</StytchB2BProvider>

        {/* <SessionProvider session={session}>{children}</SessionProvider> */}
      </ThemeProvider>
    </>
  );
}
