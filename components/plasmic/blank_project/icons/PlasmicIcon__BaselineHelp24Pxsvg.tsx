// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BaselineHelp24PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BaselineHelp24PxsvgIcon(props: BaselineHelp24PxsvgIconProps) {
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

      <path data-name={"TracÃ© 745"} d={"M0 0h24v24H0z"} fill={"none"}></path>

      <path
        data-name={"TracÃ© 746"}
        d={
          "M11.999 1.999a10 10 0 1010 10 10 10 0 00-10-10zm1 17h-2v-2h2zm2.07-7.751l-.9.92a3.4 3.4 0 00-1.17 2.831h-2v-.5a4.025 4.025 0 011.17-2.83l1.24-1.26a1.955 1.955 0 00.59-1.41 2 2 0 00-4 0h-2a4 4 0 018 0 3.182 3.182 0 01-.929 2.251z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BaselineHelp24PxsvgIcon;
/* prettier-ignore-end */
