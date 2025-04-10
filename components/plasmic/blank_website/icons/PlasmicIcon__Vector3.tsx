/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 9.712L2.45 0l7.28.067c.937.008 1.74.15 2.412.421.667.27 1.148.644 1.447 1.119.297.476.38 1.023.243 1.645-.126.572-.428 1.088-.909 1.556-.481.469-1.082.84-1.794 1.113a6.48 6.48 0 01-2.228.427l-.478.008.11-.474 4.379 3.492-4.253.112-3.66-3.024-.584.009-.763 3.146-3.65.097L0 9.712zm8.508-5.235c.305 0 .604-.059.894-.168a2.15 2.15 0 00.727-.438 1.27 1.27 0 00.37-.633.82.82 0 00-.083-.625c-.108-.186-.282-.329-.52-.432a2.055 2.055 0 00-.815-.153l-3.59-.006-.603 2.485 3.62-.028v-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
