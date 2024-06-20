import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type TasksCreateFormInputValues = {
    task?: string;
    lastCompletedDate?: string;
    howOften?: number;
    unitOfTime?: string;
};
export declare type TasksCreateFormValidationValues = {
    task?: ValidationFunction<string>;
    lastCompletedDate?: ValidationFunction<string>;
    howOften?: ValidationFunction<number>;
    unitOfTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasksCreateFormOverridesProps = {
    TasksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    task?: PrimitiveOverrideProps<TextFieldProps>;
    lastCompletedDate?: PrimitiveOverrideProps<TextFieldProps>;
    howOften?: PrimitiveOverrideProps<TextFieldProps>;
    unitOfTime?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TasksCreateFormProps = React.PropsWithChildren<{
    overrides?: TasksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onSuccess?: (fields: TasksCreateFormInputValues) => void;
    onError?: (fields: TasksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TasksCreateFormInputValues) => TasksCreateFormInputValues;
    onValidate?: TasksCreateFormValidationValues;
} & React.CSSProperties>;
export default function TasksCreateForm(props: TasksCreateFormProps): React.ReactElement;
