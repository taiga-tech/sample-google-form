import type { NextApiRequest, NextApiResponse } from 'next'
import cheerio from 'cheerio'

const handrer = async (req: NextApiRequest, res: NextApiResponse) => {
    const ENDPOINT: string = process.env.FORM_URL || ''

    if (!Boolean(ENDPOINT)) return res.status(500).send('ENDPOINT is required')

    const html = await (await fetch(ENDPOINT)).text()
    const $ = cheerio.load(html)
    const formAction = $('form').attr('action')
    const script = getJavaScriptVariable($, 'FB_PUBLIC_LOAD_DATA_')
    res.status(200).json(JSON.parse(script))
}

function getJavaScriptVariable($: any, variableName: string) {
    // 配列の値を格納する変数
    let result: string = ''

    // scriptタグを対象に変数を探す
    $('script').each((index: number, element: any) => {
        const scripts = $(element).html()
        // スクリプト内で変数が定義されているか確認
        if (scripts.includes(variableName)) {
            // 変数の値を取得するための正規表現
            var regex = new RegExp(
                /var\s+FB_PUBLIC_LOAD_DATA_\s*=\s*(\[.*?\]);/
            )
            const match = scripts.match(regex)
            result = match[1]
        }
    })

    return result
}

export default handrer
