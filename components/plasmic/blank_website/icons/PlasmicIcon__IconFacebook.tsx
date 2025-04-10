/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFacebookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFacebookIcon(props: IconFacebookIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.063 3.063H3.938a.874.874 0 00-.876.874v20.125c0 .485.392.875.876.875h20.125a.874.874 0 00.875-.875V3.938a.874.874 0 00-.875-.874zm-2.527 6.384h-1.747c-1.37 0-1.636.651-1.636 1.608v2.108h3.27l-.426 3.3h-2.843v8.474h-3.41v-8.47h-2.852v-3.304h2.852V10.73c0-2.825 1.725-4.364 4.246-4.364 1.209 0 2.245.09 2.549.13v2.951h-.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFacebookIcon;
/* prettier-ignore-end */
