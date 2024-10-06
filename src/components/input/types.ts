export type DefaultFieldProps = {
    register: any
    name: string
    label: string
    placeholder?: string
    required?: boolean
    className?: string
    errors: any
}

export interface TextFieldProps extends DefaultFieldProps {}

export interface TextAreaProps extends DefaultFieldProps {
    rows?: number
}

export interface WithOptionFieldProps extends DefaultFieldProps {
    options?: { label: string; value: string }[] | string[]
}

export interface DateFieldProps extends DefaultFieldProps {}
export interface TimeFieldProps extends DefaultFieldProps {}
export interface DateTimeFieldProps extends DefaultFieldProps {}
