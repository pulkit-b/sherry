import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proposal from './pages/Proposal';
import './static/styles/app.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Proposal />} />
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
