import { createContext, ReactNode, useContext, useState } from 'react'

interface SidebarContextType {
    isSidebarOpen: boolean
    showSidebar: Function
    hideSidebar: Function
    toggleSidebar: Function
}

interface SidebarProviderProps {
    children: ReactNode
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider ({ children }: SidebarProviderProps) {
    // The sidebar belongs to the Reference and Pareto views. The app opens on the Finder, so it starts closed;
    // switching views opens or closes it (see Topbar). The hamburger is inert on the Finder.
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const showSidebar = () => setIsSidebarOpen(true)
    const hideSidebar = () => setIsSidebarOpen(false)
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, showSidebar, hideSidebar, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)

    if (context === undefined) {
        throw new Error('useSidebar must be used within SidebarProvider')
    }

    return context as SidebarContextType
}
