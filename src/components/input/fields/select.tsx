// types
import { WithOptionFieldProps, OptionProps } from '@/components/input/types'
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
}: WithOptionFieldProps) => (
    <>
        <label className={clsx('col-span-full md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>
        <div className="col-span-full md:col-span-2">
            <select
                className="select select-bordered  block w-full"
                {...register(name)}
            >
                <option disabled value="">
                    選択してください
                </option>
                {options?.map((option) => (
                    <option value={option.value} key={'select-' + option.label}>
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
