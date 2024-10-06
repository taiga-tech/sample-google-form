// types
import { TextAreaProps } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const TextArea = ({
    register,
    name,
    label,
    placeholder,
    rows = 3,
    required = false,
    className,
    errors,
}: TextAreaProps) => (
    <>
        <label className={clsx('col-span-full md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>
        <div className="col-span-full md:col-span-2">
            <textarea
                className="textarea textarea-bordered w-full"
                placeholder={placeholder}
                rows={rows}
                {...register(name)}
            />
            <label className="label">
                <span className="label-text-alt text-error">
                    {errors[name] && errors[name].message}
                </span>
            </label>
        </div>
    </>
)
