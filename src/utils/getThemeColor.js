const getThemeColor  = () => {
    const theme = typeof window !== 'undefined' && window.__theme

    if(theme === 'light') return '#FBFBFB'
    if(theme === 'dark') return '#001628'
}

export default getThemeColor