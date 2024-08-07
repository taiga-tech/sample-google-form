// types
import { SelectFieldProps } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const SelectField = ({
    register,
    name,
    label,
    options,
    required = false,
    className,
    errors,
}: SelectFieldProps) => (
    <>
        <label className={clsx('col-span-full md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>
        <div className="col-span-full md:col-span-2">
            <select
                {...register(name)}
                className="select select-bordered  block w-full"
            >
                <option disabled value="">
                    選択してください
                </option>
                {options.map((option: any) => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <label className="label">
                <span className="label-text-alt text-error">
                    {errors[name] && errors[name].message}
                </span>
            </label>
        </div>
    </>
)
