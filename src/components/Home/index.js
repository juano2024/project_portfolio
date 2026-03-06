import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { Link } from 'react-router-dom';
const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                lobodan
                <br />
                Frontend Developer / JavaScript Expert / React Enthusiast
                </h1>
                <h2>Web developer</h2>
                <Link to= "/contact" className='flat-button'>Contact me</Link>
            </div>

        </div>
    );
}

export default Home;