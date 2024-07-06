export interface RouteProps {
    title: string
    label: string
    href: string
    type?: string | undefined
    links?: RouteProps[]
}

export interface RoutesPorps {
    [x: string]: { [x: string]: RouteProps[] | RouteProps }
}

interface RouteObject {
    [x: string]: RouteProps
}

export const ROUTE: RouteObject = {
    home: {
        title: 'HOME',
        label: 'ホーム',
        href: '/',
    },
    news: {
        title: 'NEWS',
        label: 'ニュース',
        href: '/news',
    },
    about: {
        title: 'ABOUT',
        label: '概要',
        href: '/#about',
    },
    company: {
        title: '会社概要',
        label: '会社概要',
        href: '/company',
    },
    blog: {
        title: 'BLOG',
        label: 'ブログ',
        href: '/blog',
    },
    contact: {
        title: 'CONTACT',
        label: 'お問い合わせ',
        href: '/contact',
        type: 'button',
    },
    terms: {
        title: '利用規約',
        label: '利用規約',
        href: '/legal/terms',
    },
    privacyPolicy: {
        title: '個人情報保護方針',
        label: 'プライバシーポリシー',
        href: '/legal/privacy-policy',
    },
}

export const SECTIONS = {
    company: {
        title: 'COMPANY',
        label: '会社概要',
        href: '/#company',
    },
    contact: {
        title: 'CONTACT',
        label: 'お問い合わせはこちら',
        href: '/#contact',
    },
}

export const API_ENDPOINT: RouteObject = {
    sendContact: {
        title: 'sendmail',
        label: 'sendmail',
        href: '/api/v1/send',
    },
}

const routeList = [SECTIONS.company, ROUTE.contact]

export const ROUTES = {
    header: {
        home: ROUTE.home,
        nav: [...routeList],
        drawer: [...routeList],
    },

    footer: {
        nav: [
            // {
            //     title: 'Product',
            //     links: [],
            // },
            {
                title: 'Company',
                links: [ROUTE.company, ROUTE.contact],
            },
            {
                title: 'LEGAL',
                links: [ROUTE.privacyPolicy],
            },
        ],
    },
}
