import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Auth0Provider} from "@auth0/auth0-react"
import { MantineProvider } from '@mantine/core'
createRoot(document.getElementById('root')).render(
   <StrictMode>
 <Auth0Provider
  domain="dev-c36q3wiqqre4xdtr.us.auth0.com"
  clientId="2OVJ5t85LXV7QwIlPGxpGN7WdfNHeDSe"
  authorizationParams={{
    redirect_uri: "http://localhost:5173",
    audience: "http://localhost:8000",
    scope: "openid profile email offline_access"
  }}
  cacheLocation="localstorage"
  useRefreshTokens={true}
  advancedOptions={{
    defaultScope: "openid profile email offline_access"
  }}
  skipRedirectCallback={window.location.pathname === '/callback'}
>

     <MantineProvider withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
 </Auth0Provider>
  </StrictMode>,
)
