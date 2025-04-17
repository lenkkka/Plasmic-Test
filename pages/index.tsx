// pages/index.tsx

import * as React from "react";
import { useRouter } from "next/router";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";

import { PlasmicHomepage } from "../components/plasmic/blank_website/PlasmicHomepage";
import { SanityProviderWrapper } from "../components/SanityProviderWrapper";

export default function Homepage() {
  const router = useRouter();

  return (
    <PageParamsProvider__
      route={router?.pathname}
      params={router?.query}
      query={router?.query}
    >
      <SanityProviderWrapper>
        <PlasmicHomepage />
      </SanityProviderWrapper>
    </PageParamsProvider__>
  );
}