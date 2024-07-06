import ThemeChange from '@/components/theme-change'

const Header = () => {
    const links: string[] = ['メニュー1', 'メニュー2']
    return (
        <header className="sticky top-0 bg-base-200/90">
            <div className="h-20 inner">
                <div className="flex justify-between items-center h-full gap-4">
                    <a
                        className="btn btn-ghost text-center font-bold"
                        href="/"
                        title="HOME"
                    >
                        ロゴ
                    </a>
                    <nav className="flex gap-4">
                        <ul className="hidden md:flex items-center gap-4">
                            {links.map((link) => (
                                <li key={link} className="cursor-not-allowed">
                                    {link}
                                </li>
                            ))}
                        </ul>
                        <ThemeChange />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
