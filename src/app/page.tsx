import { fields } from '@/const/form'
import FormBuilder from '@/components/form-builder'

export default function Home() {
    return (
        <>
            <section>
                <h1 className="text-center inner text-dsp-64N-4">Demo Form</h1>
                <FormBuilder fields={fields} />
            </section>
        </>
    )
}
