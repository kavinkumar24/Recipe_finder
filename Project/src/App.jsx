// src/App.js
import { Route ,Routes} from 'react-router';
import Home from './components/Home';
import RecipePage from '../src/components/Receipe_page'
import Wishlist from './components/Wishlist';

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:title" element={<RecipePage />} />
                <Route path = "/wishlist" element={<Wishlist />} />
            </Routes>
        
    );
}

export default App;
