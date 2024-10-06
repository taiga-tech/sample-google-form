// components
import {
    CheckboxField,
    Confirm,
    DateField,
    DateTimeField,
    RadioField,
    RatingField,
    SelectField,
    TextArea,
    TextField,
    TimeField,
} from '@/components/input/fields'

export interface InputFieldProps {
    component: any
    name: string
    label: string
    required: boolean
    placeholder?: string
    className?: string
    rows?: number
    options?: { label: string; value: string }[] | string[]
}

export const fields: InputFieldProps[] = [
    {
        component: TextField,
        name: 'entry.1053370738',
        label: 'テキスト',
        placeholder: '回答を入力',
        required: false,
    },
    {
        component: TextArea,
        name: 'entry.487689535',
        label: 'テキストエリア',
        placeholder: '回答を入力',
        rows: 8,
        required: false,
    },
    {
        component: RadioField,
        name: 'entry.629616156',
        label: 'ラジオボタン',
        options: [
            { label: '選択肢 1', value: '選択肢 1' },
            { label: '選択肢 2', value: '選択肢 2' },
            { label: 'その他', value: '' },
        ],
        required: false,
    },
    {
        component: CheckboxField,
        name: 'entry.845819285',
        label: 'チェックボックス',
        options: [
            { label: '選択肢 1', value: '選択肢 1' },
            { label: '選択肢 2', value: '選択肢 2' },
            { label: 'その他', value: '' },
        ],
        required: false,
    },
    {
        component: SelectField,
        name: 'entry.599813633',
        label: 'セレクト',
        options: [
            { label: '選択肢 1', value: '選択肢 1' },
            { label: '選択肢 2', value: '選択肢 2' },
        ],
        required: false,
    },
    {
        component: RatingField,
        name: 'entry.1599741165',
        label: 'レーティング',
        options: ['1', '2', '3', '4', '5'],
        required: false,
    },
    {
        component: DateTimeField,
        name: 'entry.?????',
        label: '日付時間',
        required: false,
    },
    {
        component: DateField,
        name: 'entry.???',
        label: '日付',
        required: false,
    },
    {
        component: TimeField,
        name: 'entry.????',
        label: '時間',
        required: false,
    },
    {
        component: Confirm,
        name: 'confirm',
        label: 'プライバシーポリシーに同意して送信する',
        required: true,
    },
]
