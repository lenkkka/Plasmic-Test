/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6GgaEV8wA3NAjSPNQQE37W
// Component: sQwZRK4CPdyK

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6GgaEV8wA3NAjSPNQQE37W/projectcss
import sty from "./PlasmicArrowBtn.module.css"; // plasmic-import: sQwZRK4CPdyK/css

import ArrowRightIconWrapIcon from "./icons/PlasmicIcon__ArrowRightIconWrap"; // plasmic-import: 4HIycwZWkq14/icon

createPlasmicElementProxy;

export type PlasmicArrowBtn__VariantMembers = {};
export type PlasmicArrowBtn__VariantsArgs = {};
type VariantPropType = keyof PlasmicArrowBtn__VariantsArgs;
export const PlasmicArrowBtn__VariantProps = new Array<VariantPropType>();

export type PlasmicArrowBtn__ArgsType = {};
type ArgPropType = keyof PlasmicArrowBtn__ArgsType;
export const PlasmicArrowBtn__ArgProps = new Array<ArgPropType>();

export type PlasmicArrowBtn__OverridesType = {
  buttonArrowSmall?: Flex__<"button">;
  svg?: Flex__<"svg">;
};

export interface DefaultArrowBtnProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicArrowBtn__RenderFunc(props: {
  variants: PlasmicArrowBtn__VariantsArgs;
  args: PlasmicArrowBtn__ArgsType;
  overrides: PlasmicArrowBtn__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <button
      data-plasmic-name={"buttonArrowSmall"}
      data-plasmic-override={overrides.buttonArrowSmall}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.buttonArrowSmall
      )}
      ref={ref => {
        $refs["buttonArrowSmall"] = ref;
      }}
    >
      <ArrowRightIconWrapIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  buttonArrowSmall: ["buttonArrowSmall", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  buttonArrowSmall: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArrowBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArrowBtn__VariantsArgs;
    args?: PlasmicArrowBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArrowBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicArrowBtn__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicArrowBtn__ArgProps,
          internalVariantPropNames: PlasmicArrowBtn__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArrowBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "buttonArrowSmall") {
    func.displayName = "PlasmicArrowBtn";
  } else {
    func.displayName = `PlasmicArrowBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicArrowBtn = Object.assign(
  // Top-level PlasmicArrowBtn renders the root element
  makeNodeComponent("buttonArrowSmall"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicArrowBtn
    internalVariantProps: PlasmicArrowBtn__VariantProps,
    internalArgProps: PlasmicArrowBtn__ArgProps
  }
);

export default PlasmicArrowBtn;
/* prettier-ignore-end */
