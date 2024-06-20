import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tasks } from "./graphql/types";
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
export declare type TasksUpdateFormInputValues = {
    task?: string;
    lastCompletedDate?: string;
    howOften?: number;
    unitOfTime?: string;
};
export declare type TasksUpdateFormValidationValues = {
    task?: ValidationFunction<string>;
    lastCompletedDate?: ValidationFunction<string>;
    howOften?: ValidationFunction<number>;
    unitOfTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TasksUpdateFormOverridesProps = {
    TasksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    task?: PrimitiveOverrideProps<TextFieldProps>;
    lastCompletedDate?: PrimitiveOverrideProps<TextFieldProps>;
    howOften?: PrimitiveOverrideProps<TextFieldProps>;
    unitOfTime?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type TasksUpdateFormProps = React.PropsWithChildren<{
    overrides?: TasksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tasks?: Tasks;
    onSubmit?: (fields: TasksUpdateFormInputValues) => TasksUpdateFormInputValues;
    onSuccess?: (fields: TasksUpdateFormInputValues) => void;
    onError?: (fields: TasksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TasksUpdateFormInputValues) => TasksUpdateFormInputValues;
    onValidate?: TasksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TasksUpdateForm(props: TasksUpdateFormProps): React.ReactElement;
