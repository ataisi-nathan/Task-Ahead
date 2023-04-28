import './Two.css';
import Home from '../assets/heart.png'

function Two() {
    return (
        <div className="container">
            <h1 className="title">Component 2</h1>
            <h2 className="hard">E no too hard</h2>
            <h3 className="play">Dey Play</h3>
            <img src={Home} alt="Heart Logo" />
        </div>
    );
}

export default Two;