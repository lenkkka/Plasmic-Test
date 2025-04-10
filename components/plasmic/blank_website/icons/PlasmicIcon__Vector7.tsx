/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.726 7.994c-.94.025-1.79-.128-2.541-.463C1.43 7.193.858 6.717.467 6.1.08 5.48-.068 4.78.03 3.996a3.857 3.857 0 01.945-2.089c.53-.61 1.208-1.082 2.028-1.42A6.596 6.596 0 015.6 0c.92.009 1.718.184 2.427.525.71.34 1.239.803 1.606 1.391.365.589.51 1.256.439 1.997a3.756 3.756 0 01-.837 2.03c-.49.612-1.128 1.1-1.917 1.462a6.595 6.595 0 01-2.595.589h.003zm.188-1.727a3.325 3.325 0 001.39-.315 2.88 2.88 0 001.04-.82 2.3 2.3 0 00.478-1.199c.048-.455-.031-.848-.23-1.185a2.04 2.04 0 00-.864-.79c-.376-.19-.812-.284-1.31-.287a3.315 3.315 0 00-1.382.284 2.9 2.9 0 00-1.08.807 2.294 2.294 0 00-.509 1.216c-.054.463.023.873.228 1.218.205.346.507.614.903.804.393.187.84.276 1.336.267z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
