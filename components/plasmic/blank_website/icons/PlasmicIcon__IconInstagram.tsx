/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconInstagramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconInstagramIcon(props: IconInstagramIconProps) {
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
          "M13.999 10.356A3.653 3.653 0 0010.354 14 3.653 3.653 0 0014 17.646 3.653 3.653 0 0017.644 14a3.653 3.653 0 00-3.645-3.645zM24.931 14c0-1.51.014-3.005-.071-4.512-.085-1.75-.484-3.303-1.764-4.583-1.282-1.282-2.832-1.679-4.582-1.763-1.51-.085-3.006-.071-4.512-.071-1.51 0-3.005-.014-4.512.07-1.75.085-3.303.485-4.583 1.764C3.625 6.19 3.228 7.74 3.144 9.49c-.085 1.51-.072 3.005-.072 4.512 0 1.507-.013 3.005.072 4.511.084 1.75.484 3.304 1.763 4.583 1.283 1.283 2.833 1.68 4.583 1.764 1.51.085 3.005.071 4.512.071 1.51 0 3.005.014 4.511-.071 1.75-.085 3.304-.484 4.583-1.764 1.283-1.282 1.68-2.832 1.764-4.582.088-1.507.071-3.003.071-4.512zM14 19.609a5.6 5.6 0 01-5.608-5.608A5.6 5.6 0 0114 8.393 5.6 5.6 0 0119.607 14 5.6 5.6 0 0114 19.609zm5.838-10.136c-.725 0-1.31-.585-1.31-1.31 0-.725.585-1.31 1.31-1.31a1.308 1.308 0 01.927 2.237 1.309 1.309 0 01-.927.383z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconInstagramIcon;
/* prettier-ignore-end */
