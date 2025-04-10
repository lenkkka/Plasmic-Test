/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoMainIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoMainIcon(props: LogoMainIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 125 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M105.658 24h-3.736C89.06 24 87.89 18.902 87.89 15.917v-.249h12.692c0 .995.399 2.488 3.365 2.488 2.509 0 3.251-.778 3.251-1.617v-.093c0-.778-.285-1.493-3.935-1.648l-4.478-.155c-8.727-.343-10.552-3.7-10.552-7.337v-.28C88.233 2.674 91.427 0 101.694 0h3.622c11.379 0 14.031 3.45 14.031 7.43h-12.434c-.086-.746-.428-1.865-3.251-1.865-2.596 0-3.08.435-3.08 1.212v.062c0 .84.826 1.306 4.106 1.4l4.278.124c8.271.248 11.18 2.425 11.18 7.119v.435c0 4.104-2.424 8.083-14.488 8.083zm-38.524-.466v-7.142a3 3 0 00-.672-1.892L55.013.404h12.492l5.447 6.964L78.483.404h11.494L78.624 14.662a3.003 3.003 0 00-.653 1.869v7.003H67.134z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M48.726.404H37.89v20.13a3 3 0 003 3h22.553v-8.238H48.727V.404zm-29.384 12.13l-2.03-5.01-2.596 6.534h16.803l4.358 9.476H23.785l-1.112-2.767h-10.61l-1.112 2.767H0L9.228 2.212A3 3 0 0111.98.404h11.336a3 3 0 012.726 1.747l4.776 10.383H19.341zM119.935 24v-2.4h-.389v-.57h1.437v.57h-.391V24h-.657zm1.317 0v-2.97h.999l.277 1.55.276-1.55h1.007V24h-.638v-2.144L122.834 24h-.591l-.361-2.144V24h-.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoMainIcon;
/* prettier-ignore-end */
