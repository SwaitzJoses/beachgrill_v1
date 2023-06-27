import './navbar.css'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_container'>
      <img src={logo} className='nav_logo' alt='beachgrill'/>
      <p className='nav_title'> Beach Grill</p>
      <Link className='nav_admin' to='.\adminURL'><p className='admin_p'>Admin</p></Link>
      </div>
      </nav>
  )
}
export default Navbar