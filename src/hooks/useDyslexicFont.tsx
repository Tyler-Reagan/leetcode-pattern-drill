import { useEffect, useState } from 'react'

const read = () => document.documentElement.getAttribute('data-font') === 'dyslexic'

export function useDyslexicFont() {
    const [on, setOn] = useState(read)

    useEffect(() => {
        const sync = () => setOn(read())
        document.documentElement.addEventListener('fontChange', sync)
        return () => document.documentElement.removeEventListener('fontChange', sync)
    }, [])

    return on
}
