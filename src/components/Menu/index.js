import './menu.css';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu'>

            <a className='social' href="https://instagram.com/welthanos">
                <BsInstagram size={24} color='#FFF' />
            </a>
            <a className='social' href="https://github.com/Welthanos">
                <BsGithub size={24} color='#FFF' />
            </a>

            <Link className='menu-item' to='/links'>
                Meus links
            </Link>

        </div>
    );
}

export default Menu;