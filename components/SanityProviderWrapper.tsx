"use client";

import React, { ReactNode } from "react";
import { SanityCredentialsProvider } from "@plasmicpkgs/plasmic-sanity-io";

interface Props {
  children: ReactNode;
}

export const SanityProviderWrapper = ({ children }: Props) => {
  return (
    <SanityCredentialsProvider
      projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
      dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      apiVersion="v1"
      token={process.env.NEXT_PUBLIC_SANITY_TOKEN}
      useCdn={false}
    >
      {children}
    </SanityCredentialsProvider>
  );
};


