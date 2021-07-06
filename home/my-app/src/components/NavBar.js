import '../style/NavBar.css'
import logo from '../logo.png'
import bc from '../background.png'

function NavBar(){
    return(
<div className="Nav">

<div className="Nav-container flex">
<div className="left">
<img src={logo} alt="curawella-logo" width="36" height="36">
</img>
<h1><span>Curawella</span></h1>

</div>
<div className="right">
    <nav>
        <ul>
            <li><a class="Navbar_nav-link__3hdV1 " href="https://curawella.com/about">About us</a></li>
            <li><a class="Navbar_nav-link__3hdV1 " href="https://curawella.com/products">Products</a></li>
            <li><a class="Navbar_nav-link__3hdV1 " href="https://curawella.com/about">Blogs</a></li>
            <li><a class="Navbar_nav-link__3hdV1 " href="https://curawella.com/contact">Contact us</a></li>
        </ul>
    </nav>
</div>
</div>
</div>
    )
}
export default NavBar;

<div class="ml-auto navbar-nav">


</div>