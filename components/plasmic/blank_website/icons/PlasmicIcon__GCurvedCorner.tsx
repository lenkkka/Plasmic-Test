/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GCurvedCornerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GCurvedCornerIcon(props: GCurvedCornerIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.674 24C13.557 24 24 13.557 24 .674V24H.674zM0 23.99c.224.007.449.01.674.01H0v-.01zM23.99 0H24v.674c0-.225-.003-.45-.01-.674z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GCurvedCornerIcon;
/* prettier-ignore-end */
