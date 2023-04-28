import { Link } from 'react-router-dom';
import './header.css'

function SkillShowHeader() {
    return (
        <div className="skill-header">
            <h1>SkillShow</h1>
            <div className="nav">
                <Link to='/projects/skillshow/'>Home</Link>
                <Link to='/projects/skillshow/movies/popular'>Popular</Link>
                <Link to='/movies/top'>Top Rated</Link>
                <Link to='/projects/skillshow/movies/upcoming'>Upcoming</Link>
            </div>
            <div className="header-right">
                <div className="theme"></div>
                <input type="search" name="search" placeholder="Search..." />
            </div>
        </div>
    );
}
export default SkillShowHeader;