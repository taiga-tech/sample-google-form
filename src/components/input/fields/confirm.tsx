// types
import {} from /*ConfirmProps*/ '@/components/input/types'
// clsx
import clsx from 'clsx'

export const Confirm = (
    {
        register,
        name,
        label,
        required = false,
        className,
        errors,
    }: any /*ConfirmProps*/
) => (
    <label
        className={clsx('col-span-full inline-flex cursor-pointer', className)}
    >
        <input type="checkbox" className="checkbox" {...register(name)} />
        <span className="label-text ml-2">
            {label}
            {required && <span className="ml-1 text-error">*</span>}
            <span className="label-text-alt block text-error">
                {errors[name] && errors[name].message}
            </span>
        </span>
    </label>
)
