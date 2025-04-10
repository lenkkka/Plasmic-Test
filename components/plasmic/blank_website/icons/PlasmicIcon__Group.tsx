/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 175 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M172.224.463v1.38h-.495V.464h-.522v-.46h1.533v.46h-.521.005zm1.137 1.378h-.496V0h.621l.445.918.444-.918h.621v1.84h-.496V.874l-.421.823h-.297l-.421-.823v.968zM10.273 28.167c2.546-.22 4.848-.733 6.91-1.537 2.034-.792 3.742-1.801 5.133-3.028 1.372-1.205 2.31-2.541 2.822-3.997.707-2.006.53-3.598-.515-4.79-1.046-1.196-2.951-1.965-5.734-2.317l-3.407-.438c-.997-.131-1.694-.438-2.076-.918-.382-.48-.436-1.073-.151-1.785.319-.794.926-1.414 1.811-1.865.883-.447 1.983-.692 3.299-.728 1.398-.042 2.378.142 2.956.546.576.405.718.985.439 1.74l6.651-.24c.698-1.98.31-3.513-1.165-4.62-1.481-1.114-3.862-1.638-7.19-1.577-2.232.042-4.292.355-6.18.943-1.914.594-3.563 1.425-4.934 2.49-1.39 1.08-2.395 2.338-3.002 3.78-.826 1.958-.68 3.598.453 4.89 1.128 1.296 3.113 2.114 5.928 2.457l3.315.382c1.068.117 1.812.42 2.242.909.43.488.507 1.099.233 1.84-.319.86-.988 1.568-2.016 2.12-1.037.556-2.319.893-3.846 1.007-1.603.117-2.782-.047-3.523-.496-.74-.446-.934-1.116-.581-2L.53 21.44c-.666 1.567-.706 2.898-.117 3.98.59 1.082 1.738 1.874 3.441 2.36 1.692.485 3.837.616 6.418.39h.008l-.008-.003zm18.166-1.902l19.053-1.618 1.262-4.54-12.174.876L42.39 2.49l-6.058.117L28.44 26.27v-.006zm24.058-2.039L68.96 22.83l.843-3.936-5.167.374 3.15-13.7 4.906-.15.757-3.532-15.15.296-.977 3.707 5.226-.16-3.438 13.944-5.522.398-1.094 4.154h.005l-.002.002zm20.972-1.782l4.142-20.637 7.764-.15c1.552-.031 2.851.19 3.914.66 1.054.472 1.82 1.139 2.298 2.009.482.873.63 1.916.448 3.13a6.638 6.638 0 01-1.444 3.254c-.792.974-1.812 1.76-3.063 2.354-1.253.594-2.714.951-4.34 1.049L80 14.305 78.573 22l-5.101.436v.005l-.003.003zm7.226-11.904l3.142-.15c1.003-.048 1.837-.324 2.504-.832.666-.505 1.06-1.14 1.188-1.924.128-.784-.057-1.386-.556-1.833-.498-.446-1.239-.652-2.219-.622l-3.079.098-.977 5.266-.003-.003zm23.414 8.844c1.105-.569 1.991-1.31 2.657-2.22a5.96 5.96 0 001.154-3.006c.151-1.526-.177-2.742-.971-3.665-.795-.924-2.051-1.529-3.777-1.819l-2.105-.362c-.615-.11-1.074-.346-1.373-.717-.302-.366-.413-.826-.345-1.364.083-.605.353-1.08.823-1.42.465-.34 1.091-.519 1.88-.544.835-.025 1.453.117 1.857.435.405.316.573.762.507 1.34l4-.143c.15-1.528-.297-2.717-1.351-3.581-1.053-.865-2.572-1.28-4.577-1.244-1.341.025-2.538.262-3.586.708-1.062.452-1.928 1.082-2.595 1.891a5.67 5.67 0 00-1.242 2.87c-.21 1.484.111 2.725.963 3.715.852.993 2.142 1.63 3.862 1.917l2.034.323c.655.1 1.139.34 1.467.717.328.38.456.848.396 1.403a2.228 2.228 0 01-.912 1.584c-.544.41-1.213.644-2.15.711-.937.067-1.66-.067-2.16-.418-.498-.349-.708-.856-.623-1.517l-4.415.29c-.162 1.165 0 2.161.499 2.978.495.823 1.287 1.428 2.35 1.81 1.062.383 2.344.51 3.836.383 1.481-.126 2.775-.48 3.894-1.057l.003.002zm10.69-.449l3.853-.329.921-14.389 4.392-.14.159-3.176-12.584.245-.302 3.333 4.669-.147-1.105 14.6v.006l-.003-.003zm11.08-.945l.718-17.137 5.218-.1c1.128-.022 2.09.15 2.894.527.803.374 1.418.91 1.857 1.618.438.711.655 1.559.644 2.552-.009 1.046-.26 1.997-.761 2.856-.504.867-1.188 1.517-2.057 1.947l2.951 6.766-3.626.307-2.52-6.331-1.593.092-.208 6.604-3.526.299h.009zm3.831-9.924l1.931-.092c.741-.033 1.316-.254 1.726-.65.41-.396.621-.926.627-1.595.008-.67-.177-1.23-.567-1.601-.39-.371-.951-.544-1.683-.522l-1.906.059-.137 4.398.009.006v-.003zm10.092 8.744l9.314-.792-.086-2.848-6.138.447-.043-4.07 5.378-.304-.077-2.739-5.329.24-.04-3.517 5.944-.181-.076-2.625-8.862.173.017 16.21v.006h-.002zm11.359-.968L153.898.324l3.404-.067 4.161 14.71-2.774.236-.846-3.46-3.221.222-.496 3.626-2.954.254h-.006l-.005-.003zm3.797-6.454l2.261-.13-.834-3.593a97.35 97.35 0 00-.345-1.52c-.117-.5-.208-.893-.271-1.172-.034.282-.076.675-.128 1.174a54.906 54.906 0 01-.185 1.537l-.498 3.704zm8.103 5.447l2.393-.2-.331-4.112a60.577 60.577 0 00-.245-2.393 131.78 131.78 0 00-.321-2.404 174 174 0 00-.337-2.164c-.111-.667-.21-1.23-.304-1.707l2.005 6.398 2.116-.117.775-6.412c.003.493.014 1.07.02 1.734.014.67.031 1.387.06 2.162.031.775.068 1.56.117 2.351.045.792.102 1.554.17 2.285l.379 4.03 2.259-.193L170.393.006l-2.686.05-.678 4.398a19.77 19.77 0 00-.145 1.236 8.972 8.972 0 00-.043.744 9.731 9.731 0 00-.174-.736 13.978 13.978 0 00-.379-1.213L164.807.112l-2.825.055 1.073 14.668v.006l.006-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
