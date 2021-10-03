import { Link } from "react-router-dom";
import './header.css'

const header = () => {
    return (
    <div className="header">
        <Link to='/app' className='title'> QUIZ </Link>
    </div>
    );
}

export default header;