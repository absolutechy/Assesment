import doctorsTeamImage from '../../assets/docsTeam.svg'
import "./Professionals.css"
const Professionals = () => {
  return (
    <section className="pro-doctors">
        <div className="pro-docs-container">
            <img src={doctorsTeamImage} className='doctors-image' alt="" />
            <div className="doctor-text">
                <h1 className='doctor-heading'>
                    <span className='text-highlight'>Professional</span>, <span id='random'>Licensed,</span> And <span className='text-highlight' id='random'>Vetted Therapists</span> Who You Can Trust
                </h1>
                <p className='doctor-description'>
                At Mental Support, you’re in good hands. Our team of clinicians are vetted and highly experienced at providing counseling services in a secure and confidential manner.
                </p>
                <p className='doctor-description'>
                Our clinicians focus on improving mental health and support our clients throughout their journey in life.
                </p>
                <p className='doctor-description'>
                All our clinicians go through a stringent verification process which ensures that you’re always matched with a vetted clinician.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Professionals