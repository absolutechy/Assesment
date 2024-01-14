import "./Review.css"

const Review = ({ userReview1, icon, rating, userName, userDesignation, description,id }) => {
  return (
    <div className="user-review" id={`user-review-${id}`}>
        <div className="top-section">
            <img src={userReview1} className="user-img" />
            <div>
                <p className="user-name">{userName}</p>
                <p className="user-designation">{userDesignation}</p>
            </div>
            <img src={icon} className="side-icon" />
        </div>
        <div className="description"> 
            {description}
        </div>
        <img src={rating} className="rating" />
    </div>
  )
}

export default Review