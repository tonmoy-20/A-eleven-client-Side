import React from "react";

const Faq = () => {
  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto  shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-center  mb-8">
          Find answers to the most common questions about LifeDrop
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium ">
              What is LifeDrop?
            </div>
            <div className="collapse-content ">
              <p>
                LifeDrop is a blood donation platform that connects blood donors
                with people who need blood. Our goal is to make blood donation
                faster, safer, and more accessible.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium ">
              Who can donate blood?
            </div>
            <div className="collapse-content ">
              <p>
                Generally, anyone who is healthy, aged 18–60 years, and meets
                the medical requirements can donate blood. Always consult a
                healthcare professional before donating.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium ">
              Is my personal information safe?
            </div>
            <div className="collapse-content ">
              <p>
                Yes. We take data privacy seriously and use secure systems to
                protect your personal information. We never sell or misuse your
                data.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium ">
              How can I request blood?
            </div>
            <div className="collapse-content ">
              <p>
                After logging in, go to the Blood Donation Request section and
                submit a request with the required details such as blood group,
                location, and urgency.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium ">
              Is LifeDrop free to use?
            </div>
            <div className="collapse-content ">
              <p>
                Yes. LifeDrop is completely free for donors and recipients. Our
                mission is to save lives, not to make profit.
              </p>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              How often can I donate blood?
            </div>
            <div className="collapse-content ">
              <p>
                Usually, a person can donate blood every 3–4 months. This may
                vary depending on health condition and medical advice.
              </p>
            </div>
          </div>

          {/* FAQ 7 */}
          <div className="collapse collapse-arrow border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              How can I contact support?
            </div>
            <div className="collapse-content">
              <p>
                You can contact us through our support email or the contact
                section on the website. We are always here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
