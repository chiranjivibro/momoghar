import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Context/CartProvider.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <CartProvider> 
    <Auth0Provider
        domain="dev-pd0cgrakyokhjcca.us.auth0.com"
        clientId="BUtraHdVj21Vq75KjkNEd4EmqI7Lr9hU"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>
    </CartProvider>
    </BrowserRouter>
    
  
)
