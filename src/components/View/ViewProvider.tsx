import { createContext, ReactNode, useContext, useState } from 'react'

export type View = 'cheatsheet' | 'finder'

interface ViewContextType {
    view: View
    setView: (view: View) => void
}

interface ViewProviderProps {
    children: ReactNode
}

const ViewContext = createContext<ViewContextType | undefined>(undefined)

export function ViewProvider({ children }: ViewProviderProps) {
    const [view, setView] = useState<View>('finder')

    return (
        <ViewContext.Provider value={{ view, setView }}>
            {children}
        </ViewContext.Provider>
    )
}

export function useView() {
    const context = useContext(ViewContext)

    if (context === undefined) {
        throw new Error('useView must be used within ViewProvider')
    }

    return context as ViewContextType
}
