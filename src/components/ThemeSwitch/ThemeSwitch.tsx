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
                aria-label="theme switch"
                id="theme-switch"
                type="checkbox"
                // Checked is the sky/sun look in the sass, which is the light theme.
                checked={theme === 'light'}
                onChange={handleThemeChange}
            />
            <label className={styles.label} htmlFor="theme-switch">
                <span className={styles.indicator} />
                <span className={styles.decoration} />
            </label>
        </div>
    )
}
