import '@styles/global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Root } from '@pages/Root.tsx'

const rootElement = document.getElementById('root')
const rootNode = createRoot(rootElement as HTMLDivElement)

rootNode.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
