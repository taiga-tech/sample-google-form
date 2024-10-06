// types
import { TimeFieldProps } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const TimeField = ({
    register,
    name,
    label,
    placeholder,
    required = false,
    className,
    errors,
}: TimeFieldProps) => (
    <>
        <label className={clsx('col-span-full md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>
        <div className="col-span-full md:col-span-2">
            <input
                className={clsx(
                    'input input-bordered w-full',
                    errors[name] && 'input-error focus:outline-error'
                )}
                {...register(name)}
                placeholder={placeholder}
                type="time"
            />
            <label className="label">
                <span className="label-text-alt text-error">
                    {errors[name] && errors[name].message}
                </span>
            </label>
        </div>
    </>
)
