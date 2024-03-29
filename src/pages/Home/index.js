import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import { useState } from 'react';
import api from '../../services/api';
import { saveLink } from '../../services/storedLinks';


function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({})

    async function handleShortLink() {
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            setData(response.data);
            setShowModal(true)

            saveLink('@encurtaLink', response.data);

            setLink('')

        } catch {
            alert('Ops! Parece que algo deu errado...');
            setLink('');
        }
    }

    return (
        <div className="container-home">

            <div className='logo'>
                <img src="logo.png" alt="MyLink logo" />
                <h1>MyLink</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input
                        placeholder='Cole seu link aqui...'
                        value={link}
                        onChange={((e) => setLink(e.target.value))}
                    />
                </div>

                <button onClick={handleShortLink}>Encurtar</button>
            </div>

            <Menu />

            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />
            )}

        </div>
    );
}

export default Home;
