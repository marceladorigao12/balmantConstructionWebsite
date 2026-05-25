// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
{/*import AboutUs from './pages/AboutUs.jsx';}
import Services from './pages/Services';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx'*}*/}

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    {/*<Route path="aboutUs" element={<AboutUs/>} />
                    <Route path="services" element={<Services />} />
                    <Route path="gallery" element={<Gallery/>} />
                    <Route path="contact" element={<Contact/>} />*/}

                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;