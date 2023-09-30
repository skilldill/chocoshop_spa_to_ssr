import { CatalogContextProvider } from './context/CatalogContext/provider';
import { Navigation } from './navigation/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <CatalogContextProvider>
                <Navigation />
            </CatalogContextProvider>
        </BrowserRouter>
    );
}

export default App;
