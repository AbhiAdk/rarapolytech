import { Link } from "react-router-dom";

const Navbar = () => {
    const routes = [
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/about",
            name:"About"
        },
        {
            path:"/product",
            name:"Product"
        },
        {
            path:"/services",
            name:"Services"
        },
        {
            path:"/contact",
            name:"Contact Us"
        },
    ]
    return (
        <header className='navbar'>
            <div className='navbar__title navbar__item'>RARAPOLYTECH</div>
            <div className='navbar__item'>
                {routes.map((route) => (
                    <Link style={{textDecoration: 'none', color: 'black', fontSize: '20px'}} key={route.name} to={route.path}>{route.name}</Link>
                ))}
            </div>       
        </header>
    );
};

export default Navbar;