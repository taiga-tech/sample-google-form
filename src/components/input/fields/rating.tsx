// types
import { WithOptionFieldProps, OptionProps } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const RatingField = ({
    register,
    name,
    label,
    options,
    required = false,
    className,
    errors,
}: WithOptionFieldProps) => (
    <>
        <label className={clsx('col-span-1 md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>

        <div className="col-span-2 md:col-span-2">
            <div className="rating">
                {options?.map((option) => (
                    <input
                        key={'rate-' + option.label}
                        type="radio"
                        value={option.value}
                        checked={option.value === '1'}
                        className="mask mask-star-2 bg-orange-400"
                        {...register(name)}
                    />
                ))}
            </div>
        </div>
    </>
)
