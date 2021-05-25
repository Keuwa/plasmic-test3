// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaselineSettings20PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaselineSettings20PxsvgIcon(
  props: BaselineSettings20PxsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path data-name={"TracÃ© 129"} d={"M0 0h24v24H0z"} fill={"none"}></path>

      <path
        data-name={"TracÃ© 130"}
        d={
          "M19.481 12.975a8.113 8.113 0 00.063-.976 6.131 6.131 0 00-.075-.975l2.125-1.65a.515.515 0 00.126-.638l-2.013-3.462a.513.513 0 00-.616-.225l-2.5 1a7.376 7.376 0 00-1.7-.975l-.377-2.65a.5.5 0 00-.5-.425H9.988a.488.488 0 00-.49.425l-.377 2.65a7.574 7.574 0 00-1.7.975l-2.5-1a.5.5 0 00-.616.225L2.294 8.737a.483.483 0 00.126.638l2.125 1.65a5.858 5.858 0 00-.013 1.95l-2.125 1.65a.515.515 0 00-.126.638l2.012 3.463a.513.513 0 00.616.225l2.5-1a7.377 7.377 0 001.7.975l.377 2.65a.511.511 0 00.5.425h4.023a.48.48 0 00.49-.425l.377-2.65a7.574 7.574 0 001.7-.975l2.5 1a.5.5 0 00.616-.225l2.012-3.463a.483.483 0 00-.126-.638l-2.1-1.65zm-7.482 2.775a3.75 3.75 0 113.773-3.751 3.772 3.772 0 01-3.773 3.751z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BaselineSettings20PxsvgIcon;
/* prettier-ignore-end */
