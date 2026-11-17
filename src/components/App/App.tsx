import '@styles/styles.sass'

import React from 'react'
import { LanguageProvider } from '@components/Language/LanguageProvider'
import { SidebarProvider } from '@components/Sidebar/SidebarProvider'
import { ViewProvider } from '@components/View/ViewProvider'

import Background from '@components/Background/Background'
import Appbar from '@/components/AppBar/AppBar'
import Content from '@components/Content/Content'

export default function App() {
    return (
        <React.StrictMode>
            <SidebarProvider>
                <LanguageProvider>
                    <ViewProvider>
                        <div className="App">
                            <Background />
                            <Appbar />
                            <Content />
                        </div>
                    </ViewProvider>
                </LanguageProvider>
            </SidebarProvider>
        </React.StrictMode>
    )
}
