import "./User.css"

const User = ( { profile, name, title, icon, handleTabClick, id, status }) => {
  return (
    <div className={`user ${status === id ? 'active' : ''}`} onClick={() => handleTabClick(id)}>
        <img src={profile} className="review-user-img" />
        <div className="review-user-info">
            <p className="username">{name}</p>
            <p className="userpost">{title}</p>
        </div>
        <img src={icon} className="test-icon" />
    </div>
  )
}

export default User