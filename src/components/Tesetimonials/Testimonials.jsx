import { useState } from "react"
import Modal from "react-modal"
import User from "./User"
import CurrentUser from "./CurrentUser"
import User1 from "../../assets/user1.png"
import User2 from "../../assets/user2.png"
import User3 from "../../assets/user3.png"
import Icon from "../../assets/image 29 (Traced).png"
import rating from "../../assets/stars.png"
import "./Testimonials.css"

Modal.setAppElement('#root')

const Testimonials = () => {

    const [activeTab, setActiveTab] = useState(1)
    const [modalOpen, setModalOpen] = useState(false)
    
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        setModalOpen(true)
      };

    const closeModal = () => {
        setModalOpen(false);
    };

  return (
    <section className="testimonials">
        <div className="review-list">
            <h1 className="review-heading">See what Partners are <span className="saying">saying</span></h1>
            <User
                status={activeTab} 
                profile={User1} 
                name="Bessie Copper" 
                title="CEO Amazon" icon={Icon}
                handleTabClick={handleTabClick} 
                id={1}
            />

            <User
                status={activeTab} 
                profile={User2} 
                name="Leslie Alexander" 
                title="Medical Assitant" 
                icon={Icon}
                handleTabClick={handleTabClick}
                id={2}
            />

            <User
                status={activeTab} 
                profile={User3} 
                name="Courtney Henry" 
                title="Marketing Coordinator" 
                icon={Icon}
                handleTabClick={handleTabClick}
                id={3} 
            />
        </div>
        {window.innerWidth < 768 ? (
                <Modal
                isOpen={modalOpen}
                onRequestClose={closeModal}
                contentLabel="User Details Modal"
              >
                {/* Content for the modal */}
                {activeTab === 1 && (
                  <CurrentUser
                    User={User1}
                    icon={Icon}
                    rating={rating}
                    name="Bessie Copper"
                    title="Amazon CEO"
                  />
                )}
                {activeTab === 2 && (
                  <CurrentUser
                    User={User2}
                    icon={Icon}
                    rating={rating}
                    name="Leslie Alexander"
                    title="Medical Assistant"
                  />
                )}
                {activeTab === 3 && (
                  <CurrentUser
                    User={User3}
                    icon={Icon}
                    rating={rating}
                    name="Courtney Henry"
                    title="Marketing Coordinator"
                  />
                )}
                <button onClick={closeModal}>Close Modal</button>
              </Modal>
        ) : (
            <>
                { activeTab === 1 && <CurrentUser 
                                    User={User1} 
                                    icon={Icon} 
                                    rating={rating}
                                    name="Bessie Copper"
                                    title="Amazon CEO"
                                />}
                { activeTab === 2 && <CurrentUser 
                                            User={User2} 
                                            icon={Icon} 
                                            rating={rating}
                                            name="Leslie Alexander"
                                            title="Medical Assistant" 
                                            />}
                { activeTab === 3 && <CurrentUser 
                                        User={User3} 
                                        icon={Icon} 
                                        rating={rating} 
                                        name="Courtney Henry"
                                        title="Marketing Coordinator"
                                    />}
            </>
        )}
    </section>
  )
}

export default Testimonials
