import './error.css';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="container-error">
            <img src="./notfound.png" alt="Página não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar à página inicial
            </Link>
        </div>
    );
}

export default Error;