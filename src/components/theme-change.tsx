'use client'

import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import tailwindConfig from '../../tailwind.config'
import { SunIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const ThemeChange = ({ className }: { className?: string }) => {
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <div className={clsx('dropdown dropdown-end', className)}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
                area-label="theme-change"
            >
                <SunIcon className="h-6 w-6" />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-auto p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-60 overflow-scroll"
            >
                <li>
                    <button
                        className="btn btn-sm btn-block btn-ghost justify-start capitalize"
                        aria-label="Default"
                        data-set-theme="default"
                    >
                        default
                    </button>
                </li>
                {tailwindConfig.daisyui.themes.map((theme: string) => (
                    <li key={theme}>
                        <button
                            className="btn btn-sm btn-block btn-ghost justify-start capitalize"
                            data-set-theme={theme}
                            aria-label={theme}
                        >
                            {theme}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ThemeChange
