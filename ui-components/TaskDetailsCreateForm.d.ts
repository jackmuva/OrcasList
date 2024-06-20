import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TaskDetailsCreateFormInputValues = {
    taskDescriptionId?: string;
    notes?: string;
};
export declare type TaskDetailsCreateFormValidationValues = {
    taskDescriptionId?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskDetailsCreateFormOverridesProps = {
    TaskDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taskDescriptionId?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskDetailsCreateFormInputValues) => TaskDetailsCreateFormInputValues;
    onSuccess?: (fields: TaskDetailsCreateFormInputValues) => void;
    onError?: (fields: TaskDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskDetailsCreateFormInputValues) => TaskDetailsCreateFormInputValues;
    onValidate?: TaskDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskDetailsCreateForm(props: TaskDetailsCreateFormProps): React.ReactElement;
