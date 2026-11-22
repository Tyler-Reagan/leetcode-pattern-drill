import styles from './LinkWithTooltip.module.sass'
import { useRef, useState } from 'react'
import Tooltip from '@components/Tooltip/Tooltip'
import { useTocLink } from '@components/TableOfContents/useTocLink'

interface LinkWithTooltipProps {
    href: string
    description: string
}

export default function LinkWithTooltip({ href, description }: LinkWithTooltipProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    let hoverTimer: NodeJS.Timeout

    const { isCurrent, onClick } = useTocLink(href, () => {
        clearTimeout(hoverTimer)
        setShowTooltip(false)
    })

    const handleMouseEnter = () => {
        hoverTimer = setTimeout(() => {
            setShowTooltip(true)
        }, 700)
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimer)
        setShowTooltip(false)
    }

    return (
        <div className={styles.linkWrapper}>
            <a
                ref={ref}
                href={href}
                className={styles.link}
                onClick={onClick}
                role="button"
                aria-current={isCurrent ? 'location' : undefined}
                aria-description={description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {description}
            </a>
            <Tooltip anchorRef={ref} content={description} showTooltip={showTooltip} />
        </div>
    )
}
