'use client'

// types
import type { InputFieldProps } from '@/const/form'
// react
import { useState, useCallback } from 'react'
// clsx
import clsx from 'clsx'
// react-hool-form
import { useForm } from 'react-hook-form'
//yup
import * as yup from 'yup'
import { jpConfig } from '@/lib/yup.locale'

export type Status = 'initial' | 'loading' | 'failure' | 'sent'

const isObjectEmpty = (obj: any) => Boolean(Object.keys(obj).length)

interface FormBuilderProps {
    fields: InputFieldProps[]
}

// const API_ENDPOINT =
//     'https://docs.google.com/forms/u/0/d/e/1FAIpQLSef0lyI1bMqQRlX6Yh2fobh9-4pz8WtLs7CjssIC9x6QGpqNA/formResponse'

const FormBuilder = ({ fields }: FormBuilderProps) => {
    const [status, setStatus] = useState<Status>('initial')
    const defaultValues = fields.map((f) => ({ [f.name]: '', confirm: false }))

    const schema = yup
        .object({
            confirm: yup
                .bool()
                .default(false)
                .required()
                .oneOf(
                    [true],
                    'プライバシーポリシーを確認してチェックマークを押してください。'
                ),
        })
        .required()
    yup.setLocale(jpConfig)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        criteriaMode: 'all',
        mode: 'all',
    })

    const onSubmit = useCallback(async (data: any) => {
        setStatus('loading')
        const formData = new FormData()

        Object.keys(data).forEach((key) => {
            formData.append(key, data[key])
        })

        try {
            console.log('formData', formData)
            setStatus('sent')
            // await fetch(API_ENDPOINT, {
            //     method: 'POST',
            //     body: formData,
            // })
            //     .then(async (response) => {
            //         const json: any = await response.json()
            //         console.log(json)
            //         json.code === 200 ? setStatus('sent') : setStatus('failure')
            //     })
            //     .catch(() => {
            //         setStatus('failure')
            //     })
        } catch (error) {
            setStatus('failure')
        }
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="inner">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
                {fields.map((f: any) => (
                    <f.component
                        key={f.label}
                        register={register}
                        label={f.label}
                        name={f.name}
                        placeholder={f.placeholder}
                        required={f.required}
                        className={f.className}
                        options={f.options}
                        rows={f.rows}
                        errors={errors}
                    />
                ))}
                <button
                    type="submit"
                    className="btn btn-wide btn-primary mx-auto col-span-full mt-5"
                    disabled={
                        ['sent', 'failure'].includes(status) ||
                        isObjectEmpty(errors)
                    }
                >
                    {['loading'].includes(status) && (
                        <span className="loading loading-spinner" />
                    )}
                    {status === 'initial' && '送信'}
                    {status === 'loading' && '送信中です'}
                    {status === 'sent' && '送信完了しました'}
                    {status === 'failure' && '送信が失敗しました'}
                </button>
            </div>
        </form>
    )
}

export default FormBuilder
