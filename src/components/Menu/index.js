import './menu.css';
import { Link } from 'react-router-dom';

export default function Menu () {
  return (
    <div className='menu'>
      <Link to={'/links'} className="menu-item">Meus links</Link>
    </div>
  )
}