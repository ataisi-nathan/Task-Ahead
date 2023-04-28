import { useEffect, useState } from 'react';
import './header.css'

function Header() {
    const [theme, setTheme] = useState("cyan");

    useEffect(() => {
        document.documentElement.className=theme;
    }, [theme])

    return (
        <div className="header">
            <h1>TaskAhead</h1>
            <div className="theme">
                <div onClick={() => setTheme('black')} className="black"></div>
                <div onClick={() => setTheme('cyan')} className="cyan"></div>
                <div onClick={() => setTheme('red')} className="red"></div>
                <div onClick={() => setTheme('gOne')} className="gOne"></div>
                <div onClick={() => setTheme('gTwo')} className="gTwo"></div>
            </div>
        </div>
    );
}
export default Header;