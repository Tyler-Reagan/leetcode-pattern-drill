import {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
} from 'react'

type Language = 'python' | 'javascript' | 'java' | 'cpp'

export const LANGUAGES: Language[] = ['python', 'javascript', 'java', 'cpp']

function readStoredLanguage(): Language {
    try {
        const stored = localStorage.getItem('selectedLanguage') as Language | null
        return stored && LANGUAGES.includes(stored) ? stored : 'python'
    } catch {
        return 'python'
    }
}

interface LanguageContextType {
    selectedLanguage: Language
    setSelectedLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
)

interface LanguageProviderProps {
    children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(readStoredLanguage)

    useEffect(() => {
        try {
            localStorage.setItem('selectedLanguage', selectedLanguage)
        } catch {
            // storage is unavailable (blocked cookies, sandboxed frame)
        }
    }, [selectedLanguage])

    return (
        <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)

    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }

    return context as LanguageContextType
}
