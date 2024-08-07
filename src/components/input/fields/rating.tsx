// types
import { } from '@/components/input/types'
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
}: any) => (
    <>
        <label className={clsx('col-span-1 md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>

        <div className="col-span-2 md:col-span-2">
            <div className="rating">
                {options.map((option: any) => (
                    <input
                        key={option}
                        name={name}
                        value={option}
                        // checked={option == '1'}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                    />
                ))}
            </div>
        </div>
    </>
)
