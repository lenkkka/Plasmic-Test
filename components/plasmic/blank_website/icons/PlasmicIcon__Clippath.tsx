/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClippathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClippathIcon(props: ClippathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 175 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M175 0H0v41h175V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default ClippathIcon;
/* prettier-ignore-end */
