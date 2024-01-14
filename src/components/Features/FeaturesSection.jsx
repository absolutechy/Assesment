import Feature from "./Feature";
import Working from "./Working";
import Extras from "./Extras";
import CalanderIcon from "../../assets/calander.png"
import VideoIcon from "../../assets/video.png"
import SecureIcon from "../../assets/secure-chat.png"
import DigitalIcon from "../../assets/Digital.png"
import MonitorIcon from "../../assets/monitor.png"
import KeyIcon from "../../assets/key.png"
import MessageIcon from "../../assets/secure-message.png"
import VoiceMsgIcon from "../../assets/voice-message.png"
import VideoCallIcon from "../../assets/video-call.png"
import "./FeaturesSection.css"

const FeaturesSection = () => {
  return (
    <section className="main-things">
        <div className="our-features">
            <Feature icon={CalanderIcon} text="Virtual Appointments" />
            <Feature icon={VideoIcon} text="Secure Video Conferencing" />
            <Feature icon={SecureIcon} text="Secure & Private Chat" />
            <Feature icon={DigitalIcon} text="Digital intake and assessments" />
            <Feature icon={MonitorIcon} text="Ongoing Monitoring" />
            <Feature icon={KeyIcon} text="Access to mental health resources" />
        </div>
        <Working />
        <div className="extras-container">
          <Extras 
              icon={MessageIcon} 
              title="Secure Messaging"
              description="We offer text messaging services to help you connect with your therapist when you are feeling under the weather"
          />
          <Extras 
              icon={VoiceMsgIcon}
              title="Voice Messaging"
              description="Whenever you feel the need, record and send a message to your therapist"
          />
          <Extras 
              icon={VideoCallIcon}
              title="Secure Video Calling "
              description="Patients and therapists benefit from private video calls"
          />
        </div>
    </section>
  )
}

export default FeaturesSection