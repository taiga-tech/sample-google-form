// types
import { WithOptionFieldProps, OptionProps } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const CheckboxField = ({
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
        <div className="col-span-full md:col-span-2 grid grid-cols-4 gap-4">
            {options?.map((option) => (
                <label
                    key={'check-' + option.label}
                    className="label cursor-pointer col-span-2 lg:col-span-1"
                >
                    <span className="label-text">{option.label}</span>
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={option.value}
                        {...register(name)}
                    />
                </label>
            ))}
        </div>
    </>
)
