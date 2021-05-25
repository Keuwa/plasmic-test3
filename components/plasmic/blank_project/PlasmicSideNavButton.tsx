// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3UGM9QESBjorrc4Kg2zYnR
// Component: iHNJiietho
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
import * as sty from "./PlasmicSideNavButton.module.css"; // plasmic-import: iHNJiietho/css

export type PlasmicSideNavButton__VariantMembers = {};

export type PlasmicSideNavButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideNavButton__VariantsArgs;
export const PlasmicSideNavButton__VariantProps = new Array<VariantPropType>();

export type PlasmicSideNavButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSideNavButton__ArgsType;
export const PlasmicSideNavButton__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicSideNavButton__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSideNavButtonProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicSideNavButton__RenderFunc(props: {
  variants: PlasmicSideNavButton__VariantsArgs;
  args: PlasmicSideNavButton__ArgsType;
  overrides: PlasmicSideNavButton__OverridesType;
  dataFetches?: PlasmicSideNavButton__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        href={"https://www.plasmic.app/" as const}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(defaultcss.all, sty.svg__ufxX5)}
              role={"img"}
            />
          ),

          value: args.children
        })}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideNavButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideNavButton__VariantsArgs;
    args?: PlasmicSideNavButton__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicSideNavButton__Fetches;
  } & Omit<PlasmicSideNavButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSideNavButton__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSideNavButton__ArgProps,
      internalVariantPropNames: PlasmicSideNavButton__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicSideNavButton__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSideNavButton";
  } else {
    func.displayName = `PlasmicSideNavButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSideNavButton = Object.assign(
  // Top-level PlasmicSideNavButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSideNavButton
    internalVariantProps: PlasmicSideNavButton__VariantProps,
    internalArgProps: PlasmicSideNavButton__ArgProps
  }
);

export default PlasmicSideNavButton;
/* prettier-ignore-end */
