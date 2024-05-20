"use client";

import { useState, useEffect } from "react";
import {
  AuthFlowType,
  B2BProducts,
  StytchB2BUIConfig,
  StytchEventType,
} from "@stytch/vanilla-js";
import { StytchB2B } from "@stytch/nextjs/b2b";
import { useRouter } from "next/navigation";

const Discovery = () => {
  const [config, setConfig] = useState<StytchB2BUIConfig | null>();
  const router = useRouter();

  useEffect(() => {
    setConfig({
      products: [B2BProducts.emailMagicLinks],
      sessionOptions: { sessionDurationMinutes: 60 },
      authFlowType: AuthFlowType.Discovery,
    });
  }, []);

  return config ? (
    <StytchB2B
      config={config}
      callbacks={{
        onEvent: async ({ type, data }) => {
          if (
            type === StytchEventType.B2BDiscoveryIntermediateSessionExchange
          ) {
            router.push(`/dashboard`);
          } else if (type === StytchEventType.B2BDiscoveryOrganizationsCreate) {
            router.push(`/dashboard`);
          } else if (type === StytchEventType.B2BMagicLinkAuthenticate) {
            router.push(`/dashboard`);
          } else if (type === StytchEventType.B2BSSOAuthenticate) {
            router.push(`/dashboard`);
          }
        },
      }}
    />
  ) : null;
};

export default Discovery;
