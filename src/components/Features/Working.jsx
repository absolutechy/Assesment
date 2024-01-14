import "./Working.css"

const Working = () => {
  return (
    <div className="working-parts">
        <div className="heading-container">
        <h1 className="heading">How Does It Work?</h1>
        </div>
        <div className="line-grid">
            <div className="grid-item">
                <div className="number">1</div>
                <div className="description">
                    <h4>Assesment</h4>
                    <p>At Mental Support, we’ve built an intelligent platform which will take you through a questionnaire in order to help us assess your needs</p>
                </div>
            </div>
            <div className="grid-item">
                <div className="number">2</div>
                <div className="description">
                    <h4>Find Yor Match</h4>
                    <p>Based on your assessment, we’ll help you find the perfect therapist</p>
                </div>
            </div>
            <div className="grid-item">
                <div className="number">3</div>
                <div className="description">
                    <h4>Start Therapy</h4>
                    <p>Start talking to your therapist anytime and anywhere</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Working