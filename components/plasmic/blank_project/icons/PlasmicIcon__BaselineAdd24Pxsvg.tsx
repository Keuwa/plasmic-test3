// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaselineAdd24PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaselineAdd24PxsvgIcon(props: BaselineAdd24PxsvgIconProps) {
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
        data-name={"TracÃ© 1"}
        d={
          "M19.03 13.004h-6.026v6.025h-2.008v-6.025H4.97v-2.009h6.026V4.97h2.009v6.025h6.025z"
        }
        fill={"currentColor"}
      ></path>

      <path data-name={"TracÃ© 2"} d={"M0 0h24v24H0z"} fill={"none"}></path>
    </svg>
  );
}

export default BaselineAdd24PxsvgIcon;
/* prettier-ignore-end */
