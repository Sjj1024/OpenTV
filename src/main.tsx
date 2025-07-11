import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/index.css'
import React from 'react'
import { isMobile } from './utils/common'

const App = React.lazy(() =>
    isMobile() ? import('./mobile/index') : import('./web/index')
)

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
