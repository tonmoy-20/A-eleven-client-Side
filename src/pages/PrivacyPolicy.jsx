import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto  shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-6">
          Privacy Policy
        </h1>

        <p className=" text-sm text-center mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <section className="space-y-4 ">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-red-500">LifeDrop</span>. Your
            privacy is very important to us. This Privacy Policy document
            explains how we collect, use, and protect your personal information
            when you use our platform.
          </p>
        </section>

        {/* Information Collection */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-se">1. Information We Collect</h2>
          <p className="">We may collect the following information:</p>
          <ul className="list-disc list-inside  space-y-1">
            <li>Name, email address, and profile photo</li>
            <li>Blood group, district, and upazila</li>
            <li>Login and authentication information</li>
            <li>Usage data to improve our services</li>
          </ul>
        </section>

        {/* Usage */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside  space-y-1">
            <li>To create and manage user accounts</li>
            <li>To connect blood donors with recipients</li>
            <li>To improve our platform and user experience</li>
            <li>To communicate important updates or notifications</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">3. Data Security</h2>
          <p className="">
            We take appropriate security measures to protect your personal data.
            However, no method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Sharing */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">4. Sharing of Information</h2>
          <p className="">
            We do not sell or rent your personal information. Your data may only
            be shared when required by law or to provide essential services on
            our platform.
          </p>
        </section>

        {/* Cookies */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">5. Cookies</h2>
          <p className="">
            We may use cookies to enhance user experience, analyze usage, and
            improve performance. You can disable cookies in your browser
            settings if you prefer.
          </p>
        </section>

        {/* User Rights */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">6. Your Rights</h2>
          <p className="">
            You have the right to access, update, or delete your personal
            information at any time. If you have any concerns, please contact
            us.
          </p>
        </section>

        {/* Changes */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">7. Changes to This Policy</h2>
          <p className="">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated date.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold ">8. Contact Us</h2>
          <p className="">
            If you have any questions about this Privacy Policy, feel free to
            contact us at:
          </p>
          <p className="text-red-500 font-medium">support@lifedrop.com</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
