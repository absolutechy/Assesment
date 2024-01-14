import doc from '../../assets/intro-doc.svg'
import scrollIcon from '../../assets/scroll.svg'
import userReview1 from '../../assets/user1.png'
import icon from '../../assets/image 29 (Traced).png'
import rating from '../../assets/stars.png'
import Review from './Review'
import "./Intro.css"

const Body = () => {
  return (
    <section className="intro">
       <div className="content">
            <div className="intro-text">
                <h1>Adult And <span className="intro-highlights" >Youth Mental Health </span>Services At <span className="intro-highlights" >You Fingertips</span></h1>
                <p>
                Mental Support offers access to a trained and qualified team of clinicians though our on demand network for individuals seeking counseling services.
                </p>
                <button className="intro-btn">Get Started</button>
            </div>
            <div className="images-container">
                <img src={doc} className="doctor" alt="" />
                <Review
                    id={1} 
                    userReview1={userReview1} 
                    icon={icon} 
                    rating={rating}
                    userName="Ralph Edwards"
                    userDesignation="CEO Amazon"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Review
                    id={2} 
                    userReview1={userReview1} 
                    icon={icon} 
                    rating={rating}
                    userName="Mark Evony"
                    userDesignation="CEO Amazon"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>
       </div>
        <a href="#" className="scroll-btn">
            <img src={scrollIcon} className="scroll-icon" alt="Scroll down" />
            <span className="scroll-text">Scroll down</span>
        </a>

    </section>
  )
}

export default Body