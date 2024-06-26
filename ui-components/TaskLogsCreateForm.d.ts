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
export declare type TaskLogsCreateFormInputValues = {
    taskId?: string;
    notes?: string;
    completionDate?: string;
    attachmentPath?: string;
};
export declare type TaskLogsCreateFormValidationValues = {
    taskId?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    completionDate?: ValidationFunction<string>;
    attachmentPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskLogsCreateFormOverridesProps = {
    TaskLogsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taskId?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    completionDate?: PrimitiveOverrideProps<TextFieldProps>;
    attachmentPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskLogsCreateFormProps = React.PropsWithChildren<{
    overrides?: TaskLogsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TaskLogsCreateFormInputValues) => TaskLogsCreateFormInputValues;
    onSuccess?: (fields: TaskLogsCreateFormInputValues) => void;
    onError?: (fields: TaskLogsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskLogsCreateFormInputValues) => TaskLogsCreateFormInputValues;
    onValidate?: TaskLogsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TaskLogsCreateForm(props: TaskLogsCreateFormProps): React.ReactElement;
