import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TaskLogs } from "./graphql/types";
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
export declare type TaskLogsUpdateFormInputValues = {
    taskId?: string;
    notes?: string;
    completionData?: string;
    attachmentPath?: string;
};
export declare type TaskLogsUpdateFormValidationValues = {
    taskId?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    completionData?: ValidationFunction<string>;
    attachmentPath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskLogsUpdateFormOverridesProps = {
    TaskLogsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taskId?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    completionData?: PrimitiveOverrideProps<TextFieldProps>;
    attachmentPath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskLogsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskLogsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskLogs?: TaskLogs;
    onSubmit?: (fields: TaskLogsUpdateFormInputValues) => TaskLogsUpdateFormInputValues;
    onSuccess?: (fields: TaskLogsUpdateFormInputValues) => void;
    onError?: (fields: TaskLogsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskLogsUpdateFormInputValues) => TaskLogsUpdateFormInputValues;
    onValidate?: TaskLogsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskLogsUpdateForm(props: TaskLogsUpdateFormProps): React.ReactElement;
