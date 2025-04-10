/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6GgaEV8wA3NAjSPNQQE37W
// Component: _V8L3SCxePZg

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

import ButtonMainOutline from "../../ButtonMainOutline"; // plasmic-import: pZPvFfGgHk8v/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6GgaEV8wA3NAjSPNQQE37W/projectcss
import sty from "./PlasmicLayoutFullWrap.module.css"; // plasmic-import: _V8L3SCxePZg/css

import GCurvedCornerIcon from "./icons/PlasmicIcon__GCurvedCorner"; // plasmic-import: xBHjxIupafBj/icon

createPlasmicElementProxy;

export type PlasmicLayoutFullWrap__VariantMembers = {};
export type PlasmicLayoutFullWrap__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayoutFullWrap__VariantsArgs;
export const PlasmicLayoutFullWrap__VariantProps = new Array<VariantPropType>();

export type PlasmicLayoutFullWrap__ArgsType = {
  sectionTitle?: string;
  sectionContent?: string;
};
type ArgPropType = keyof PlasmicLayoutFullWrap__ArgsType;
export const PlasmicLayoutFullWrap__ArgProps = new Array<ArgPropType>(
  "sectionTitle",
  "sectionContent"
);

export type PlasmicLayoutFullWrap__OverridesType = {
  layoutFullWrap?: Flex__<"div">;
  layoutFullContain?: Flex__<"div">;
  layoutFullContentWrap?: Flex__<"div">;
  layoutFullContent?: Flex__<"div">;
  textWrap?: Flex__<"div">;
  title?: Flex__<"div">;
  v03Divider?: Flex__<"div">;
  hr?: Flex__<"div">;
  textWrap2?: Flex__<"div">;
  text?: Flex__<"div">;
  buttonMainOutline?: Flex__<typeof ButtonMainOutline>;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultLayoutFullWrapProps {
  sectionTitle?: string;
  sectionContent?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayoutFullWrap__RenderFunc(props: {
  variants: PlasmicLayoutFullWrap__VariantsArgs;
  args: PlasmicLayoutFullWrap__ArgsType;
  overrides: PlasmicLayoutFullWrap__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          sectionTitle: "text",
          sectionContent: "Text"
        },
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
    <div
      data-plasmic-name={"layoutFullWrap"}
      data-plasmic-override={overrides.layoutFullWrap}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.layoutFullWrap
      )}
    >
      <div
        data-plasmic-name={"layoutFullContain"}
        data-plasmic-override={overrides.layoutFullContain}
        className={classNames(projectcss.all, sty.layoutFullContain)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"layoutFullContentWrap"}
          data-plasmic-override={overrides.layoutFullContentWrap}
          hasGap={true}
          className={classNames(projectcss.all, sty.layoutFullContentWrap)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"layoutFullContent"}
            data-plasmic-override={overrides.layoutFullContent}
            hasGap={true}
            className={classNames(projectcss.all, sty.layoutFullContent)}
          >
            <div
              data-plasmic-name={"textWrap"}
              data-plasmic-override={overrides.textWrap}
              className={classNames(projectcss.all, sty.textWrap)}
            >
              <div
                data-plasmic-name={"title"}
                data-plasmic-override={overrides.title}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.title
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.sectionTitle;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "The MARA Difference";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"v03Divider"}
              data-plasmic-override={overrides.v03Divider}
              hasGap={true}
              className={classNames(projectcss.all, sty.v03Divider)}
            >
              <div
                data-plasmic-name={"hr"}
                data-plasmic-override={overrides.hr}
                className={classNames(projectcss.all, sty.hr)}
              />
            </Stack__>
            <div
              data-plasmic-name={"textWrap2"}
              data-plasmic-override={overrides.textWrap2}
              className={classNames(projectcss.all, sty.textWrap2)}
            >
              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                <React.Fragment>
                  {(() => {
                    try {
                      return $props.sectionContent;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return "MARA (NASDAQ:MARA) is a global leader in digital asset compute that develops and deploys innovative technologies to build a more sustainable and inclusive future.\n\nMARA secures the world\u2019s preeminent blockchain ledger and supports the energy transformation by converting clean, stranded, or otherwise underutilized energy into economic value.";
                      }
                      throw e;
                    }
                  })()}
                </React.Fragment>
              </div>
            </div>
          </Stack__>
          <ButtonMainOutline
            data-plasmic-name={"buttonMainOutline"}
            data-plasmic-override={overrides.buttonMainOutline}
            className={classNames("__wab_instance", sty.buttonMainOutline)}
            ctaText={"Learn More"}
          />
        </Stack__>
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <GCurvedCornerIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  layoutFullWrap: [
    "layoutFullWrap",
    "layoutFullContain",
    "layoutFullContentWrap",
    "layoutFullContent",
    "textWrap",
    "title",
    "v03Divider",
    "hr",
    "textWrap2",
    "text",
    "buttonMainOutline",
    "freeBox",
    "svg"
  ],
  layoutFullContain: [
    "layoutFullContain",
    "layoutFullContentWrap",
    "layoutFullContent",
    "textWrap",
    "title",
    "v03Divider",
    "hr",
    "textWrap2",
    "text",
    "buttonMainOutline",
    "freeBox",
    "svg"
  ],
  layoutFullContentWrap: [
    "layoutFullContentWrap",
    "layoutFullContent",
    "textWrap",
    "title",
    "v03Divider",
    "hr",
    "textWrap2",
    "text",
    "buttonMainOutline"
  ],
  layoutFullContent: [
    "layoutFullContent",
    "textWrap",
    "title",
    "v03Divider",
    "hr",
    "textWrap2",
    "text"
  ],
  textWrap: ["textWrap", "title"],
  title: ["title"],
  v03Divider: ["v03Divider", "hr"],
  hr: ["hr"],
  textWrap2: ["textWrap2", "text"],
  text: ["text"],
  buttonMainOutline: ["buttonMainOutline"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  layoutFullWrap: "div";
  layoutFullContain: "div";
  layoutFullContentWrap: "div";
  layoutFullContent: "div";
  textWrap: "div";
  title: "div";
  v03Divider: "div";
  hr: "div";
  textWrap2: "div";
  text: "div";
  buttonMainOutline: typeof ButtonMainOutline;
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayoutFullWrap__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayoutFullWrap__VariantsArgs;
    args?: PlasmicLayoutFullWrap__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayoutFullWrap__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLayoutFullWrap__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLayoutFullWrap__ArgProps,
          internalVariantPropNames: PlasmicLayoutFullWrap__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayoutFullWrap__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "layoutFullWrap") {
    func.displayName = "PlasmicLayoutFullWrap";
  } else {
    func.displayName = `PlasmicLayoutFullWrap.${nodeName}`;
  }
  return func;
}

export const PlasmicLayoutFullWrap = Object.assign(
  // Top-level PlasmicLayoutFullWrap renders the root element
  makeNodeComponent("layoutFullWrap"),
  {
    // Helper components rendering sub-elements
    layoutFullContain: makeNodeComponent("layoutFullContain"),
    layoutFullContentWrap: makeNodeComponent("layoutFullContentWrap"),
    layoutFullContent: makeNodeComponent("layoutFullContent"),
    textWrap: makeNodeComponent("textWrap"),
    title: makeNodeComponent("title"),
    v03Divider: makeNodeComponent("v03Divider"),
    hr: makeNodeComponent("hr"),
    textWrap2: makeNodeComponent("textWrap2"),
    text: makeNodeComponent("text"),
    buttonMainOutline: makeNodeComponent("buttonMainOutline"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicLayoutFullWrap
    internalVariantProps: PlasmicLayoutFullWrap__VariantProps,
    internalArgProps: PlasmicLayoutFullWrap__ArgProps
  }
);

export default PlasmicLayoutFullWrap;
/* prettier-ignore-end */
