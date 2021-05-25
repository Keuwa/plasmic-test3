// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaselineSearch24PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaselineSearch24PxsvgIcon(
  props: BaselineSearch24PxsvgIconProps
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

      <path
        data-name={"TracÃ© 943"}
        d={
          "M15.5 14h-.79l-.28-.27a6.51 6.51 0 10-.7.7l.27.28v.79l5 4.99L20.49 19zm-6 0A4.5 4.5 0 1114 9.5 4.494 4.494 0 019.5 14z"
        }
        fill={"currentColor"}
      ></path>

      <path data-name={"TracÃ© 944"} d={"M0 0h24v24H0z"} fill={"none"}></path>
    </svg>
  );
}

export default BaselineSearch24PxsvgIcon;
/* prettier-ignore-end */
