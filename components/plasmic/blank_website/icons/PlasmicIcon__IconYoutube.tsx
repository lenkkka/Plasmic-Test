/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconYoutubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconYoutubeIcon(props: IconYoutubeIconProps) {
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
          "M25.739 8.096a3.07 3.07 0 00-2.166-2.168C21.662 5.414 14 5.414 14 5.414s-7.662 0-9.573.511a3.066 3.066 0 00-2.166 2.169C1.75 10.008 1.75 14 1.75 14s0 3.992.511 5.904a3.07 3.07 0 002.166 2.168c1.911.514 9.573.514 9.573.514s7.662 0 9.573-.514a3.066 3.066 0 002.166-2.168c.511-1.912.511-5.904.511-5.904s0-3.992-.511-5.904zm-14.173 9.568v-7.328l6.344 3.637-6.344 3.691z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconYoutubeIcon;
/* prettier-ignore-end */
