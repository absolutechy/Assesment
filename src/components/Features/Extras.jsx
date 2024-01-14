import "./Extras.css"

const Extras = ({ icon, title, description }) => {
  return (
        <div className="extras">
            <img src={icon} className="icon" />
            <h4 className="extras-title">{title}</h4>
            <p className="extras-description">{description}</p>
        </div>
  )
}

export default Extras