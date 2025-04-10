/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoMainLogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoMainLogoIcon(props: LogoMainLogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 173 24"}
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
          "M10.75 1.842a3.332 3.332 0 015.96 0l10.75 21.5h-6.178l-1.314-2.747H9.611l7.854-5.235-3.735-7.808-7.551 15.79H0l10.75-21.5zm42.798 21.5V0h-5.492v15.103L38.364 2.561c-.726-.94-1.09-1.41-1.545-1.748a4.12 4.12 0 00-1.343-.66C34.93 0 34.336 0 33.15 0h-2.943v23.341h5.492V8.238l9.692 12.543c.726.94 1.09 1.409 1.545 1.748.404.3.859.523 1.343.659.546.153 1.14.153 2.327.153h2.943zM112.587 0h13.73c4.778 0 8.925 4.119 8.925 8.925 0 3.447-1.879 6.167-4.797 7.557l4.797 6.86h-6.183l-7.547-10.967h5.492a3.442 3.442 0 000-6.883h-8.925v17.85h-5.492V0zm-54.92 0h12.631c5.915 0 10.71 4.813 10.71 10.728v1.922c0 5.915-4.795 10.691-10.71 10.691H57.667V0zm5.492 17.867h7.14c3.184 0 5.217-2.032 5.217-5.217v-1.922c0-3.185-2.033-5.218-5.218-5.218h-7.14v12.357zM148.01 0c-5.915 0-10.709 4.795-10.709 10.71v1.922c0 5.915 4.794 10.71 10.709 10.71h6.041c5.915 0 10.71-4.795 10.71-10.71V10.71c0-5.915-4.795-10.71-10.71-10.71h-6.041zm-5.767 10.71a5.767 5.767 0 015.767-5.767h6.041a5.767 5.767 0 015.767 5.767v1.922a5.767 5.767 0 01-5.767 5.766h-6.041a5.767 5.767 0 01-5.767-5.766V10.71zM89.246 0h-5.492v12.632c0 5.915 4.776 10.71 10.691 10.71h3.295c5.915 0 10.728-4.795 10.728-10.71V0h-5.492v12.357c0 3.185-1.621 5.492-4.805 5.492h-4.12c-3.184 0-4.805-2.307-4.805-5.492V0zm74.143.36h3.882v.873h-1.503v2.886h-.876V1.233h-1.503V.36zm5.259 1.434v2.325h-.876V.359h1.011l1.617 2.604L172.017.36H173v3.759h-.877v-2.28l-1.399 2.28h-.649l-1.427-2.325z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoMainLogoIcon;
/* prettier-ignore-end */
