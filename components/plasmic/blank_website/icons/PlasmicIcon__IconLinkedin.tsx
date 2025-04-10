/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLinkedinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLinkedinIcon(props: IconLinkedinIconProps) {
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
          "M24.063 3.063H3.938a.874.874 0 00-.876.874v20.125c0 .485.392.875.876.875h20.125a.874.874 0 00.875-.875V3.938a.874.874 0 00-.875-.874zM9.55 21.703H6.305v-10.44h3.246v10.44zM7.93 9.836a1.881 1.881 0 110-3.763 1.881 1.881 0 010 3.763zm13.773 11.867H18.46v-5.078c0-1.211-.022-2.767-1.687-2.767-1.688 0-1.947 1.318-1.947 2.68v5.165h-3.24v-10.44h3.111v1.427h.044c.432-.82 1.49-1.687 3.07-1.687 3.287 0 3.892 2.163 3.892 4.974v5.726z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLinkedinIcon;
/* prettier-ignore-end */
