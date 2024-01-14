import logo from "../../assets/Vector.svg"
import "./Header.css"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
            <a href="#" className="navbar-brand">
                <img src={logo} className="img-fluid" alt="" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item px-3">
                        <a href="#learn" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item px-3">
                        <a href="#questions" className="nav-link">About</a>
                    </li>
                    <li className="nav-item px-3">
                        <a href="#instructors" className="nav-link">What we Treat</a>
                    </li>
                    <li className="nav-item px-3">
                        <a href="#instructors" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item px-3">
                        <a href="#instructors" className="nav-link">Contact Us</a>
                    </li>

                </ul>
                <button className="btn btn-primary nav-btn">Get Started</button>
            </div>
        </div>
</nav>
  )
}

export default Header