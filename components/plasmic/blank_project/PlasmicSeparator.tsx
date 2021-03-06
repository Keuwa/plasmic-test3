// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3UGM9QESBjorrc4Kg2zYnR
// Component: bPy7gX0I0X
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
import * as sty from "./PlasmicSeparator.module.css"; // plasmic-import: bPy7gX0I0X/css

export type PlasmicSeparator__VariantMembers = {
  sideBarSeparator: "sideBarSeparator";
  navBarSeparator: "navBarSeparator";
};

export type PlasmicSeparator__VariantsArgs = {
  sideBarSeparator?: SingleBooleanChoiceArg<"sideBarSeparator">;
  navBarSeparator?: SingleBooleanChoiceArg<"navBarSeparator">;
};

type VariantPropType = keyof PlasmicSeparator__VariantsArgs;
export const PlasmicSeparator__VariantProps = new Array<VariantPropType>(
  "sideBarSeparator",
  "navBarSeparator"
);

export type PlasmicSeparator__ArgsType = {};
type ArgPropType = keyof PlasmicSeparator__ArgsType;
export const PlasmicSeparator__ArgProps = new Array<ArgPropType>();

export type PlasmicSeparator__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultSeparatorProps {
  sideBarSeparator?: SingleBooleanChoiceArg<"sideBarSeparator">;
  navBarSeparator?: SingleBooleanChoiceArg<"navBarSeparator">;
  className?: string;
}

function PlasmicSeparator__RenderFunc(props: {
  variants: PlasmicSeparator__VariantsArgs;
  args: PlasmicSeparator__ArgsType;
  overrides: PlasmicSeparator__OverridesType;
  dataFetches?: PlasmicSeparator__Fetches;
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
        [sty.root__navBarSeparator]: hasVariant(
          variants,
          "navBarSeparator",
          "navBarSeparator"
        ),
        [sty.root__sideBarSeparator]: hasVariant(
          variants,
          "sideBarSeparator",
          "sideBarSeparator"
        )
      })}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box, {
          [sty.box__navBarSeparator]: hasVariant(
            variants,
            "navBarSeparator",
            "navBarSeparator"
          ),
          [sty.box__sideBarSeparator]: hasVariant(
            variants,
            "sideBarSeparator",
            "sideBarSeparator"
          )
        })}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSeparator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSeparator__VariantsArgs;
    args?: PlasmicSeparator__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSeparator__Fetches;
  } & Omit<PlasmicSeparator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSeparator__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSeparator__ArgProps,
      internalVariantPropNames: PlasmicSeparator__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSeparator__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSeparator";
  } else {
    func.displayName = `PlasmicSeparator.${nodeName}`;
  }
  return func;
}

export const PlasmicSeparator = Object.assign(
  // Top-level PlasmicSeparator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicSeparator
    internalVariantProps: PlasmicSeparator__VariantProps,
    internalArgProps: PlasmicSeparator__ArgProps
  }
);

export default PlasmicSeparator;
/* prettier-ignore-end */
