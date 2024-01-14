import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"
import mobile from "../../assets/iphone.png"
import "./Phone.css"

const Phone = () => {
  return (
    <section className="mobile-downloads">
        <div className="download-info">
            <h1>Mobile App Are Available On Google Playstore</h1>
            <img src={google} className="google" />
            <img src={apple} className="apple" />
        </div>
        <div className="mobile-div">
            <img src={mobile} className="mobile" />
        </div>
    </section>
  )
}

export default Phone