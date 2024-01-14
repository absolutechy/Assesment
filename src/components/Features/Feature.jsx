import "./Feature.css"

const Feature = ({ icon, text }) => {
  return (
        <div className="feature">
            <img src={icon} className="icon" />
            <p className="feature-text">{text}</p>
        </div>
  )
}

export default Feature