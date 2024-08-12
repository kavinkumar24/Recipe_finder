// src/App.js
import { Route ,Routes} from 'react-router';
import Home from './components/Home';
import RecipePage from '../src/components/Receipe_page'

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:title" element={<RecipePage />} />
            </Routes>
        
    );
}

export default App;
