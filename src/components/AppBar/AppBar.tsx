import { useRef } from 'react'
import Topbar from '@/components/Topbar/Topbar'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Appbar() {
    const hamburgerButtonRef = useRef<HTMLButtonElement>(null)

    return (
        <div id="AppBar">
            <Topbar forwardedRef={hamburgerButtonRef} />
            <Sidebar hamburgerButtonRef={hamburgerButtonRef} />
        </div>
    )
}