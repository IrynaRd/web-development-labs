import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './containers/App/App'
import { store } from '../src/states/store';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
)
