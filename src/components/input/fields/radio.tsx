// types
import { } from '@/components/input/types'
// clsx
import clsx from 'clsx'

export const RadioField = (
    {
        register,
        name,
        label,
        options,
        required = false,
        className,
        errors,
    }: any /*RadioFieldProps*/
) => (
    <>
        <label className={clsx('col-span-full md:col-span-1', className)}>
            <span className="label-text">
                {label}
                {required && <span className="ml-1 text-error">*</span>}
            </span>
        </label>
        <div className="col-span-full md:col-span-2 grid grid-cols-4 gap-4">
            {options.map((option: any) => (
                <label
                    className="label cursor-pointer col-span-2 md:col-span-1"
                    key={option.value}
                >
                    <span className="label-text">{option.label}</span>
                    <input
                        type="radio"
                        name={name}
                        className="radio"
                        value={option.value}
                    />
                </label>
            ))}
        </div>
    </>
)
