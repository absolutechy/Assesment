import "./End.css"
import ScrollUp from "../../assets/scrollup.png"
import logo from "../../assets/Vector.svg"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import Telegram from "../../assets/telegram.png"

const End = () => {
  return (
    <section className="end">
        <img src={ScrollUp} className="scrollup-icon" />
        <img src={logo} className="end-logo" />
        <div className="links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Knowledge</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="icons">
            <img src={Facebook} />
            <img src={Twitter} />
            <img src={Linkedin} />
            <img src={Instagram} />
            <img src={Telegram} />
        </div>
        <footer>
            © 2023 Mental Support.  All rights reserved, Privacy Policy and Terms of Use
        </footer>
    </section>
  )
}

export default End