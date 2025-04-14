/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type CloseStatesTabletMobileValue = "mobileOnly" | "tablet";
export const CloseStatesTabletMobileContext = React.createContext<
  CloseStatesTabletMobileValue[] | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);

export const useScreenVariants = createUseScreenVariants(true, {
  mobileOnly: "(min-width:0px) and (max-width:768px)",
  tablet: "(max-width:1200px)",
});

export default CloseStatesTabletMobileContext;
/* prettier-ignore-end */
