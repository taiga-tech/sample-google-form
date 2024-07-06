'use client'

// types
import type { InputFieldProps } from '@/const/form'
// react
import { useEffect, useState } from 'react'
// clsx
import clsx from 'clsx'
// react-hool-form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
//yup
import * as yup from 'yup'
import { jpConfig } from '@/lib/yup.locale'
// lib
// import isObjectEmpty from '@/lib/is-object-empty'
// components
// import SnackBar from '@/components/base/snackbar'
// icon
// import InfoIcon from '@/svg/icon/info.svg'
// import ErrorICon from '@/svg/icon/error.svg'

export type Status = 'initial' | 'loading' | 'failure' | 'sent'

export interface FormProps {
    company: string
    name: string
    kana: string
    tel: string
    email: string
    category: string
    message: string
    confirm: boolean
}

const isObjectEmpty = (obj: any) => Boolean(Object.keys(obj).length)

interface FormBuilderProps {
    fields: InputFieldProps[]
}

const API_ENDPOINT = ''

const FormBuilder = ({ fields }: FormBuilderProps) => {
    const [status, setStatus] = useState<Status>('initial')
    const [success, setSuccess] = useState(false)
    const [faild, setFaild] = useState(false)
    const form: FormProps = {
        company: '',
        name: '',
        kana: '',
        tel: '',
        email: '',
        category: '',
        message: '',
        confirm: false,
    }

    const schema = yup
        .object({
            company: yup.string().required(),
            name: yup.string().required(),
            kana: yup.string().required(),
            tel: yup.string().required(),
            email: yup.string().required().email(),
            // category: yup.string(),
            // .required()
            // .oneOf(['A', 'B'], 'お問い合わせ項目を選択してください'),
            message: yup.string(),
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
        // defaultValues: schema.cast(),
        defaultValues: form,
        resolver: yupResolver(schema, {
            stripUnknown: true,
            abortEarly: false,
        }),
        criteriaMode: 'all',
        mode: 'all',
    })

    const onSubmit = async (data: any) => {
        setStatus('loading')
        const formData = new FormData()

        Object.keys(data).map((key) => {
            formData.append(key, data[key])
        })

        try {
            await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
            })
                .then(async (response) => {
                    const json: any = await response.json()
                    console.log(json)
                    json.code === 200 ? setStatus('sent') : setStatus('failure')
                })
                .catch(() => {
                    setStatus('failure')
                })
        } catch (error) {
            setStatus('failure')
        }
    }

    useEffect(() => {
        status === 'sent' ? setSuccess(true) : setSuccess(false)
        status === 'failure' ? setFaild(true) : setFaild(false)
    }, [status])

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
                    {clsx({
                        送信: status === 'initial',
                        送信中です: status === 'loading',
                        送信完了しました: status === 'sent',
                        送信が失敗しました: status === 'failure',
                    })}
                </button>
            </div>
        </form>
    )
}

export default FormBuilder
