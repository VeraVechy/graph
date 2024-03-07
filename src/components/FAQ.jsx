import React from 'react';

const FAQSection = () => {
  return (
    <div className="container" data-aos="fade-up">
      <h2 className="text-center mb-4">Frequently Asked Questions (FAQ)</h2>
      
      <div className="accordion" id="faqAccordion">

        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                1. Who can participate in the Vechy Graphix Design Challenge?
              </button>          
            </h2>
          </div>

          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
            <div className="card-body">
              The challenge is open to designers and developers of all skill levels and backgrounds. Whether you're a seasoned professional or a passionate hobbyist, we welcome you to join us!
            </div>
          </div>
        </div>

        {/* Additional FAQ items */}
        
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. How do I submit my entry for the Design Challenge?
              </button>          
            </h2>
          </div>

          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
            <div className="card-body">
              To submit your entry, please visit our website and follow the instructions on the submission page. Make sure to provide all required information and attach your design files before the deadline.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. Are there any specific requirements for the design submissions?
              </button>          
            </h2>
          </div>

          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
            <div className="card-body">
              Yes, please make sure to adhere to the guidelines provided in the challenge brief. This includes specifications for file formats, dimensions, and any other relevant details. Failure to comply with these requirements may result in disqualification.
            </div>
          </div>
        </div>

        {/* Add more FAQ items as needed */}

      </div>

    </div>
  );
};

export default FAQSection;