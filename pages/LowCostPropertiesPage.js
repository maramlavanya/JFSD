import React from 'react';
import './LowCostPropertiesPage.css';

const LowCostPropertiesPage = () => {
  return (
    <div className="low-cost-properties-page">
      {/* How it Works Section */}
      <div className="how-it-works">
        <h2>How it Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Speak with our Representative</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Choose your instalments</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>
              Upload supporting documents
              <br />
              <span className="step-description">
                As a final step, you need to upload the supporting documents on
                the app/website. The details on how to upload will also be
                present. The team will validate and confirm within 24 hours.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <div className="eligibility-criteria">
        <h2>Eligibility Criteria</h2>
        <div className="criteria">
          <div className="criteria-item">
            <img src="data:image/png;base64,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" alt="Age Icon"/>
            <p>Age bracket 19-65 years</p>
          </div>
          <div className="criteria-item">
            <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/good-credit-score.jpg" alt="Credit Score Icon" />
            <p>Credit score of 625 and above</p>
          </div>
          <div className="criteria-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR989UftUu0yeF9bhD4S2k5FmXfnlzJ9XVllQ&s" alt="Secure Residence Icon" />
            <p>Secure residence and income</p>
          </div>
          <div className="criteria-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_5SOD5K-JUkZ0N1ikAg4oXGB1zMy1dljPA&s" alt="Income Icon" />
            <p>Income greater than INR 20,000 per month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LowCostPropertiesPage;
