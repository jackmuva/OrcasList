import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TaskDetails } from "./graphql/types";
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
export declare type TaskDetailsUpdateFormInputValues = {
    taskDescriptionId?: string;
    notes?: string;
};
export declare type TaskDetailsUpdateFormValidationValues = {
    taskDescriptionId?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TaskDetailsUpdateFormOverridesProps = {
    TaskDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    taskDescriptionId?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TaskDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TaskDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    taskDetails?: TaskDetails;
    onSubmit?: (fields: TaskDetailsUpdateFormInputValues) => TaskDetailsUpdateFormInputValues;
    onSuccess?: (fields: TaskDetailsUpdateFormInputValues) => void;
    onError?: (fields: TaskDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TaskDetailsUpdateFormInputValues) => TaskDetailsUpdateFormInputValues;
    onValidate?: TaskDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TaskDetailsUpdateForm(props: TaskDetailsUpdateFormProps): React.ReactElement;
