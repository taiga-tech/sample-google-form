export interface TextFieldProps {
    register: any
    name: string
    label: string
    placeholder?: string
    required?: boolean
    className?: string
    errors: any
}

export interface TextAreaProps extends TextFieldProps {
    rows?: number
}

export interface SelectFieldProps extends TextFieldProps {
    options: any
}

export type CheckboxProps = TextFieldProps
