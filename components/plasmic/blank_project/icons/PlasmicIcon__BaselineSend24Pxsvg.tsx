// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaselineSend24PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaselineSend24PxsvgIcon(props: BaselineSend24PxsvgIconProps) {
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
        data-name={"TracÃ© 378"}
        d={"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}
        fill={"currentColor"}
      ></path>

      <path data-name={"TracÃ© 379"} d={"M0 0h24v24H0z"} fill={"none"}></path>
    </svg>
  );
}

export default BaselineSend24PxsvgIcon;
/* prettier-ignore-end */
