import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer.jsx'

function Layout() {
    return (
        <div>
            <Menu />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;