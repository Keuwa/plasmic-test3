// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3UGM9QESBjorrc4Kg2zYnR
// Component: za4D064K-t
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 3UGM9QESBjorrc4Kg2zYnR/projectcss
import * as sty from "./PlasmicButtonPrimary.module.css"; // plasmic-import: za4D064K-t/css

import BaselineSend24PxsvgIcon from "./icons/PlasmicIcon__BaselineSend24Pxsvg"; // plasmic-import: S_l3w6bm5/icon

export type PlasmicButtonPrimary__VariantMembers = {
  wIcon: "wIcon";
  iconOnly: "iconOnly";
  size: "large" | "medium" | "tiny";
};

export type PlasmicButtonPrimary__VariantsArgs = {
  wIcon?: SingleBooleanChoiceArg<"wIcon">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  size?: MultiChoiceArg<"large" | "medium" | "tiny">;
};

type VariantPropType = keyof PlasmicButtonPrimary__VariantsArgs;
export const PlasmicButtonPrimary__VariantProps = new Array<VariantPropType>(
  "wIcon",
  "iconOnly",
  "size"
);

export type PlasmicButtonPrimary__ArgsType = {
  label?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicButtonPrimary__ArgsType;
export const PlasmicButtonPrimary__ArgProps = new Array<ArgPropType>(
  "label",
  "children"
);

export type PlasmicButtonPrimary__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<"button">;
};

export interface DefaultButtonPrimaryProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  wIcon?: SingleBooleanChoiceArg<"wIcon">;
  iconOnly?: SingleBooleanChoiceArg<"iconOnly">;
  size?: MultiChoiceArg<"large" | "medium" | "tiny">;
  className?: string;
}

function PlasmicButtonPrimary__RenderFunc(props: {
  variants: PlasmicButtonPrimary__VariantsArgs;
  args: PlasmicButtonPrimary__ArgsType;
  overrides: PlasmicButtonPrimary__OverridesType;
  dataFetches?: PlasmicButtonPrimary__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__iconOnly]: hasVariant(variants, "iconOnly", "iconOnly")
      })}
    >
      <p.Stack
        as={"button"}
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        hasGap={hasVariant(variants, "wIcon", "wIcon") ? true : false}
        className={classNames(defaultcss.button, sty.button, {
          [sty.button__iconOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
          [sty.button__iconOnly_size_large]:
            hasVariant(variants, "iconOnly", "iconOnly") &&
            hasVariant(variants, "size", "large"),
          [sty.button__iconOnly_size_medium]:
            hasVariant(variants, "iconOnly", "iconOnly") &&
            hasVariant(variants, "size", "medium"),
          [sty.button__iconOnly_size_tiny]:
            hasVariant(variants, "iconOnly", "iconOnly") &&
            hasVariant(variants, "size", "tiny"),
          [sty.button__size_large]: hasVariant(variants, "size", "large"),
          [sty.button__size_medium]: hasVariant(variants, "size", "medium"),
          [sty.button__size_tiny]: hasVariant(variants, "size", "tiny"),
          [sty.button__wIcon]: hasVariant(variants, "wIcon", "wIcon")
        })}
      >
        {(hasVariant(variants, "iconOnly", "iconOnly") ? false : true)
          ? p.renderPlasmicSlot({
              defaultContents: "Click Me",
              value: args.label,
              className: classNames(sty.slotLabel, {
                [sty.slotLabel__iconOnly]: hasVariant(
                  variants,
                  "iconOnly",
                  "iconOnly"
                ),
                [sty.slotLabel__wIcon]: hasVariant(variants, "wIcon", "wIcon")
              })
            })
          : null}
        {(
          hasVariant(variants, "iconOnly", "iconOnly")
            ? true
            : hasVariant(variants, "wIcon", "wIcon")
            ? true
            : false
        )
          ? p.renderPlasmicSlot({
              defaultContents: (
                <BaselineSend24PxsvgIcon
                  className={classNames(defaultcss.all, sty.svg__kyj9B)}
                  role={"img"}
                />
              ),

              value: args.children
            })
          : null}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButtonPrimary__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButtonPrimary__VariantsArgs;
    args?: PlasmicButtonPrimary__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicButtonPrimary__Fetches;
  } & Omit<PlasmicButtonPrimary__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButtonPrimary__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButtonPrimary__ArgProps,
      internalVariantPropNames: PlasmicButtonPrimary__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicButtonPrimary__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButtonPrimary";
  } else {
    func.displayName = `PlasmicButtonPrimary.${nodeName}`;
  }
  return func;
}

export const PlasmicButtonPrimary = Object.assign(
  // Top-level PlasmicButtonPrimary renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicButtonPrimary
    internalVariantProps: PlasmicButtonPrimary__VariantProps,
    internalArgProps: PlasmicButtonPrimary__ArgProps
  }
);

export default PlasmicButtonPrimary;
/* prettier-ignore-end */
