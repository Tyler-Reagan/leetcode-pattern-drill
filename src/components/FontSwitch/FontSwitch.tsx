import styles from './fontswitch.module.sass'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'dyslexic-font'

// OpenDyslexic is only fetched once someone turns it on.
function loadFace() {
    void import('@fontsource/opendyslexic/400.css')
    void import('@fontsource/opendyslexic/700.css')
}

export default function FontSwitch() {
    const [on, setOn] = useState(false)

    useEffect(() => {
        // The inline script in index.html has already set data-font before first paint.
        const active = document.documentElement.getAttribute('data-font') === 'dyslexic'
        if (active) loadFace()
        setOn(active)
    }, [])

    const toggle = () => {
        const next = !on
        setOn(next)
        if (next) {
            loadFace()
            document.documentElement.setAttribute('data-font', 'dyslexic')
        } else {
            document.documentElement.removeAttribute('data-font')
        }
        try {
            localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
        } catch {
            // Storage unavailable (private mode, blocked site data): the choice still applies for this page view.
        }
    }

    return (
        <button
            type="button"
            className={styles.button}
            aria-pressed={on}
            aria-label="OpenDyslexic font"
            title="Use the OpenDyslexic font"
            onClick={toggle}
        >
            Aa
        </button>
    )
}
