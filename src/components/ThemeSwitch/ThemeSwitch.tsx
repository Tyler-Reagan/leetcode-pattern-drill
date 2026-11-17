import styles from './ThemeSwitch.module.sass'
import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function dispatchThemeEvent() {
    document.documentElement.dispatchEvent(new Event('themeChange'))
}

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        // The inline script in index.html has already set data-theme before first paint.
        const current: Theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
        setTheme(current)
        dispatchThemeEvent()
    }, [])

    const handleThemeChange = () => {
        const next: Theme = theme === 'light' ? 'dark' : 'light'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
        try {
            localStorage.setItem(STORAGE_KEY, next)
        } catch {
            // Storage unavailable (private mode, blocked site data): the choice still applies for this page view.
        }
        dispatchThemeEvent()
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                aria-label="Light theme"
                role="switch"
                id="theme-switch"
                type="checkbox"
                // Checked is the light theme: the knob slides right and shows the sun.
                checked={theme === 'light'}
                onChange={handleThemeChange}
            />
            <label className={styles.label} htmlFor="theme-switch" title="Toggle light theme">
                <span className={styles.indicator}>
                    <svg className={styles.moon} viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z" />
                    </svg>
                    <svg className={styles.sun} viewBox="0 0 16 16" aria-hidden="true">
                        <circle cx="8" cy="8" r="2.75" />
                        <path d="M8 1.5v1.75M8 12.75v1.75M1.5 8h1.75M12.75 8h1.75M3.4 3.4l1.25 1.25M11.35 11.35l1.25 1.25M3.4 12.6l1.25-1.25M11.35 4.65l1.25-1.25" />
                    </svg>
                </span>
            </label>
        </div>
    )
}
