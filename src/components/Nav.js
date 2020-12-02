import {Link} from 'react-router-dom'

const Nav = () => {
   return (
      <nav>
         <h2>LOGO</h2>
         <ul className="nav-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Users</li></Link>
            <Link to="about"><li>About</li></Link>
         </ul>
      </nav>
   )
}

export default Nav
