/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type XIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function XIcon(props: XIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.931 5.973a19929.047 19929.047 0 005.78 8.417c.192.278.349.511.349.518 0 .007-.072.095-.159.195l-.545.633-.797.926-.882 1.026a12895.071 12895.071 0 01-3.701 4.303.963.963 0 00-.122.158c0 .011.245.018.691.018h.692l.76-.886c.418-.487.83-.967.917-1.066a735.121 735.121 0 001.87-2.176l.62-.72.574-.667c.01-.01.172-.199.36-.418.187-.22.346-.4.353-.4.007 0 .97 1.395 2.14 3.1l2.174 3.165.047.067h2.371c1.95 0 2.37-.003 2.363-.023-.008-.02-1.144-1.678-4.06-5.921-2.098-3.055-2.377-3.466-2.37-3.486.008-.02.294-.355 2.174-2.542a2799.439 2799.439 0 001.483-1.725l.603-.702a6796.702 6796.702 0 011.633-1.903c.024-.029-.016-.03-.677-.03h-.703l-.312.364a965.981 965.981 0 01-1.859 2.162c-.07.08-.422.489-.782.91a114.07 114.07 0 01-.837.972 178.1 178.1 0 01-1.033 1.201c-.316.367-.332.383-.36.35-.014-.02-.942-1.369-2.06-2.998l-2.032-2.961h-4.76l.097.139zm1.858.971a59815.52 59815.52 0 018.422 12.057 346.272 346.272 0 001.486 2.118c.017.018.251.022 1.095.018l1.074-.005-2.81-4.02-4.97-7.114-2.163-3.094-1.083-.005-1.084-.005.033.05z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default XIcon;
/* prettier-ignore-end */
