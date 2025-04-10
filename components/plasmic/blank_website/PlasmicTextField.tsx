/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6GgaEV8wA3NAjSPNQQE37W
// Component: 9yVZznAgixZb

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

import { BaseTextField } from "@plasmicpkgs/react-aria/skinny/registerTextField";
import Label from "../../Label"; // plasmic-import: s_tM3Bce_S8C/component
import TextInput from "../../TextInput"; // plasmic-import: WFxcD-A0CuVm/component
import TextAreaInput from "../../TextAreaInput"; // plasmic-import: GXCLCrAHlWjI/component
import Description from "../../Description"; // plasmic-import: MM3CHCkctW97/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6GgaEV8wA3NAjSPNQQE37W/projectcss
import sty from "./PlasmicTextField.module.css"; // plasmic-import: 9yVZznAgixZb/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: naWR3dndDZx1/icon

createPlasmicElementProxy;

export type PlasmicTextField__VariantMembers = {
  multiLine: "multiLine";
  iconStart: "iconStart";
  iconEnd: "iconEnd";
};
export type PlasmicTextField__VariantsArgs = {
  multiLine?: SingleBooleanChoiceArg<"multiLine">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
};
type VariantPropType = keyof PlasmicTextField__VariantsArgs;
export const PlasmicTextField__VariantProps = new Array<VariantPropType>(
  "multiLine",
  "iconStart",
  "iconEnd"
);

export type PlasmicTextField__ArgsType = {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  type?: "text" | "search" | "url" | "tel" | "email" | "password";
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  autoComplete?:
    | "on"
    | "off"
    | "name"
    | "honorific-prefix"
    | "given-name"
    | "additional-name"
    | "family-name"
    | "honorific-suffix"
    | "nickname"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "one-time-code"
    | "organization-title"
    | "organization"
    | "street-address"
    | "shipping"
    | "billing"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "address-level4"
    | "address-level3"
    | "address-level2"
    | "address-level1"
    | "country"
    | "country-name"
    | "postal-code"
    | "cc-name"
    | "cc-given-name"
    | "cc-additional-name"
    | "cc-family-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc"
    | "cc-type"
    | "transaction-currency"
    | "transaction-amount"
    | "language"
    | "bday"
    | "bday-day"
    | "bday-month"
    | "bday-year"
    | "sex"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-area-code"
    | "tel-local"
    | "tel-local-suffix"
    | "tel-local-prefix"
    | "tel-extension"
    | "impp"
    | "url"
    | "photo"
    | "webauthn";
  ariaLabel?: string;
  onChange?: (val: string) => void;
  label?: React.ReactNode;
  start?: React.ReactNode;
  end?: React.ReactNode;
  description?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTextField__ArgsType;
export const PlasmicTextField__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "showLabel",
  "showDescription",
  "defaultValue",
  "disabled",
  "readOnly",
  "autoFocus",
  "type",
  "inputMode",
  "autoComplete",
  "ariaLabel",
  "onChange",
  "label",
  "start",
  "end",
  "description"
);

export type PlasmicTextField__OverridesType = {
  ariaTextField?: Flex__<typeof BaseTextField>;
  label?: Flex__<typeof Label>;
  textInput?: Flex__<typeof TextInput>;
  textAreaInput?: Flex__<typeof TextAreaInput>;
  description?: Flex__<typeof Description>;
};

export interface DefaultTextFieldProps {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  type?: "text" | "search" | "url" | "tel" | "email" | "password";
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  autoComplete?:
    | "on"
    | "off"
    | "name"
    | "honorific-prefix"
    | "given-name"
    | "additional-name"
    | "family-name"
    | "honorific-suffix"
    | "nickname"
    | "email"
    | "username"
    | "new-password"
    | "current-password"
    | "one-time-code"
    | "organization-title"
    | "organization"
    | "street-address"
    | "shipping"
    | "billing"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "address-level4"
    | "address-level3"
    | "address-level2"
    | "address-level1"
    | "country"
    | "country-name"
    | "postal-code"
    | "cc-name"
    | "cc-given-name"
    | "cc-additional-name"
    | "cc-family-name"
    | "cc-number"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-csc"
    | "cc-type"
    | "transaction-currency"
    | "transaction-amount"
    | "language"
    | "bday"
    | "bday-day"
    | "bday-month"
    | "bday-year"
    | "sex"
    | "tel"
    | "tel-country-code"
    | "tel-national"
    | "tel-area-code"
    | "tel-local"
    | "tel-local-suffix"
    | "tel-local-prefix"
    | "tel-extension"
    | "impp"
    | "url"
    | "photo"
    | "webauthn";
  ariaLabel?: string;
  onChange?: (val: string) => void;
  label?: React.ReactNode;
  start?: React.ReactNode;
  end?: React.ReactNode;
  description?: React.ReactNode;
  multiLine?: SingleBooleanChoiceArg<"multiLine">;
  iconStart?: SingleBooleanChoiceArg<"iconStart">;
  iconEnd?: SingleBooleanChoiceArg<"iconEnd">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTextField__RenderFunc(props: {
  variants: PlasmicTextField__VariantsArgs;
  args: PlasmicTextField__ArgsType;
  overrides: PlasmicTextField__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showDescription: false,
          readOnly: false,
          autoFocus: false
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaTextField.value",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],

        onChangeProp: "onChange"
      },
      {
        path: "multiLine",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.multiLine
      },
      {
        path: "iconStart",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconStart
      },
      {
        path: "iconEnd",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.iconEnd
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "textAreaInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    disabled: false,
    readonly: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseTextField
      data-plasmic-name={"ariaTextField"}
      data-plasmic-override={overrides.ariaTextField}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoComplete={args.autoComplete}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.ariaTextField,
        {
          [sty.ariaTextFieldiconEnd]: hasVariant($state, "iconEnd", "iconEnd"),
          [sty.ariaTextFieldiconEnd_iconStart]:
            hasVariant($state, "iconStart", "iconStart") &&
            hasVariant($state, "iconEnd", "iconEnd"),
          [sty.ariaTextFieldiconStart]: hasVariant(
            $state,
            "iconStart",
            "iconStart"
          ),
          [sty.ariaTextFieldmultiLine]: hasVariant(
            $state,
            "multiLine",
            "multiLine"
          )
        }
      )}
      defaultValue={args.defaultValue}
      inputMode={args.inputMode}
      isDisabled={args.disabled}
      isReadOnly={args.readOnly}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaTextField", "value"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      type={args.type}
      value={generateStateValueProp($state, ["ariaTextField", "value"])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label, {
            [sty.labelmultiLine]: hasVariant($state, "multiLine", "multiLine")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      <div
        className={classNames(projectcss.all, sty.freeBox__zeMbY, {
          [sty.freeBoxiconEnd__zeMbYFgiXo]: hasVariant(
            $state,
            "iconEnd",
            "iconEnd"
          ),
          [sty.freeBoxiconStart__zeMbYwf4Yf]: hasVariant(
            $state,
            "iconStart",
            "iconStart"
          ),
          [sty.freeBoxmultiLine__zeMbYAzz3O]: hasVariant(
            $state,
            "multiLine",
            "multiLine"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__n0V9Z, {
            [sty.freeBoxiconStart__n0V9ZWf4Yf]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            ),
            [sty.freeBoxmultiLine__n0V9ZAzz3O]: hasVariant(
              $state,
              "multiLine",
              "multiLine"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CircleIcon
                className={classNames(projectcss.all, sty.svg___9Oige)}
                role={"img"}
              />
            ),

            value: args.start,
            className: classNames(sty.slotTargetStart, {
              [sty.slotTargetStarticonStart]: hasVariant(
                $state,
                "iconStart",
                "iconStart"
              )
            })
          })}
        </div>
        {(hasVariant($state, "multiLine", "multiLine") ? false : true) ? (
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            disabled={$ccVariants["disabled"] ? true : undefined}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, ["textInput", "value"]).apply(
                null,
                eventArgs
              );

              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
            padded={
              hasVariant($state, "iconStart", "iconStart") &&
              hasVariant($state, "iconEnd", "iconEnd")
                ? ["right", "left"]
                : hasVariant($state, "iconEnd", "iconEnd")
                ? ["right"]
                : hasVariant($state, "iconStart", "iconStart")
                ? ["left"]
                : undefined
            }
            placeholder={args.placeholder}
          />
        ) : null}
        {(hasVariant($state, "multiLine", "multiLine") ? true : false) ? (
          <TextAreaInput
            data-plasmic-name={"textAreaInput"}
            data-plasmic-override={overrides.textAreaInput}
            className={classNames("__wab_instance", {
              [sty.textAreaInputmultiLine]: hasVariant(
                $state,
                "multiLine",
                "multiLine"
              )
            })}
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, [
                "textAreaInput",
                "value"
              ]).apply(null, eventArgs);

              if (
                eventArgs.length > 1 &&
                eventArgs[1] &&
                eventArgs[1]._plasmic_state_init_
              ) {
                return;
              }
            }}
            padded={
              hasVariant($state, "iconStart", "iconStart") &&
              hasVariant($state, "iconEnd", "iconEnd")
                ? ["right", "left"]
                : hasVariant($state, "iconEnd", "iconEnd")
                ? ["right"]
                : hasVariant($state, "iconStart", "iconStart")
                ? ["left"]
                : undefined
            }
            placeholder={args.placeholder}
          />
        ) : null}
        <div
          className={classNames(projectcss.all, sty.freeBox___006Fk, {
            [sty.freeBoxiconEnd___006FkFgiXo]: hasVariant(
              $state,
              "iconEnd",
              "iconEnd"
            ),
            [sty.freeBoxiconStart___006Fkwf4Yf]: hasVariant(
              $state,
              "iconStart",
              "iconStart"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <CircleIcon
                className={classNames(projectcss.all, sty.svg__o07Vr)}
                role={"img"}
              />
            ),

            value: args.end,
            className: classNames(sty.slotTargetEnd)
          })}
        </div>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
    </BaseTextField>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaTextField: [
    "ariaTextField",
    "label",
    "textInput",
    "textAreaInput",
    "description"
  ],
  label: ["label"],
  textInput: ["textInput"],
  textAreaInput: ["textAreaInput"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaTextField: typeof BaseTextField;
  label: typeof Label;
  textInput: typeof TextInput;
  textAreaInput: typeof TextAreaInput;
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTextField__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTextField__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTextField__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTextField__ArgProps,
          internalVariantPropNames: PlasmicTextField__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextField__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaTextField") {
    func.displayName = "PlasmicTextField";
  } else {
    func.displayName = `PlasmicTextField.${nodeName}`;
  }
  return func;
}

export const PlasmicTextField = Object.assign(
  // Top-level PlasmicTextField renders the root element
  makeNodeComponent("ariaTextField"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    textInput: makeNodeComponent("textInput"),
    textAreaInput: makeNodeComponent("textAreaInput"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicTextField
    internalVariantProps: PlasmicTextField__VariantProps,
    internalArgProps: PlasmicTextField__ArgProps
  }
);

export default PlasmicTextField;
/* prettier-ignore-end */
