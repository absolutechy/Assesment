const CurrentUser = ({ User, icon, rating, name, title }) => {
  return (
    <div className="current-user">
            <div className="current-user-info">
                <img src={User} className="review-user-img" />
                <div className="review-user-info">
                    <p className="username">{name}</p>
                    <p className="userpost">{title}</p>
                </div>
                <img src={icon} className="current-user-icon" />
            </div>
            <img src={rating} className="current-rating"/>
            <div className="review-description">
                <span className="para1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                </span>

                <span className="para2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                </span>

                <span className="para3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been the industry's standard dummy text ever since the 1500s.
                </span>
            </div>
        </div>
  )
}

export default CurrentUser